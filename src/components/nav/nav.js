import React from "react";
import { Link } from "react-router-dom";

export const Nav = props => {
  const { links } = props;
  return (
    <nav>
      <span className="navInfo">
        <ul className="wrapperLinks">
          {links.map((elem, i) => {
            return (
              <Link key={i} className="link" to={elem.route}>
                {elem.text}
              </Link>
            );
          })}
        </ul>
        <ul className="wrapperPosition">
          <Link className="position" to="/">
            МАГАЗИН
          </Link>
          <Link className="position" to="/services">
            УСЛУГИ
          </Link>
        </ul>
      </span>
    </nav>
  );
};
