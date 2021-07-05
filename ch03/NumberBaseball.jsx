import React, { useState, useRef } from "react";

import Try from "./Try";

function getNumbers() {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

const NumberBaseball = () => {
    const [result, setResult] = useState("");
    const [value, setValue] = useState("");
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (value === answer.join("")) {
            setResult("홈런!");
            setTries((prevTries) => {
                return [...prevTries, { try: value, result: "홈런!" }];
            });
            alert("게임을 다시 시작합니다!");
            setValue("");
            setAnswer(getNumbers());
            setTries([]);
            inputRef.current.focus();
        } else {
            const answerArray = value.split("").map((v) => parseInt(v, 10));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                setResult(`10번 넘게 틀려서 실패! 정답은 ${answer.join(", ")}였습니다!`);
                alert("게임을 다시 시작합니다!");
                setValue("");
                setAnswer(getNumbers());
                setTries([]);
                inputRef.current.focus();
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setValue("");
                setTries((prevTries) => {
                    return [...prevTries, { try: value, result: `${strike} 스트라이크, ${ball} 볼` }]
                });
                inputRef.current.focus();
            }            
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} type="text" maxLength="4" value={value} onChange={onChangeInput} />
                <button type="submit">입력</button>
            </form>
            <h3>시도: {tries.length} / 10</h3>
            <ul>
                {(() => {
                    const array = [];
                    for (let i = 0; i < tries.length; i++) {
                        array.push(<Try key={i + "번째 시도"} tryInfo={tries[i]} />);
                    }
                    return array;
                })()}
            </ul>
            {/* <ul>
                {tries.map((v, i) => {
                    return <Try key={i + "번째 시도"} tryInfo={v} />
                })}
            </ul> */}
        </>
    );
};

export default NumberBaseball;

/*
  React에서 엘리먼트를 참조하고 싶을 때,
    1. class component
      1) class Component extends React.Component {
           onChange = (e) => {
               this.inputRef.focus();
           };

           inputRef;
       
           onInputRef = (c) => { this.inputRef = c };
       
           render() {
             return (
                 <input ref={this.onInputRef} />
             );
           }
         }
         => 함수를 직접 만들기 때문에, 다른 것을 할 수 있다. (ex. console.log(c); ...)

      2) class Component extends React.Component {
           onChange = (e) => {
             this.inputRef.current.focus();
           };

           inputRef = React.createRef();
       
           render() {
             return (
                 <input ref={this.inputRef} />
             );
           }
         }
         => Hooks 에서 사용하는 것과 똑같이  inputRef.current 에 엘리먼트가 있다.
    2. Hooks component
      const Component = () => {
          const inputRef = React.useRef(null);

          const onChange = () => {
            inputRef.current.focus();
          };

          return (
            <input ref={inputRef} />
          );
      };
*/