import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./page/NavBar";
import { useSelector } from "react-redux";
// import { StoreProvider } from "./utils/GlobalState";
import colors from "./components/colors";

function App() {
  const changePhotoState = useSelector((state) => state.changePhotoState);

  return (
    <Router>
      {changePhotoState ? (
        <NavBar color={colors.blue} />
      ) : (
        <NavBar color={colors.orange} />
      )}
    </Router>
  );
}

export default App;
