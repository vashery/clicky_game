import React, { Component } from "react";


class TitleBar extends Component {

    refreshPage = () => { 
        window.location.reload(); 
    }

    render() {
        return (
            <div className="ui four item menu">
                <a href="/" className="item" onClick={ this.refreshPage }>Clicky Game</a>
                <div className="item"></div>
                <div className="item">Current Score: {this.props.score}</div>
                <div className="item">High Score: {this.props.highscore}</div>
            </div>
        )

    }
}

export default TitleBar;
