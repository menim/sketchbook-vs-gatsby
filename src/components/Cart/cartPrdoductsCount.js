import React, {Component} from 'react';

export default class CartProductsCount extends Component {
  state = {productIsChanged: true};

  animationEnd = () => {
    this.setState({productIsChanged: false});
  };

  componentDidUpdate(prevProps) {
    if (prevProps.productsInCart !== this.props.productsInCart) {
      this.setState({productIsChanged: true});
    }
  }
  render() {
    return (
      <span
        className={`${this.state.productIsChanged ? 'animationFadeInUp' : ''}`}
        onAnimationEnd={this.animationEnd}
      >
        {this.props.productsInCart}
      </span>
    );
  }
}
