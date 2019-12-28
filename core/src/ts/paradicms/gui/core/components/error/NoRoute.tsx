import {Frame} from 'paradicms/gui/core/components/frame/Frame';
import * as React from 'react';
import {RouteComponentProps} from 'react-router';

export const NoRoute: React.FunctionComponent<RouteComponentProps> = ({location}) => (
    <Frame documentTitle="Not Found">
        <h3><code>{location.pathname}</code></h3>
    </Frame>
);
