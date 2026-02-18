import { useState } from "react";

function ExpiryTracker() {
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    alert("Medicine image uploaded successfully ✅");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>📸 Upload Medicine</h2>

        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={(e) => setImage(e.target.files[0])}
        />

        {image && (
          <p style={{ marginTop: "10px" }}>
            Selected: {image.name}
          </p>
        )}

        <button onClick={handleSubmit} disabled={!image}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default ExpiryTracker;

