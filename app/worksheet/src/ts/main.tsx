import * as React from "react";

// const whyDidYouRender = require("@welldone-software/why-did-you-render");
// whyDidYouRender(React, {
//   trackAllPureComponents: true,
//   trackHooks: true,
// });

import * as ReactDOM from "react-dom";
// import Hammer from "hammerjs";
import {Application} from "~/Application";

// delete Hammer.defaults.cssProps.userSelect;

ReactDOM.render(<Application />, document.getElementById("root"));
