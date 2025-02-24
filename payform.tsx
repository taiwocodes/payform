import React, { useState } from "react";
import Checkout from ".";

const PayForm: React.FC = () => {
  const [apiKey, setApiKey] = useState("");
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [clientRef, setClientRef] = useState("");
  const [chargeUser, setChargeUser] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCheckout(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      {!showCheckout ? (
        <form onSubmit={handleSubmit}>
          <h2>Pay Form</h2>

          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="apiKey">API Key:</label>
            <input
              type="text"
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              required
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="clientRef">Client Reference:</label>
            <input
              type="text"
              id="clientRef"
              value={clientRef}
              onChange={(e) => setClientRef(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: "10px" }} className="d-flex align-items-center">
            <input
              type="checkbox"
              id="chargeUser"
              checked={chargeUser}
              onChange={(e) => setChargeUser(e.target.checked)}
            />
            <label htmlFor="chargeUser">Charge User</label>
          </div>

          <button type="submit" style={{ padding: "10px", background: "#007BFF", color: "#fff", border: "none" }}>
            Submit
          </button>
        </form>
      ) : (
        <Checkout
          api_key={apiKey}
          amount={amount}
          email={email}
          name={name}
          clientRef={clientRef}
          chargeUser={chargeUser}
          onClose={() => setShowCheckout(false)}
        />
      )}
    </div>
  );
};

export default PayForm;