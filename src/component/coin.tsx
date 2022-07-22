import React from "react";
import "../App.css";

interface Coin {
  imageUrl: string;
  imageAlt: string;
}

const Coins: React.FC<Coin> = ({ imageUrl, imageAlt }) => {
  return (
    <div className="img">
      <img src={imageUrl} alt={imageAlt} />
    </div>
  );
};

export default Coins;
