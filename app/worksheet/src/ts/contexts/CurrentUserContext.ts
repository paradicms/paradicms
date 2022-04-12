import React = require("react");
import {CurrentUser} from "~/models/CurrentUser";

export const CurrentUserContext = React.createContext<CurrentUser | null>(null);
