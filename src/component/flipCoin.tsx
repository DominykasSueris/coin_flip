import { useState } from "react";
import { toast } from "react-toastify";
import Coin from "./coin";
import { CoinSide } from "./coinSide";

const FlipCoin = (): JSX.Element => {
  const [side, setSide] = useState<CoinSide>(CoinSide.null);
  const [flips, setFlips] = useState<number>(0);
  const [heads, setHeads] = useState<number>(0);
  const [tails, setTails] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleFlip = () => {
    setLoading(true);
    setTimeout(() => {
      const fliped = Math.round(Math.random());
      fliped ? setSide(CoinSide.tail) : setSide(CoinSide.head);
      fliped ? setHeads(heads + 1) : setTails(tails + 1);
      setFlips(flips + 1);
      setLoading(false);
    }, 2500);
  };

  const handleReset = () => {
    toast.success("Start from 0!", {
      autoClose: 1000,
      hideProgressBar: true
    });
    setSide(CoinSide.null);
    setFlips(0);
    setHeads(0);
    setTails(0);
  };

  return (
    <div className="container">
      <h1>Let's Flip a coin?</h1>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div>
          <Coin side={side} />
        </div>
      )}

      <div>
        <button className="btn success" onClick={handleFlip} disabled={isLoading}>
          Flip Me
        </button>
      </div>
      <h2>
        Out of flips {flips} , there have been {heads} heads and {tails} tails!
      </h2>
      <div>
        <button className="btn danger" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default FlipCoin;
