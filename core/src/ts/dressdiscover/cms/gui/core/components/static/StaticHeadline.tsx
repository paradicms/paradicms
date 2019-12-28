import * as React from 'react';

export const StaticHeadline: React.FunctionComponent<{ children: React.ReactNode }> = ({children}) =>
    <h4 className="headline mt-2 pb-2 pl-4 pt-2 text-center">{children}</h4>;
