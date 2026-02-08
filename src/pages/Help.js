function Help() {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px"
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>❓ Help & Support</h1>
      <p>If you need help, check the FAQs below.</p>

      <div style={cardStyle}>
        <h3>How do reminders work?</h3>
        <p>
          Reminders notify you at scheduled times to take your medicines.
        </p>
      </div>

      <div style={cardStyle}>
        <h3>What if I miss a medicine?</h3>
        <p>
          Missed medicines will appear in your history for tracking.
        </p>
      </div>

      <div style={cardStyle}>
        <h3>Can caregivers see patient data?</h3>
        <p>
          Yes, caregivers can monitor medicines and missed reminders.
        </p>
      </div>

      <div style={cardStyle}>
        <h3>Need more help?</h3>
        <p>
          Contact us at: <strong>support@medtracker.com</strong>
        </p>
      </div>
    </div>
  );
}

export default Help;
