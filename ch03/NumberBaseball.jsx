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
                    {[
                        { fruit: "사과", taste: "맛있다"},
                        { fruit: "바나나", taste: "맛없다"},
                        { fruit: "포도", taste: "맛없다"},
                        { fruit: "귤", taste: "시다"},
                        { fruit: "감", taste: "떫다"},
                        { fruit: "배", taste: "달다"},
                        { fruit: "밤", taste: "맛있다"},
                    ].map((v) => {
                        return <li key={v.fruit + v.taste}><b>{v.fruit}</b> - {v.taste}</li>
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball;