import React, { Component } from 'react';
import TitleBar from "../TitleBar";
import Card from "../Card";
import cards from "../../cards.json"

class Main extends Component {

  state = {
    cards,
    score: 0,
    topscore: 0
  };

  shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  resetArray = arr => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].beenclicked = false;
    }
    return arr
  }

  removeCard = id => {
    // Filter this.state.cards for friends with an id not equal to the id being removed
    const index = this.state.cards.findIndex(card => card.id === id);
    if (cards[index].beenclicked) {
      this.setState({ score: 0 })
      const newcards = this.resetArray(this.state.cards);
      console.log(newcards)
      this.setState({ cards: newcards })
    }
    else {
      this.setState({ score: this.state.score + 1 })
      //this.setState({topscore: this.state.topscore + 1})
      if (this.state.topscore <= this.state.score) {
        this.setState({ topscore: this.state.topscore + 1 })
      }
      cards[index].beenclicked = true;
    }
    // Set this.state.friends equal to the new friends array
    this.shuffleArray(cards);
    this.setState({ cards });

  };

  render() {
    return (

      <div className="container ui">
        <TitleBar score={this.state.score} highscore={this.state.topscore} />
        <div className="ui cards">
          {this.state.cards.map(card => (
            <Card
              removeCard={this.removeCard}
              id={card.id}
              image={card.image}
            />
          ))}

        </div>
      </div>
    );
  }
}

export default Main;
