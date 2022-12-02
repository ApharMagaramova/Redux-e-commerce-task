import React, { PureComponent } from "react";
import "../styles.css";
import { connect } from "react-redux";
import { actionDelete } from "../actions";
import CartItem from "./CartItem";

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteFromCart: (id) => dispatch(actionDelete(id)),
});

class Cart extends PureComponent {

  getTotal() {
    const { cart } = this.props;
    return cart.reduce((acc, item) => acc + item.price, 0);
  }

  render() {
    return (
      <div className="cart">
        <h2 className="cart__title">Shopping Cart</h2>
        {this.props.cart.length ? (
          <ul className="cart__list">
            {this.props.cart.map((item, index) => (
              <li className="cart__list-item" key={index}>
                <CartItem {...item} clicker={this.props.deleteFromCart} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="cart__note">Nothing in the cart now</p>
        )}

        <p className="cart__total">Total: {this.getTotal()}.00$</p>
      </div>
    );
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const updatedGoods = connector(Cart);
export default updatedGoods;
