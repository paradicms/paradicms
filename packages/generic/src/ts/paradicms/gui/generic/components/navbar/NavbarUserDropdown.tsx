import * as React from "react";
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";
import {Link} from "react-router-dom";
import {CurrentUser} from "paradicms/gui/generic/components/navbar/CurrentUser";

export const NavbarUserDropdown: React.FunctionComponent<{
    className?: string,
    currentUser?: CurrentUser,
    loginHref: string,
    logoutHref: string
}> = ({className, currentUser, loginHref, logoutHref}) => {
    let currentUserJsx: React.ReactNode;
    if (currentUser) {
        currentUserJsx = (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    {currentUser.name}
                </DropdownToggle>
                <DropdownMenu right>
                    {/* <DropdownItem><Link to={Hrefs.userSettings}>Settings</Link></DropdownItem> */}
                    <DropdownItem><Link to={logoutHref}>Logout</Link></DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    } else {
        currentUserJsx = (
            <NavItem>
                <NavLink href={loginHref}>
                    Login
                </NavLink>
            </NavItem>
        );
    }
    return (
        <Collapse navbar>
            <Nav className={className} navbar>
                {currentUserJsx}
            </Nav>
        </Collapse>
    );
}
