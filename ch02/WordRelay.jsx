const React = require('react');

class WordRelay extends React.Component {
    state = {
        word: "제로초",
        value: "",
        result: "",
    };

    input;

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
            this.setState({
                word: this.state.value,
                value: "",
                result: "딩동댕",
            });
        } else {
            this.setState({
                value: "",
                result: "땡",
            });
        }
        this.input.focus();
    };

    onChangeInput = (e) => {
        this.setState({ value: e.target.value });
    };

    onRefInput = (el) => {
        this.input = el;
    };

    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} type="text" value={this.state.value} onChange={this.onChangeInput} />
                    <button type="submit">제출</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

module.exports = WordRelay;