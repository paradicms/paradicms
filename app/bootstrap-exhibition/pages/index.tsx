import * as React from "react";
import {Data} from "lib/Data";
import {GetStaticProps} from "next";
import {Hrefs} from "lib/Hrefs";

const IndexPage: React.FunctionComponent = () => {
  throw new EvalError("should never render");
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<any> => {
  const data = new Data();
  return {
    redirect: {
      destination: Hrefs.object(data.objects[0].uri),
      permanent: true,
    },
  };
};
