import * as React from "react";
import githubSvg from "../svg/github.svg";
import linkedinSvg from "../svg/linkedin.svg";

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <h3>Information :</h3>
        <a
          href="https://github.com/tomsarry/WOYT/blob/master/LICENSE"
          className="header-link"
        >
          Copyright (c) under MIT License 2020 tomsarry
        </a>
        August 2020
      </div>
      <div className="footer-contact" id="contact">
        <h3>Contact :</h3>

        <div className="contact-svgs">
          <a
            href="https://github.com/tomsarry"
            className="header-link"
            rel="noopener noreferrer"
          >
            <img src={githubSvg} className="svg" alt="github" />
          </a>

          <a
            href="https://www.linkedin.com/in/tom-sarry-5525a8173/"
            className="header-link"
            rel="noopener noreferrer"
          >
            <img src={linkedinSvg} className="svg" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
