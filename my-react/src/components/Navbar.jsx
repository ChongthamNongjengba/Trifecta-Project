function Navbar({ setPage }) {
  return (
    <div className="navbar">
      <span className="logo" onClick={() => setPage("home")}>
        Trifecta
      </span>

      <div className="nav-links">
        <span onClick={() => setPage("health")}>Health</span>
        <span onClick={() => setPage("skin")}>Skin</span>
        <span onClick={() => setPage("daily")}>Daily-Routine</span>
        <span onClick={() => setPage("login")}>Log in</span>
        <button onClick={() => setPage("signup")}>Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;