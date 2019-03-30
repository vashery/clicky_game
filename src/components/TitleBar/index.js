import React, { Component } from "react";


class TitleBar extends Component {

    refreshPage = () => { 
        window.location.reload(); 
    }

    render() {
        return (
            <div className="ui four item menu">
                <a className="item" onClick={ this.refreshPage }>Clicky Game</a>
                <a className="item"></a>
                <a className="item">Current Score: {this.props.score}</a>
                <a className="item">High Score: {this.props.highscore}</a>
            </div>
        )

    }
}

export default TitleBar;
