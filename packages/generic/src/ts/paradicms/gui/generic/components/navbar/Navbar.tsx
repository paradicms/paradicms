import {ActiveNavbarItem} from 'paradicms/gui/generic/components/navbar/ActiveNavbarItem';
import {Hrefs} from 'paradicms/gui/generic/Hrefs';
import * as React from 'react';
import {useState} from 'react';
import {Link, Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {Nav, Navbar as BootstrapNavbar, NavbarBrand, NavItem, NavLink,} from 'reactstrap';
import {NavbarSearchForm} from "paradicms/gui/generic/components/navbar/NavbarSearchForm";

interface Props extends RouteComponentProps {
    activeNavItem?: ActiveNavbarItem;
}

const Navbar: React.FunctionComponent<Props> = ({activeNavItem}) => {
    const [state, setState] = useState<{ searchText: string | null }>({searchText: null});
    const onSearch = (text: string) => setState(prevState => Object.assign({}, prevState, {searchText: text}));

    if (state.searchText) {
        return <Redirect to={Hrefs.search(state.searchText)}/>;
    }

    return (
        <div>
            <BootstrapNavbar className="py-0" color="light" light expand="md">
                <NavbarBrand href={Hrefs.home}>DressDiscover</NavbarBrand>
                <Nav>
                    <NavItem active={activeNavItem === ActiveNavbarItem.Home}>
                        <NavLink
                            active={activeNavItem === ActiveNavbarItem.Home}
                            tag={Link}
                            to={Hrefs.home}
                        >
                            Home
                        </NavLink>
                    </NavItem>
                </Nav>
                <NavbarSearchForm className="pb-2 ml-auto" onSearch={onSearch}/>
            </BootstrapNavbar>
        </div>);
}

export default withRouter(Navbar);
