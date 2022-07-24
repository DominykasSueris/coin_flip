import { useState } from "react";
import FlipCoin from "./component/flipCoin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme, setTheme] = useState<string>("light");

  return (
    <div className="App">
      <div className={theme}>
        <div>
          <input
            type="checkbox"
            className="themeButton"
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          />
          <label htmlFor="themeButton">Change theme</label>
        </div>
        <FlipCoin />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
