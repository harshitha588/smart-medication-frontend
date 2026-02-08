function Reminders() {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "15px"
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>⏰ Reminders</h1>

      <div style={cardStyle}>
        <h3>Paracetamol</h3>
        <p>Time: 8:00 AM</p>
        <p>Status: Upcoming</p>
      </div>

      <div style={cardStyle}>
        <h3>Vitamin D</h3>
        <p>Time: 1:00 PM</p>
        <p>Status: Taken</p>
      </div>

      <div style={cardStyle}>
        <h3>BP Tablet</h3>
        <p>Time: 9:00 PM</p>
        <p>Status: Missed</p>
      </div>
    </div>
  );
}

export default Reminders;
