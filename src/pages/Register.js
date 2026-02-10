function Register() {
  return (
    <div className="container">
      <div className="card">
        <h2>Register</h2>
        <p>Create your account</p>

        <input placeholder="Name" />
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Register</button>
      </div>
    </div>
  );
}

export default Register;
