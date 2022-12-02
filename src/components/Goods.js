import React, { PureComponent } from "react";
import "../styles.css";
import { connect } from "react-redux";
import { actionAdd } from "../actions";

import GoodsItem from "./GoodsItem";

const mapStateToProps = (state) => {
  return {
    goods: state.goods,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addGoodToCart: (id) => dispatch(actionAdd(id)),
});

class Goods extends PureComponent {

  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {this.props.goods.map((item) => (
          <ul className="goods__list" key={item.id}>
            <li className="goods__list-item">
              <GoodsItem {...item} clicker={this.props.addGoodToCart} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const updatedGoods = connector(Goods);
export default updatedGoods;
