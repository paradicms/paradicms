import {Hrefs} from "~/Hrefs";
import * as React from "react";
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
import Link from "next/link";

import {useCurrentUser} from "~/hooks/useCurrentUser";

export const Navbar: React.FunctionComponent = () => {
  const currentUser = useCurrentUser();

  let currentUserJsx: React.ReactNode;
  if (currentUser && currentUser.session.isValid()) {
    currentUserJsx = (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          {currentUser.name}
        </DropdownToggle>
        <DropdownMenu end>
          <DropdownItem>
            <Link href={Hrefs.userSettings}>Settings</Link>
          </DropdownItem>
          <DropdownItem>
            <Link href={Hrefs.logout}>Logout</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  } else {
    currentUserJsx = (
      <NavItem>
        <Link className="nav-link" href={Hrefs.login}>
          Login
        </Link>
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
