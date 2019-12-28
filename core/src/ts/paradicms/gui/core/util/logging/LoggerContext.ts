import { ConsoleLogger } from 'paradicms/gui/core/util/logging/ConsoleLogger';
import { Logger } from 'paradicms/gui/core/util/logging/Logger';
import * as React from 'react';


export const LoggerContext = React.createContext<Logger>(new ConsoleLogger());
