import {ActiveNavbarItem} from 'paradicms/gui/generic/components/navbar/ActiveNavbarItem';
import {Hrefs} from 'paradicms/gui/generic/Hrefs';
import * as React from 'react';
import {useState} from 'react';
import {Link, Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {Nav, Navbar as BootstrapNavbar, NavbarBrand, NavItem, NavLink,} from 'reactstrap';
import {NavbarSearchForm} from "paradicms/gui/generic/components/navbar/NavbarSearchForm";
import {NavbarUserDropdown} from "paradicms/gui/generic/components/navbar/NavbarUserDropdown";
import {CurrentUser} from "paradicms/gui/generic/components/navbar/CurrentUser";

interface Props extends RouteComponentProps {
    activeNavItem?: ActiveNavbarItem;
    currentUser?: CurrentUser;
}

const Navbar: React.FunctionComponent<Props> = ({activeNavItem, currentUser}) => {
    const [state, setState] = useState<{ searchText: string | null }>({searchText: null});
    const onSearch = (text: string) => setState(prevState => Object.assign({}, prevState, {searchText: text}));

    if (state.searchText) {
        return <Redirect to={Hrefs.search(state.searchText)}/>;
    }

    return (
        <div>
            <BootstrapNavbar className="py-0" color="light" light expand="md">
                <NavbarBrand href={Hrefs.home}>Paradicms</NavbarBrand>
                <Nav className="pb-2 pr-4">
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
                <NavbarSearchForm className="pb-2 pl-4 ml-auto" onSearch={onSearch}/>
                <NavbarUserDropdown className="ml-auto" currentUser={currentUser} loginHref={Hrefs.login()}
                                    logoutHref={Hrefs.logout}/>
            </BootstrapNavbar>
        </div>);
}

export default withRouter(Navbar);
