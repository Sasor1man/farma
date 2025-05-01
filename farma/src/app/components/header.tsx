"use client";

import * as React from "react";
import { Component } from "react";
import HeaderTop from "./headerComp/HeaderTop";
import HeaderBottom from "./headerComp/HeaderBottom";

interface HeaderProps {}

interface HeaderState {}

export class Header extends React.Component<HeaderProps, HeaderState> {
  state: Readonly<HeaderState> = {};

  render() {
    return (
      <header className="h-[167px]">
        <HeaderTop />
        <HeaderBottom />
      </header>
    );
  }
}

export default Header;
