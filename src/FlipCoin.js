import React, { Component } from 'react';
import { choice } from './RandomCoin';
import Coin from './Coin';

class FlipCoin extends Component {
    static defaultProps = {
       coins: [
        {side: 'heads', url: "https://tinyurl.com/react-coin-heads-jpg"},
        {side: 'tails', url: "https://tinyurl.com/react-coin-tails-jpg"}
       ]
    }
    constructor(props) {
        super(props)
        this.state = { 
            currentCoint: null,
            flipsNumber: 0,
            heads: 0,
            tails: 0
        } 
        this.handleClick = this.handleClick.bind(this)
    }
   
    flipCoin() {
       const newCoin = choice(this.props.coins);
       this.setState(s => {
         return {
         currentCoint: newCoin,
         flipsNumber: s.flipsNumber += 1,
         heads: s.heads + (newCoin.side === "heads" ? 1 : 0),
         tails: s.tails + (newCoin.side === "tails" ? 1 : 0)
         }
       })
    }

    handleClick(e) {
        this.flipCoin()
    }
    render(){
        return(
            <div className="coinContainer">
                <h2>Let's Flip a coin</h2>
                {this.state.currentCoint && <Coin info={this.state.currentCoint} />}
                <button onClick={this.handleClick}>Flip ME</button>
                <h2>Out of {this.state.flipsNumber} flips , there have been {this.state.heads} heads and {this.state.tails} tails</h2>
            </div>
        )
    }
}

export default FlipCoin;