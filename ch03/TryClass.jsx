import React, { PureComponent } from "react";

class Try extends PureComponent {
    render() {
        return (
            <li>
                <div>{this.props.tryInfo.try}</div>
                <div>{this.props.tryInfo.result}</div>
            </li>
        );
    }
}

export default Try;

/*
자식 컴포넌트에서 props를 바꿔야 하는 경우:
1. class Component
  class Child extends React.Component {
      state = {
          value: this.props.value,
      };
  }
2. Hooks Component
  const Child = (props) => {
      const [value, setValue] = React.useState(props.value);
  };
*/