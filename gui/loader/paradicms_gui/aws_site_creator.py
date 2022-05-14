import logging
from typing import Dict, Optional

import boto3
from configargparse import ArgParser
from mypy_boto3_cloudfront.client import CloudFrontClient
from mypy_boto3_route53.client import Route53Client
from mypy_boto3_s3.service_resource import (
    Bucket,
    BucketWebsite,
    S3ServiceResource,
)


class AwsSiteCreator:
    def __init__(
        self,
        *,
        acm_certificate_arn: str,
        fqdn: str,
        route_53_hosted_zone_id: str,
        aws_access_key_id: Optional[str] = None,
        aws_secret_access_key: Optional[str] = None,
    ):
        self.__acm_certificate_arn = acm_certificate_arn
        self.__aws_access_key_id = aws_access_key_id
        self.__aws_secret_access_key = aws_secret_access_key
        self.__fqdn = fqdn
        self.__logger = logging.getLogger(self.__class__.__name__)
        self.__route_53_hosted_zone_id = route_53_hosted_zone_id

    @property
    def __aws_credential_kwds(self) -> Dict[str, str]:
        kwds = {}
        if self.__aws_access_key_id is not None:
            kwds["aws_access_key_id"] = self.__aws_access_key_id
        if self.__aws_secret_access_key is not None:
            kwds["aws_secret_access_key"] = self.__aws_secret_access_key
        return kwds

    def create_aws_site(self):
        s3_bucket_name = self.__create_s3_bucket()
        cloud_front_distribution_domain_name = self.__create_cloud_front_distribution(
            s3_bucket_name=s3_bucket_name
        )
        self.__create_route_53_record(
            cloud_front_distribution_domain_name=cloud_front_distribution_domain_name
        )

    def __create_cloud_front_distribution(self, *, s3_bucket_name: str):
        """
        Create a CloudFront distribution to serve the given S3 bucket.
        :return: CloudFront distribution domain name
        """

        cloud_front_client: CloudFrontClient = boto3.client(
            "cloudfront", **self.__aws_credential_kwds
        )  # type: ignore
        self.__logger.debug("creating CloudFront distribution")
        try:
            create_distribution_result = cloud_front_client.create_distribution(
                DistributionConfig={
                    "Aliases": {"Quantity": 1, "Items": [self.__fqdn]},
                    "DefaultCacheBehavior": {
                        "Compress": True,
                        "DefaultTTL": 86400,
                        "ForwardedValues": {
                            "Cookies": {
                                "Forward": "none",
                            },
                            "QueryString": False,
                        },
                        "MaxTTL": 31536000,
                        "MinTTL": 1,
                        "TargetOriginId": s3_bucket_name,
                        "ViewerProtocolPolicy": "redirect-to-https",
                    },
                    "CallerReference": s3_bucket_name,
                    "Comment": "",
                    "DefaultRootObject": "index.html",
                    "Enabled": True,
                    "Origins": {
                        "Quantity": 1,
                        "Items": [
                            {
                                "Id": s3_bucket_name,
                                "DomainName": f"{s3_bucket_name}.s3-website-us-east-1.amazonaws.com",
                                "CustomOriginConfig": {
                                    "HTTPPort": 80,
                                    "HTTPSPort": 443,
                                    "OriginProtocolPolicy": "http-only",
                                },
                            }
                        ],
                    },
                    "PriceClass": "PriceClass_100",
                    "ViewerCertificate": {
                        "ACMCertificateArn": self.__acm_certificate_arn,
                        # "Certificate": self.__acm_certificate_arn,
                        # "CertificateSource": "acm",
                        "CloudFrontDefaultCertificate": False,
                        "MinimumProtocolVersion": "TLSv1.2_2019",
                        "SSLSupportMethod": "sni-only",
                    },
                }
            )
            self.__logger.debug(
                "create_distribution result: %s", create_distribution_result
            )
            self.__logger.info("created CloudFront distribution")
            cloud_front_distribution_domain_name = create_distribution_result[
                "Distribution"
            ]["DomainName"]
        except cloud_front_client.exceptions.DistributionAlreadyExists as e:
            message = e.response["Message"]
            message_split = message.split()
            assert message_split[-3] == "Already", message_split
            assert message_split[-2] == "exists:", message_split
            cloud_front_distribution_id = message_split[-1]
            self.__logger.info(
                "CloudFront distribution already exists: %s",
                cloud_front_distribution_id,
            )
            get_distribution_result = cloud_front_client.get_distribution(
                Id=cloud_front_distribution_id
            )
            cloud_front_distribution_domain_name = get_distribution_result[
                "Distribution"
            ]["DomainName"]
        self.__logger.info(
            "CloudFront distribution domain name: %s",
            cloud_front_distribution_domain_name,
        )
        return cloud_front_distribution_domain_name

    def __create_s3_bucket(self) -> str:
        """
        Create an S3 bucket to host the site.
        :return the name of the S3 bucket
        """

        s3_bucket_name = self.__fqdn
        s3_service_resource: S3ServiceResource = boto3.resource(
            "s3", **self.__aws_credential_kwds
        )  # type: ignore

        self.__logger.debug("creating S3 bucket %s", s3_bucket_name)
        s3_bucket: Bucket = s3_service_resource.Bucket(s3_bucket_name)
        create_bucket_result = s3_bucket.create(ACL="public-read")
        self.__logger.debug("create_bucket result: %s", create_bucket_result)
        self.__logger.info("created S3 bucket %s", s3_bucket_name)

        self.__logger.debug("putting S3 bucket policy")
        bucket_policy = s3_service_resource.BucketPolicy(s3_bucket_name)
        bucket_policy.put(
            Policy="""\
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::%(s3_bucket_name)s/*"
        }
    ]
}
"""
            % locals()
        )
        self.__logger.info("put S3 bucket policy")

        s3_bucket_website: BucketWebsite = s3_service_resource.BucketWebsite(
            s3_bucket_name
        )
        self.__logger.debug("making the S3 bucket %s a web site", s3_bucket_name)
        s3_bucket_website.put(
            WebsiteConfiguration={
                "ErrorDocument": {
                    "Key": "error.html",
                },
                "IndexDocument": {"Suffix": "index.html"},
            }
        )
        self.__logger.info("made the S3 bucket %s a web site", s3_bucket_name)

        return s3_bucket_name

    def __create_route_53_record(self, *, cloud_front_distribution_domain_name: str):
        route_53_client: Route53Client = boto3.client(
            "route53", **self.__aws_credential_kwds
        )  # type: ignore
        self.__logger.debug("creating Route 53 record for %s", self.__fqdn)
        route_53_client.change_resource_record_sets(
            HostedZoneId=self.__route_53_hosted_zone_id,
            ChangeBatch={
                "Comment": "",
                "Changes": [
                    {
                        "Action": "UPSERT",
                        "ResourceRecordSet": {
                            "Name": self.__fqdn,
                            "Type": "A",
                            "AliasTarget": {
                                "EvaluateTargetHealth": False,
                                "HostedZoneId": "Z2FDTNDATAQYW2",  # Indicates CloudFront
                                "DNSName": cloud_front_distribution_domain_name,
                            },
                        },
                    }
                ],
            },
        )
        self.__logger.info("created Route 53 record for %s", self.__fqdn)

    @classmethod
    def main(cls):
        arg_parser = ArgParser()
        arg_parser.add_argument(
            "--acm-certificate-arn",
            help="ARN of Amazon Certificate Manager (ACM) certificate",
            required=True,
        )
        arg_parser.add_argument(
            "--aws-access-key-id",
            help="AWS access key id; if not specified, will be retrieved from the environment",
        )
        arg_parser.add_argument(
            "--aws-secret-access-key",
            help="AWS secret access key; if not specified, will be retrieved from the environment",
        )
        arg_parser.add_argument("-c", is_config_file=True, help="config file path")
        arg_parser.add_argument(
            "--debug", action="store_true", help="turn on debugging"
        )
        arg_parser.add_argument(
            "--fqdn",
            help="fully qualified domain name, such as example.paradicms.org",
            required=True,
        )
        arg_parser.add_argument(
            "--logging-level",
            help="set logging-level level (see Python logging module)",
        )
        arg_parser.add_argument(
            "--route-53-hosted-zone-id", help="Route 53 hosted zone ID", required=True
        )
        args = vars(arg_parser.parse_args()).copy()

        if args.get("debug", False):
            logging_level = logging.DEBUG
        elif args.get("logging_level") is not None:
            logging_level = getattr(logging, args["logging_level"].upper())
        else:
            logging_level = logging.INFO
        logging.basicConfig(
            format="%(asctime)s:%(module)s:%(lineno)s:%(name)s:%(levelname)s: %(message)s",
            level=logging_level,
        )

        instance_kwds = args.copy()
        for key in (
            "c",
            "debug",
            "logging_level",
        ):
            instance_kwds.pop(key, None)
        instance = cls(**instance_kwds)

        instance.create_aws_site()


if __name__ == "__main__":
    AwsSiteCreator.main()
