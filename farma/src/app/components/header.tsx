"use client";

import * as React from "react";
import { Component } from "react";

const linksArr: string[] = ["О компании", "Новости", "Статьи", "Контакты"];

interface HeaderProps {}

interface HeaderState {
  links: string[];
  contacts: { phone: string; mail: string };
}

const leftHeaderlinks = (linksArr: string[]): string[] => {
  const copyArr: string[] = [...linksArr];
  copyArr.forEach((e) => <p>${e}</p>);
  return copyArr;
};

class Header extends React.Component<HeaderProps, HeaderState> {
  state: Readonly<HeaderState> = {
    links: linksArr,
    contacts: {
      phone: "+7(495)933-6147",
      mail: "max@maximum.su",
    },
  };

  render() {
    return (
      <header>
        <div className="flex justify-between">
          <div className="grid grid-cols-4 gap-[24px]">
            {this.state.links.map((e) => (
              <span>{e}</span>
            ))}
          </div>
          <div className="">
            <span>{this.state.contacts.phone}</span>
            <span>{this.state.contacts.mail}</span>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
