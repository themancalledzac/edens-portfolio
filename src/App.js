import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./page/NavBar";
// import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
