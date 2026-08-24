function Signup() {
  return (
    <div className="auth-page">
      <h1>Create your account</h1>
      <input type="text" placeholder="Full name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Create account</button>
    </div>
  );
}

export default Signup;