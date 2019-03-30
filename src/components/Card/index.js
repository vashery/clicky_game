import React, { Component } from "react";


class Card extends Component {
    render() {
        return (
            <div className="ui raised link centered card" onClick={() => this.props.removeCard(this.props.id)}>
                <div className="image">
                    <img alt="doge" src={this.props.image} />
                </div>
            </div>
        )
    }
}

export default Card;
