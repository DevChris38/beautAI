import { Link } from "react-router-dom";
import lorealDesktop from "./assets/lorealDesktop2.jpg";
import "./App.css";

function App() {
  return (
    <>
      <Link to="./routinehome">
        <img src={lorealDesktop}></img>
      </Link>
    </>
  );
}

export default App;
