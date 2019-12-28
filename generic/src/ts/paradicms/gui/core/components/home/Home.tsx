import * as React from 'react';
import {Frame} from "paradicms/gui/core/components/frame/Frame";
import {ActiveNavbarItem} from "paradicms/gui/core/components/navbar/ActiveNavbarItem";
import {InstitutionsList} from "paradicms/gui/core/components/institution/InstitutionsList";
import {ApolloQueryWrapper} from "paradicms/gui/core/api/ApolloQueryWrapper";
import {HomeQuery} from "paradicms/gui/core/api/queries/types/HomeQuery";
import * as homeQuery from "paradicms/gui/core/api/queries/homeQuery.graphql";

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
