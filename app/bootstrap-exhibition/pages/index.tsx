import * as React from "react";
import {GetStaticProps} from "next";
import {useRouter} from "next/router";
import {Hrefs} from "lib/Hrefs";
import {readDataset} from "lib/readDataset";

// import {useRouter} from "next/router";

interface StaticProps {
  readonly firstObjectUri: string;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({firstObjectUri}) => {
  const router = useRouter();
  React.useEffect(() => {
    router.push(Hrefs.object(firstObjectUri));
  }, []);
  return (<div></div>);
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{props: StaticProps}> => {
  return {
    props: {
      firstObjectUri: readDataset().objects[0].uri,
    },
  };
};
