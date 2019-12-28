import { ConsoleLogger } from 'paradicms/gui/generic/util/logging/ConsoleLogger';
import { Logger } from 'paradicms/gui/generic/util/logging/Logger';
import * as React from 'react';


export const LoggerContext = React.createContext<Logger>(new ConsoleLogger());
