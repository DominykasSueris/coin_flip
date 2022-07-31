import React from "react";
import { CoinSide } from "./coinSide";

interface Coin {
  side: string;
}

const Coins: React.FC<Coin> = ({ side }) => {
  if (side !== CoinSide.null)
    return (
      <div className="coin">
        <img src={side} alt="" />
      </div>
    );
  return null;
};

export default Coins;
