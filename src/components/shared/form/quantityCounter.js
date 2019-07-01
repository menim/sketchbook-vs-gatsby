import React, {Component} from 'react';

export default class QuantityCounter extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = event => {
    let value = event.target.value < 1 ? 1 : +event.target.value;
    this.props.setInput(value);
  };

  increment = () => {
    this.props.setInput(this.props.counter + 1);
  };

  decrement = () => {
    let value = this.props.counter <= 1 ? 1 : this.props.counter - 1;
    this.props.setInput(value);
  };

  render() {
    return (
      <div>
        <input
          className="form__input form__input--quantity"
          onChange={this.handleChange}
          value={this.props.counter}
          name="quantity"
          type="number"
        />
        <button
          className="form__control"
          onClick={this.increment}
          type="button"
        >
          +
        </button>
        <button
          className="form__control"
          onClick={this.decrement}
          type="button"
        >
          -
        </button>
      </div>
    );
  }
}
