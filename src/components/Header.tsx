import * as React from "react";
import githubSvg from "../svg/github.svg";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  return (
    <div className="header">
      <a href="/" className="header-link">
        <h1 className="header-title">Wasted on Youtube</h1>
      </a>

      <div className="links">
        <nav className="nav-links">
          <a
            href="https://github.com/tomsarry/WOYT#how-to-get-started"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link"
          >
            help
          </a>
          <a href="#contact" className="header-link">
            contact
          </a>
          <a
            href="https://github.com/tomsarry/WOYT"
            className="header-link"
            rel="noopener noreferrer"
          >
            <img src={githubSvg} className="svg svg-header" alt="github" />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
