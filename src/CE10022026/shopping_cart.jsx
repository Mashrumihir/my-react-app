// objective : Create a shopping cart component that manages items, quantities, and totals.
// Requirements:
// 1. add items to cart(name,price, quantity)
// 2. display cart items with individual totals
// 3. update quantity for each item
// 4. remove item from cart
// 5. calculate and display subtotal, tax(10%), and total
// 6. clear entire cart

import React, { useState } from "react";

const TAX_RATE = 0.1;

const Cart = () => {
  // Cart and form state
  const [cartItems, setCartItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  // Theme state
  const [theme, setTheme] = useState("light"); // "light" or "dark"

  // Add item to cart
  const handleAddItem = (e) => {
    e.preventDefault();

    if (!itemName || itemPrice <= 0 || itemQuantity <= 0) {
      alert("Please enter valid name, price, and quantity.");
      return;
    }

    const newItem = {
      id: Date.now(),
      name: itemName,
      price: parseFloat(itemPrice),
      quantity: parseInt(itemQuantity, 10),
    };

    setCartItems((prev) => [...prev, newItem]);

    // Clear form
    setItemName("");
    setItemPrice("");
    setItemQuantity(1);
  };

  // Update quantity for an item
  const handleUpdateQuantity = (id, newQty) => {
    const qty = parseInt(newQty, 10);
    if (isNaN(qty) || qty <= 0) return;

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  // Remove single item
  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear entire cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  // Theme toggle
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Theme-based styles
  const isLight = theme === "light";
  const containerStyle = {
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: isLight ? "#f5f5f5" : "#1f2933",
    color: isLight ? "#111827" : "#f9fafb",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: isLight ? "#ffffff" : "#111827",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  };

  const inputStyle = {
    padding: "6px 8px",
    marginRight: "8px",
    marginBottom: "8px",
    borderRadius: "4px",
    border: "1px solid #d1d5db",
  };

  const buttonStyle = {
    padding: "6px 12px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    marginRight: "8px",
  };

  const dangerButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#ef4444",
  };

  const themeButtonStyle = {
    ...buttonStyle,
    backgroundColor: isLight ? "#111827" : "#facc15",
    color: isLight ? "#f9fafb" : "#111827",
  };

  return (
    <div style={containerStyle}>
      {/* Theme switcher */}
      <div style={{ marginBottom: "20px", textAlign: "right" }}>
        <span style={{ marginRight: "10px" }}>
          Current theme: <strong>{theme.toUpperCase()}</strong>
        </span>
        <button style={themeButtonStyle} onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>

      <div style={cardStyle}>
        <h2 style={{ marginTop: 0 }}>Shopping Cart</h2>

        {/* Add item form */}
        <form onSubmit={handleAddItem} style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Item name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            style={inputStyle}
            min="0.01"
            step="0.01"
            required
          />
          <input
            type="number"
            placeholder="Qty"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
            style={inputStyle}
            min="1"
            required
          />
          <button type="submit" style={buttonStyle}>
            Add Item
          </button>
        </form>

        {/* Cart items */}
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginBottom: "16px",
              }}
            >
              <thead>
                <tr>
                  <th style={{ textAlign: "left", paddingBottom: "8px" }}>
                    Name
                  </th>
                  <th style={{ textAlign: "right", paddingBottom: "8px" }}>
                    Price
                  </th>
                  <th style={{ textAlign: "right", paddingBottom: "8px" }}>
                    Quantity
                  </th>
                  <th style={{ textAlign: "right", paddingBottom: "8px" }}>
                    Total
                  </th>
                  <th style={{ paddingBottom: "8px" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td style={{ padding: "4px 0" }}>{item.name}</td>
                    <td style={{ padding: "4px 0", textAlign: "right" }}>
                      ₹{item.price.toFixed(2)}
                    </td>
                    <td style={{ padding: "4px 0", textAlign: "right" }}>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          handleUpdateQuantity(item.id, e.target.value)
                        }
                        style={{ ...inputStyle, width: "60px", marginRight: 0 }}
                      />
                    </td>
                    <td style={{ padding: "4px 0", textAlign: "right" }}>
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td style={{ padding: "4px 0", textAlign: "center" }}>
                      <button
                        type="button"
                        style={dangerButtonStyle}
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Totals */}
            <div style={{ marginBottom: "12px" }}>
              <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
              <p>Tax (10%): ₹{tax.toFixed(2)}</p>
              <p>
                <strong>Total: ₹{total.toFixed(2)}</strong>
              </p>
            </div>

            {/* Clear cart */}
            <button
              type="button"
              style={dangerButtonStyle}
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;