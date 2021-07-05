import React from 'react';

const Try = ({ tryInfo }) => {
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    );
};

export default React.memo(Try);

/* props나 state가 바뀌지 않았는데 리렌더링 되는 경우: 
  1. shouldComponentUpdate(nextProps, nextState, nextContext) {
      if (this.state.value !== nextState.value) {
        return true;
      }
      return false;
  }
  => 커스텀 마이징이 가능하다.

  2. 클래스 사용할 시: class Component extends React.PureComponent {}

  3. Hooks 사용할 시: const Component = React.memo(() => {...});
*/
