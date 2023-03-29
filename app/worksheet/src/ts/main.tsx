import * as React from "react";
import * as ReactDOMClient from "react-dom/client";

// const whyDidYouRender = require("@welldone-software/why-did-you-render");
// whyDidYouRender(React, {
//   trackAllPureComponents: true,
//   trackHooks: true,
// });
// import Hammer from "hammerjs";
import {Application} from "~/Application";

// delete Hammer.defaults.cssProps.userSelect;

const root = ReactDOMClient.createRoot(document.getElementById("root")!);
root.render(<Application />);
