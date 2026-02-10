import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Reminders() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert("Prescription uploaded successfully!");
    navigate("/result");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>📝 Upload Prescription</h2>
      <p>Upload or take a photo of the prescription</p>

      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={(e) => setImage(e.target.files[0])}
        style={{ marginTop: "20px" }}
      />

      {image && (
        <p style={{ marginTop: "10px", color: "green" }}>
          Prescription selected: {image.name}
        </p>
      )}

      <br />

      <button
        onClick={handleSubmit}
        disabled={!image}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
        }}
      >
        Extract Reminder Details
      </button>
    </div>
  );
}

export default Reminders;

