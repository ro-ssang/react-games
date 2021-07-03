import React, { Component } from 'react';

import Try from './Try';

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

    fruits = [
        { fruit: "사과", taste: "맛있다" },
        { fruit: "바나나", taste: "맛없다" },
        { fruit: "포도", taste: "맛없다" },
        { fruit: "귤", taste: "시다" },
        { fruit: "감", taste: "떫다" },
        { fruit: "배", taste: "달다" },
        { fruit: "밤", taste: "맛있다" },
    ];

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input type="text" maxLength="4" value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <ul>
                    {this.fruits.map((v) => <Try key={v.fruit + v.taste} v={v} />)}
                </ul>
            </>
        );
    }
}

export default NumberBaseball;