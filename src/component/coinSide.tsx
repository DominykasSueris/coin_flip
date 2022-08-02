export class CoinSide {
  public static readonly head = new CoinSide(
    "https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg",
    "head"
  );
  public static readonly tail = new CoinSide(
    "https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg",
    "tail"
  );

  public static readonly empty = new CoinSide("", "empty");

  public constructor(public readonly url: string, public readonly alt: string) {}
}
