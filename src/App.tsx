import { useState } from "react";
import FlipCoin from "./component/flipCoin";
import { ToastContainer } from "react-toastify";
import Switch from "./component/switch";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme, setTheme] = useState<string>("light");

  return (
    <div className="App">
      <div className={theme}>
        <Switch theme={theme} setTheme={setTheme} />
        <FlipCoin />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
