import * as React from 'react';
import {Frame} from "paradicms/gui/generic/components/frame/Frame";
import {ActiveNavbarItem} from "paradicms/gui/generic/components/navbar/ActiveNavbarItem";
import {InstitutionsList} from "paradicms/gui/generic/components/institution/InstitutionsList";
import {ApolloQueryWrapper} from "paradicms/gui/generic/api/ApolloQueryWrapper";
import {HomeQuery} from "paradicms/gui/generic/api/queries/types/HomeQuery";
import * as homeQuery from "paradicms/gui/generic/api/queries/homeQuery.graphql";

export const Home: React.FunctionComponent<{}> = () => (
    <ApolloQueryWrapper<HomeQuery> query={homeQuery}>
        {({data}) =>
            <Frame
                activeNavItem={ActiveNavbarItem.Home}
                documentTitle="Home"
                cardTitle="Institutions"
            >
                <InstitutionsList institutions={data.institutions}/>
            </Frame>
        }
    </ApolloQueryWrapper>);
