import { CoinSide } from "./coinSide";

type CoinProps = {
  side: CoinSide;
};

const Coins = ({ side }: CoinProps) => {
  if (side !== CoinSide.empty)
    return (
      <div className="coin">
        <img src={side.url} alt={side.alt} />
      </div>
    );
  return null;
};

export default Coins;
