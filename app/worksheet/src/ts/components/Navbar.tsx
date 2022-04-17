import {Hrefs} from "~/Hrefs";
import * as React from "react";
import {Link} from "react-router-dom";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar as BootstrapNavbar,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";

import {useCurrentUser} from "~/hooks/useCurrentUser";
import {Environment} from "~/Environment";

export const Navbar: React.FunctionComponent = () => {
  const currentUser = useCurrentUser();

  let currentUserJsx: React.ReactNode;
  if (Environment.supportsLogin) {
    if (currentUser && currentUser.session.isValid()) {
      currentUserJsx = (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            {currentUser.name}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <Link to={Hrefs.userSettings}>Settings</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to={Hrefs.logout}>Logout</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      );
    } else {
      currentUserJsx = (
        <NavItem>
          <NavLink href={Hrefs.login}>Login</NavLink>
        </NavItem>
      );
    }
    currentUserJsx = (
      <Collapse navbar>
        <Nav className="ms-auto" navbar>
          {currentUserJsx}
        </Nav>
      </Collapse>
    );
  } else {
    currentUserJsx = null;
  }

  return (
    <div>
      <BootstrapNavbar color="light" light expand="md">
        <NavbarBrand href={Hrefs.index}>Worksheet</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink tag="a" href={Hrefs.gettingStarted}>
              Getting Started Guide
            </NavLink>
          </NavItem>
        </Nav>
        {currentUserJsx}
      </BootstrapNavbar>
    </div>
  );
};
