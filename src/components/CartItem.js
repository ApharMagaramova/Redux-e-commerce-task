import React, { PureComponent } from "react";
import "../styles.css";

class CartItem extends PureComponent {
  render() {
    const { id, title, price, clicker } = this.props;
    return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$</p>
        <p>
          <button onClick={() => clicker(id)}>X</button>
        </p>
      </div>
    );
  }
}

export default CartItem;
