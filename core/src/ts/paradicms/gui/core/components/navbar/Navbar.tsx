import {ActiveNavbarItem} from 'paradicms/gui/core/components/navbar/ActiveNavbarItem';
import {Hrefs} from 'paradicms/gui/core/Hrefs';
import * as React from 'react';
import {ChangeEvent, useState} from 'react';
import {Link, Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {Button, Form, Input, Nav, Navbar as BootstrapNavbar, NavbarBrand, NavItem, NavLink,} from 'reactstrap';

interface Props extends RouteComponentProps {
    activeNavItem?: ActiveNavbarItem;
}

const Navbar: React.FunctionComponent<Props> = ({activeNavItem}) => {
    const [state, setState] = useState<{ searchSubmitted: boolean, searchText: string }>({
        searchSubmitted: false,
        searchText: ""
    });
    const onSearchSubmit = () => setState(prevState => Object.assign({}, prevState, {searchSubmitted: true}));
    const onSearchTextChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const searchText = ev.target.value;
        setState(prevState => Object.assign({}, prevState, {searchText}))
    };

    if (state.searchSubmitted) {
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
                <Form className="pb-2 ml-auto" inline onSubmit={onSearchSubmit}>
                    <Input className="form-control" onChange={onSearchTextChange} placeholder="Search"
                           style={{width: "32em"}} type="search" value={state.searchText}/>
                    <Button className="ml-2 pt-2" size="sm" type="submit">Search</Button>
                </Form>
            </BootstrapNavbar>
        </div>);
}

export default withRouter(Navbar);
