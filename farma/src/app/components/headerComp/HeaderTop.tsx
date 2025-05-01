import * as React from "react";
import { Component } from "react";
import * as Svgs from "../../imgs/header/Svgs";

const linksArr: string[] = ["О компании", "Новости", "Статьи", "Контакты"];

const headerClassRight = () => `flex items-center justify-between`;

interface HeaderTopProps {}

interface HeaderTopState {
  links: string[];
  contacts: { phone: string; mail: string };
}

class HeaderTop extends React.Component<HeaderTopProps, HeaderTopState> {
  state = {
    links: linksArr,
    contacts: {
      phone: "+7(495)933-6147",
      mail: "max@maximum.su",
    },
  };

  render() {
    return (
      <div className="h-[21] flex justify-between mt-[24px] mb-[24px] headerTop">
        <div className={`grid grid-cols-4 gap-[24px]`}>
          {this.state.links.map((e) => (
            <span key={e}>{e}</span>
          ))}
        </div>
        <div className="w-[367] flex justify-between">
          <div className={headerClassRight()}>
            <Svgs.default.PhoneSvg />
            <span>{this.state.contacts.phone}</span>
          </div>
          <div className={headerClassRight()}>
            <Svgs.default.MailSvg />
            <span>{this.state.contacts.mail}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderTop;
