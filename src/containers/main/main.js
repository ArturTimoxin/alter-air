import React, { Component } from "react";
import StarFull from "../../assets/img/star-full.png";
import StarEmpty from "../../assets/img/star-empty.png";
export default class Main extends Component {
  state = {
    showFilters: true,
    filters: [],
  };

  showFilter = id => {
    console.log(id);
    let newFilters = this.state.filters;
    newFilters.forEach((elem, index) => {
      if (index === id) {
        elem.show = !elem.show;
      }
    });
    this.setState({ filters: newFilters });
  };

  componentDidMount() {
    let filters = this.props.categoryInfo.filters;
    filters.forEach((item, i) => {
      item.show = true;
      item.options.forEach(elem => {
        elem.isChecked = false;
      });
    });
    this.setState({ filters: filters });
  }

  render() {
    const { categoryInfo, productsInfo } = this.props; // , productsInfo
    return (
      <main>
        <h3 className="categoryTitle">{categoryInfo.category}</h3>
        <div className="wrapperProductsInfo">
          <div className="wrapperFilters">
            <div className="filtersAcordeon" onClick={() => this.setState({ showFilters: !this.state.showFilters })}>
              ФИЛЬТРЫ:
              <div
                className="pointer"
                style={{ transform: this.state.showFilters ? "rotate(270deg)" : "rotate(90deg)" }}
              >
                >
              </div>
            </div>
            <div className={this.state.showFilters ? "wrapper-filters-block-open" : "wrapper-filters-block-close"}>
              {this.state.filters.map((elem, i) => {
                return (
                  <div className="filter-block" key={i}>
                    <div className="filter-title" onClick={() => this.showFilter(i)}>
                      {elem.title.toUpperCase()}
                      <div className="pointer" style={{ transform: elem.show ? "rotate(270deg)" : "rotate(90deg)" }}>
                        >
                      </div>
                    </div>
                    <div className={elem.show ? "filter-wrapper-open" : "filter-wrapper-close"}>
                      {elem.options.map((elem, i) => (
                        <label key={i}>
                          <input type="checkbox" name={elem.name} value={elem.value} defaultChecked={elem.isChecked} />
                          {elem.name.toUpperCase()}
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="wrapperProductsPriceSort">
            <div className="sortBy">СОРТИРОВАТЬ ПО</div>
            <div className="wrapperProducts">
              {productsInfo.products.map((item, i) => {
                let img = require(`../../assets/img/${item.image}`);
                let ratingArray = [0, 0, 0, 0, 0];
                for (let i = 0; i < item.rating; i++) {
                  ratingArray[i] = 1;
                }
                return (
                  <div className="productCard" key={i}>
                    <img src={img} alt="product" className="productImage" />
                    <div className="wrapperInfoProduct">
                      <div className="ratingWrapper">
                        {ratingArray.map(elem => {
                          return elem ? (
                            <img src={StarFull} alt="star-full" />
                          ) : (
                            <img src={StarEmpty} alt="start-empty" />
                          );
                        })}
                      </div>
                      <div className="productName">{item.name}</div>
                      <div className="productPrice">{`${item.price} ГРН`}</div>
                      <div>
                        <button className="buyProductButton">Купить</button>
                        <a href="/">Заказать в один клик</a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
