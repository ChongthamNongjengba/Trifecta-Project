import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Daily from "./pages/Daily";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Health from "./pages/Health";
import Skin from "./pages/Skin";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "home" && <Home setPage={setPage} />}
      {page === "daily" && <Daily />}
      {page === "signup" && <Signup />}
      {page === "login" && <Login />}
      {page === "health" && <Health />}
      {page === "skin" && <Skin />}
    </div>
  );
}

export default App;