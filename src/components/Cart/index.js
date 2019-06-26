import React, {Component} from 'react';
import CartToggleBtn from './cartToggleBtn';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartStatus: false,
    };
  }

  toggleCart = () => {
    this.setState(prevState => ({
      cartStatus: !prevState.cartStatus,
    }));
  };

  render() {
    return (
      <article
        className={`cart ${
          this.state.cartStatus ? 'cart--open' : 'cart--close'
        } `}
      >
        <CartToggleBtn
          toggle={this.toggleCart}
          status={this.state.cartStatus}
        />
        <div className='cart__content'>Cart is Empty</div>
      </article>
    );
  }
}

export default Cart;
