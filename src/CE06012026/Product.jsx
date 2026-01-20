import React,{Component} from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, label: 'Product 1', value: 100 },
        { id: 2, label: 'Product 2', value: 200 },
        { id: 3, label: 'Product 3', value: 300 },
        { id: 4, label: 'Product 4', value: 400 },
        { id: 5, label: 'Product 5', value: 500 },
        { id: 6, label: 'Product 6', value: 600 },
        { id: 7, label: 'Product 7', value: 700 },
        { id: 8, label: 'Product 8', value: 800 },
        { id: 9, label: 'Product 9', value: 900 },
        { id: 10, label: 'Product 10', value: 1000 },

      ],
      selectedProduct: 1,
      quantity: 1,
    };
  }

  handleProductChange = (e) => {
    this.setState({ selectedProduct: parseInt(e.target.value) });
  };

  handleIncrement = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  handleDecrement = () => {
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  getTotalPrice = () => {
    const selected = this.state.products.find(
      (p) => p.id === this.state.selectedProduct
    );
    return selected.value * this.state.quantity;
  };

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <label>Select Product: </label>
        <select value={this.state.selectedProduct} onChange={this.handleProductChange}>
          {this.state.products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.label} - ₹{product.value}
            </option>
          ))}
        </select>

        <div style={{ marginTop: '15px' }}>
          <button onClick={this.handleDecrement} disabled={this.state.quantity === 1}>
            -
          </button>
          <span style={{ margin: '10px', fontSize: '18px' }}>
            {this.state.quantity}
          </span>
          <button onClick={this.handleIncrement}>+</button>
        </div>

    <div style={{ marginTop: '15px', fontSize: '18px', fontWeight: 'bold' }}>
      Total Price: ₹{this.getTotalPrice()}
    </div>

    <div style={{ marginTop: '15px' }}>
      <button onClick={() => alert(`Order submitted: ${this.state.quantity} x ${this.state.products.find(p => p.id === this.state.selectedProduct).label} for ₹${this.getTotalPrice()}`)}>
        Submit Order
      </button>
    </div>
  </div>
);
  }
}


export default Product;

