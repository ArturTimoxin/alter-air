import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../containers/header/header";
import Main from "../../containers/main/main";
import background from "../../assets/img/backgrondTemplate/background.png";
class Template extends Component {
  render() {
    return (
      <div className="template">
        <div className="backgroundTemplate" style={{ backgroundImage: `url(${background})` }} />
        <Header />
        <Main categoryInfo={this.props.categoryInfo} productsInfo={this.props.productsInfo} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    productsInfo: store.template.productsInfo,
    categoryInfo: store.template.categoryInfo,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Template);
