import {ConsoleLogger} from './ConsoleLogger';
import {Logger} from './Logger';
import * as React from 'react';


export const LoggerContext = React.createContext<Logger>(new ConsoleLogger());
