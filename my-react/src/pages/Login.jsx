function Login() {
  return (
    <div className="auth-page">
      <h1>Log in to Trifecta</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Log in</button>
    </div>
  );
}

export default Login;