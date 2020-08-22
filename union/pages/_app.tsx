import {AppProps} from "next/app";
import {QueryParamProvider} from "components/QueryParamProvider";

const MyApp: React.FunctionComponent<AppProps> = ({Component, pageProps}) => {
  return (
    <QueryParamProvider>
      <Component {...pageProps} />
    </QueryParamProvider>
  );
};

export default MyApp;
