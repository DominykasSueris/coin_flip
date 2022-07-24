import React from "react";

interface Coin {
  imageUrl: string;
  imageAlt: string;
}

const Coins: React.FC<Coin> = ({ imageUrl, imageAlt }) => {
  return (
    <div className="coin">
      <img src={imageUrl} alt={imageAlt} />
    </div>
  );
};

export default Coins;
