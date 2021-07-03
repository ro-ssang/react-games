import React, { Component } from 'react';

function getNumbers() {}

class NumberBaseball extends Component {
    state = {
        result: "",
        value: "",
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = (e) => {}

    onChangeInput = (e) => {}

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input type="text" maxLength="4" value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <ul>
                    {["사과", "바나나", "포도", "귤", "감", "배", "밤"].map((v) => {
                        return <li>{v}</li>
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball;