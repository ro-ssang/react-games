const React = require('react');

class Gugudan extends React.Component {
    state = {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: "",
        result: "",
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (
            parseInt(this.state.value, 10) ===
            this.state.first * this.state.second
        ) {
            this.setState((prevState) => ({
                first: Math.ceil(Math.random() * 9),
                second: Math.ceil(Math.random() * 9),
                value: "",
                result: `${prevState.first} X ${
                    prevState.second
                } = ${
                    prevState.first * prevState.second
                } 이므로 정답입니다.`,
            }));
        } else {
            this.setState((prevState) => ({
                value: "",
                result: `${prevState.first} x ${
                    prevState.second
                } = ${
                    prevState.first * prevState.second
                } 이므로 땡입니다.`,
            }));
        }
        this.input.focus();
    };

    onChange = (e) => this.setState({ value: e.target.value });

    onRefInput = (el) => (this.input = el);

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.state.first} 곱하기 {this.state.second}는?
                </div>
                <form onSubmit={this.onSubmit}>
                    <input
                        ref={this.onRefInput}
                        type="number"
                        value={this.state.value}
                        onChange={this.onChange}
                    />
                    <button>제출</button>
                </form>
                <div>{this.state.result}</div>
            </React.Fragment>
        );
    }
}

module.exports = Gugudan;