import React, { Component } from "react";

class Try extends Component {
    render() {
        return (
            <li>
                <b>{this.props.v.fruit}</b> - {this.props.v.taste}
            </li>
        );
    }
}

export default Try;