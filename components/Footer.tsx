import React from "react";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mb-24">
      <div className="max-container grid grid-cols-1  gap-14   md:gap-6 md:grid-cols-3 lg:grid-cols-4">
        <div className="max-lg:flexCenter">
          <Link href="/">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={28} />
          </Link>
        </div>

        <div className="flex flex-col flex-wrap gap-6">
          {FOOTER_LINKS.map((col) => (
            <FooterColumn title={col.title} key={col.title}>
              <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                {col.links.map((link) => (
                  <Link href="/" key={link}>
                    {link}
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          ))}
        </div>

        <div>
          <FooterColumn title={FOOTER_CONTACT_INFO.title}>
            {FOOTER_CONTACT_INFO.links.map((link) => (
              <Link
                href="/"
                key={link.label}
                className="flex gap-4 flex-col lg:flex-row"
              >
                <p className="whitespace-nowrap">{link.label}:</p>
                <p className="medium-14 whitespace-nowrap text-blue-70">
                  {link.value}
                </p>
              </Link>
            ))}
          </FooterColumn>
        </div>

        <div>
          <FooterColumn title={SOCIALS.title}>
            <ul className="regular-14 flex gap-4 text-gray-30">
              {SOCIALS.links.map((link) => (
                <Link href="/" key={link}>
                  <Image
                    src={link}
                    alt="social-icon"
                    width={24}
                    height={24}
                    className="max-w-full"
                  />
                </Link>
              ))}
            </ul>
          </FooterColumn>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className={`flex flex-col items-center gap-5  `}>
      <h4 className="bold-18 whitespace-nowrap  ">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
