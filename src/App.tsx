import { useState } from "react";
import FlipCoin from "./component/flipCoin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme, setTheme] = useState<string>("light");

  return (
    <div className="App">
      <div className={theme}>
        <button
          className="themeButton"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Change theme color
        </button>
        <FlipCoin />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
