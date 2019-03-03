import React, { Component } from "react";
import { connect } from "react-redux";
import { Nav } from "../../components/nav/nav";
import { ShopMenu } from "../../components/shop-menu/shop-menu";
// import { NavLink } from "react-router-dom";
// import { Breadcrumbs } from "react-breadcrumbs-dynamic";
import logoBig from "../../assets/img/logo/logo-big.png";
import logoBig2x from "../../assets/img/logo/logo-big@2x.png";
import logoBig3x from "../../assets/img/logo/logo-big@3x.png";
import basketImg from "../../assets/img/basket/cart.png";
import basketImg2x from "../../assets/img/basket/cart@2x.png";
import basketImg3x from "../../assets/img/basket/cart@3x.png";
import searchIcon from "../../assets/img/search/search.png";
import searchIcon2x from "../../assets/img/search/search.png";
import searchIcon3x from "../../assets/img/search/search.png";
class Header extends Component {
  render() {
    return (
      <header>
        <Nav links={this.props.links} />
        <div className="wrapperHeaderInfo">
          <span className="wrapperHeaderLogoBasketLocalization">
            <img
              src={logoBig}
              srcSet={`${logoBig} 1x, ${logoBig2x} 2x, ${logoBig3x} 3x`}
              sizes="max-width: 1920px, max-width: 1100px, max-width: 500px"
              alt="logo"
            />
            <span className="wrapperBasketAndLocalization">
              <span className="wrapperBasket">
                <img src={basketImg} srcSet={`${basketImg} 1x, ${basketImg2x} 2x, ${basketImg3x} 3x`} alt="basket" />
                Корзина
              </span>
              <ul className="wrapperLocalization">
                <li className={this.props.localization === "ru" ? "active" : ""}>РУС</li>
                <li className={this.props.localization === "ua" ? "active" : ""}>УКР</li>
              </ul>
            </span>
          </span>
          <span className="siteSearchWrapper">
            <span className="siteSearch">
              <img
                className="searchIcon"
                src={searchIcon}
                srcSet={`${searchIcon} 1x, ${searchIcon2x} 2x, ${searchIcon3x} 3x`}
                alt="search"
              />
              <input className="searchInput" type="text" placeholder="Поиск по сайту" />
            </span>
          </span>
          <ShopMenu shopMenu={this.props.shopMenu} />
          {/* <Breadcrumbs
            separator={<b> > </b>}
            item={NavLink}
            finalItem={"b"}
            finalProps={{
              style: { color: "red" },
            }}
          /> */}
        </div>
      </header>
    );
  }
}

const mapStateToProps = store => {
  return {
    links: store.template.links,
    localization: store.template.localization,
    shopMenu: store.template.shopMenu,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
