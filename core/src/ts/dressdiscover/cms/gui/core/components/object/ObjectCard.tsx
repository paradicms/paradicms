import * as React from "react";
import {Card, CardBody, CardHeader, CardTitle, Col, Container, Row} from "reactstrap";
import {Hrefs} from "dressdiscover/cms/gui/core/Hrefs";
import {Link} from "react-router-dom";
import {ObjectSummary} from "dressdiscover/cms/gui/core/components/object/ObjectSummary";
import {TextDisclosurePanel} from "dressdiscover/cms/gui/core/components/TextDisclosurePanel";

export const ObjectCard: React.FunctionComponent<{ object: ObjectSummary }> = ({object}) => {
    const objectHref = Hrefs.object({
        collectionUri: object.collectionUri,
        institutionUri: object.institutionUri,
        objectUri: object.uri
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle><strong><Link to={objectHref}>{object.title}</Link></strong></CardTitle>
            </CardHeader>
            <CardBody>
                <Container fluid>
                    <Row>
                        {object.thumbnail ?
                            <figure className="figure text-center w-100">
                                <Link to={objectHref}>
                                    <img className="figure-img rounded" src={object.thumbnail!.url}
                                         style={{height: "200px", width: "200px"}}/>
                                </Link>
                            </figure> : null}
                    </Row>
                </Container>
                {object.institutionName ?
                    <Row className="pt-1">
                        <Col xs="12">
                            Institution: <Link
                            to={Hrefs.institution(object.institutionUri)}>{object.institutionName}</Link>
                        </Col>
                    </Row> : null}
                {object.collectionName ?
                    <Row className="pt-1">
                        <Col xs="12">
                            Collection: <Link to={Hrefs.collection(object)}>{object.collectionName}</Link>
                        </Col>
                    </Row> : null}
                {object.description ?
                    <Row className="pt-1">
                        <Col xs="12">
                            <TextDisclosurePanel text={object.description}
                                                 textStyle={{fontSize: "x-small", maxWidth: "16em"}}
                                                 title="Description"/>
                        </Col>
                    </Row> : null}
                {object.rights ?
                    <Row className="pt-1">
                        <Col xs="12">
                            <TextDisclosurePanel text={object.rights}
                                                 textStyle={{fontSize: "x-small", maxWidth: "16em"}} title="Rights"/>
                        </Col>
                    </Row> : null}
            </CardBody>
        </Card>);
}

// <figure className="figure">
//     <a onClick={this.onToggleSelected}>
//         <img
//             className="figure-img rounded"
//             src={thumbnailImgSrc}
//             style={{ height: "200px", width: "200px" }}
//         />
//     </a>
//     {definition.image ? (
//         <figcaption className="figure-caption" style={{ fontSize: "xx-small" }}>
//             Image&nbsp;&copy;
//             <span>{definition.image.rights.author}</span>
//             <br />License:&nbsp;
//             <span ><WorksheetRightsLicenseComponent license={definition.image.rights.license}></WorksheetRightsLicenseComponent></span>
//         </figcaption>
//     ) : null}
// </figure>
// {definition.description ? (
//     <div className="card-text">
//         <a onClick={this.onToggleDescription} className="description-toggle">Description</a>
//         <div className="float-right">
//             <a onClick={this.onToggleDescription} className="description-toggle">
//                 <i className={classnames({ fas: true, "fa-chevron-down": this.state.descriptionShown, "fa-chevron-right": !this.state.descriptionShown })}></i>
//             </a>
//         </div>
//         <br />
//         <Collapse isOpen={this.state.descriptionShown}>
//             <WorksheetDescriptionComponent description={definition.description}></WorksheetDescriptionComponent>
//         </Collapse>
//     </div>
// ) : null}
