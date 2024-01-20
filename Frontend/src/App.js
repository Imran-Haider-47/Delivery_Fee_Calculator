// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [cartValue, setCartValue] = useState(20);
  const [deliveryDistance, setDeliveryDistance] = useState(900);
  const [numberOfItems, setNumberOfItems] = useState(1);
  const [time, setTime] = useState('');
  const [deliveryFee, setDeliveryFee] = useState(null);

  const calculateDeliveryFee = async () => {
    try {
      const formattedTime = new Date(time).toISOString();

      const response = await fetch('http://localhost:8000/calculate-delivery-fee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cart_value: cartValue,
          delivery_distance: deliveryDistance,
          number_of_items: numberOfItems,
          time: formattedTime,
        }),
      });

      const data = await response.json();

      // Round the delivery fee to two decimal places
      const roundedFee = parseFloat(data.delivery_fee).toFixed(2);

      setDeliveryFee(roundedFee);
    } catch (error) {
      console.error('Error calculating delivery fee:', error);
    }
  };

  return (
    <div className="App">
      <div className="background-gradient">
        <h1>Wolt Delivery Fee Calculator</h1>
        <div className="form-container">
          <div className="form-group">
            <label className="label">Cart Value:</label>
            <input type="number" value={cartValue} onChange={(e) => setCartValue(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="label">Delivery Distance:</label>
            <input type="number" value={deliveryDistance} onChange={(e) => setDeliveryDistance(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="label">Number of Items:</label>
            <input type="number" value={numberOfItems} onChange={(e) => setNumberOfItems(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="label">Delivery Time:</label>
            <input type="datetime-local" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
          <button onClick={calculateDeliveryFee}>Calculate Delivery Fee</button>
        </div>
        {deliveryFee !== null && (
          <div className="result">
            <p>
              Delivery Fee:
              <span className="delivery-fee-box">{deliveryFee}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
