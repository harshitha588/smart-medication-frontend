function ExpiryTracker() {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "15px"
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>🧪 Medicine Expiry Tracker</h1>

      <div style={cardStyle}>
        <h3>Paracetamol</h3>
        <p>Expiry Date: 20 Feb 2026</p>
        <p style={{ color: "green" }}>Status: Safe</p>
      </div>

      <div style={cardStyle}>
        <h3>Vitamin D</h3>
        <p>Expiry Date: 10 Feb 2026</p>
        <p style={{ color: "orange" }}>Status: Expiring Soon</p>
      </div>

      <div style={cardStyle}>
        <h3>Insulin</h3>
        <p>Expiry Date: 30 Jan 2026</p>
        <p style={{ color: "red" }}>Status: Expired</p>
      </div>
    </div>
  );
}

export default ExpiryTracker;
