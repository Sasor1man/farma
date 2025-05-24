import * as React from "react";
import Link from "next/link";
import * as Svgs from "../../../../public/imgs/header/Svgs";

const linksArr: { article: string; href: string }[] = [
  {
    article: "О компании",
    href: "company",
  },
  { article: `Новости`, href: "news" },
  { article: "Статьи", href: "articles" },
  { article: "Контакты", href: "contacts" },
];

const headerClassRight = `flex items-center justify-between`;

interface HeaderTopState {
  links: { article: string; href: string }[];
  contacts: { phone: string; mail: string };
}

class HeaderTop extends React.Component<HeaderTopState> {
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
            <Link key={e.article} href={e.href}>
              {e.article}
            </Link>
          ))}
        </div>
        <div className="w-[367] flex justify-between">
          <div className={`${headerClassRight}`}>
            <Svgs.default.PhoneSvg />
            <span>{this.state.contacts.phone}</span>
          </div>
          <div className={`${headerClassRight}`}>
            <Svgs.default.MailSvg />
            <span>{this.state.contacts.mail}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderTop;
