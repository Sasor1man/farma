"use client";

import * as React from "react";
import HeaderTop from "./headerComp/HeaderTop";
import HeaderBottom from "./headerComp/HeaderBottom";

export class Header extends React.Component {
  render() {
    return (
      <header className="h-[167px]">
        <HeaderTop
          links={[]}
          contacts={{
            phone: "",
            mail: "",
          }}
        />
        <HeaderBottom />
      </header>
    );
  }
}

export default Header;
