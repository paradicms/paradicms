import * as React from 'react';
import {Frame} from "dressdiscover/cms/gui/core/components/frame/Frame";
import {ActiveNavbarItem} from "dressdiscover/cms/gui/core/components/navbar/ActiveNavbarItem";
import {InstitutionsList} from "dressdiscover/cms/gui/core/components/institution/InstitutionsList";
import {ApolloQueryWrapper} from "dressdiscover/cms/gui/core/api/ApolloQueryWrapper";
import {HomeQuery} from "dressdiscover/cms/gui/core/api/queries/types/HomeQuery";
import * as homeQuery from "dressdiscover/cms/gui/core/api/queries/homeQuery.graphql";

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
