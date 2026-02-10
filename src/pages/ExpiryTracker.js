import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ExpiryTracker() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Later this image will be sent to backend
    alert("Medicine image uploaded successfully!");
    navigate("/result"); // go to result page
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>📸 Upload Medicine Photo</h2>
      <p>Take or upload a photo of the medicine strip</p>

      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={(e) => setImage(e.target.files[0])}
        style={{ marginTop: "20px" }}
      />

      {image && (
        <p style={{ marginTop: "10px", color: "green" }}>
          Selected file: {image.name}
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
          cursor: image ? "pointer" : "not-allowed",
        }}
      >
        Submit for Expiry Check
      </button>
    </div>
  );
}

export default ExpiryTracker;
