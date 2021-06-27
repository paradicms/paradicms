import * as React from "react";
import {Data} from "lib/Data";
import {GetStaticProps} from "next";
import {useRouter} from "next/router";
import {Hrefs} from "lib/Hrefs";

// import {useRouter} from "next/router";

interface StaticProps {
  readonly firstObject: {readonly uri: string};
}

const IndexPage: React.FunctionComponent<StaticProps> = ({firstObject}) => {
  const router = useRouter();
  React.useEffect(() => {
    router.push(Hrefs.object(firstObject.uri));
  }, []);
  return (<div></div>);
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{props: StaticProps}> => {
  const data = new Data();
  return {
    props: {
      firstObject: data.objects[0],
    },
  };
};
