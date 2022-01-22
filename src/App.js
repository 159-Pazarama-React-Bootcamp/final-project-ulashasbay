import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Router from "./routers/Router";
import { useDispatch } from "react-redux";
import { updateIsLoggedIn } from "./redux/isLoggedIn/isLoggedInSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const localUsername = localStorage.getItem("username");
    const localPassword = localStorage.getItem("password");
    if (localUsername === "kodluyoruz" && localPassword === "bootcamp109") {
      dispatch(updateIsLoggedIn(true));
      console.log("heyo");
    } else {
      dispatch(updateIsLoggedIn(false));
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
