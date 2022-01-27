import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Router from "./routing/Router";
import { useDispatch } from "react-redux";
import { updateIsLoggedIn } from "./redux/isLoggedIn/isLoggedInSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const localUsername = localStorage.getItem("username");
    const localPassword = localStorage.getItem("password");
    if (localUsername === "kodluyoruz" && localPassword === "bootcamp109") {
      dispatch(updateIsLoggedIn(true));
    } else {
      dispatch(updateIsLoggedIn(false));
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
