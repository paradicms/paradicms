import {getInitialProps, MuiDocument} from "@paradicms/material-ui-next";
import Document from "next/document";

export default class MyDocument extends Document {
  render() {
    return <MuiDocument />;
  }
}

MyDocument.getInitialProps = getInitialProps;
