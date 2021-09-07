import * as React from "react";
import {GetStaticProps} from "next";
import {useRouter} from "next/router";
import {Hrefs} from "lib/Hrefs";
import fs from "fs";
import {readDatasetFile} from "@paradicms/next";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

// import {useRouter} from "next/router";

interface StaticProps {
  readonly firstWorkUri: string;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({firstWorkUri}) => {
  const router = useRouter();
  React.useEffect(() => {
    router.push(Hrefs.work(firstWorkUri));
  }, []);
  return <div></div>;
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  return {
    props: {
      firstWorkUri: readDatasetFile(readFileSync).works[0].uri,
    },
  };
};
