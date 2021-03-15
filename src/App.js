import { BrowserRouter as Router } from "react-router-dom";
import Main from "./page/main";
// import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
