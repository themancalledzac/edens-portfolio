import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./page/NavBar";
import { useSelector } from "react-redux";
// import { StoreProvider } from "./utils/GlobalState";
import colors from "./components/colors";

function App() {
  const changeColorState = useSelector((state) => state.changeColorState);

  return (
    <Router>
      {changeColorState ? (
        <NavBar color={colors.blue} />
      ) : (
        <NavBar color={colors.orange} />
      )}
    </Router>
  );
}

export default App;
