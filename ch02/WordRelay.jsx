const React = require('react');
const { useState, useRef } = require('react');

const WordRelay = () => {
    const [word, setWord] = useState("제로초");
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const inputRef = useRef(null);

    const onChangeInput = (e) => setValue(e.target.value);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setWord(value);
            setValue("");
            setResult("딩동댕");
        } else {
            setValue("");
            setResult("땡");
        }
        inputRef.current.focus();
    };

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} type="text" value={value} onChange={onChangeInput} />
                <button type="submit">제출</button>
            </form>
            <div>{result}</div>
        </>
    );
};

module.exports = WordRelay;