import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Wrapper, Nav } from "./style";

function Layout(params) {
  return (
    <Wrapper>
      <Nav>
        <NavLink to="/">Каталог</NavLink>
      </Nav>
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
}

export default Layout;
