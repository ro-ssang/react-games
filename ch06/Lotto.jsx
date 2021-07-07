import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

import Ball from "./Ball";

function getWinNumbers() {
    console.log("getNumbers");
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const winNumbers = shuffle.splice(0, 6).sort((a, b) => a - b);
    return [ ...winNumbers, shuffle[shuffle.length - 1] ];
}

const Lotto = () => {
    const lottoNumbers = useMemo(() => getWinNumbers(), []);
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    
    const timeouts = useRef([]);

    const runTimeouts = () => {
        for (let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevBalls) => {
                    return [ ...prevBalls, winNumbers[i] ];
                });
            }, 1000 * (i + 1));
        }
        timeouts.current[winNumbers.length - 1] = setTimeout(() => {
            setBonus(winNumbers[winNumbers.length - 1]);
            setRedo(true);
        }, 1000 * winNumbers.length);
    };

    useEffect(() => {
        runTimeouts();
        return () => {
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            });
        };
    }, [winNumbers]);

    const onClickRedo = useCallback(() => {
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    }, []);

    return (
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
                {winBalls.map((v) => {
                    return <Ball key={v} number={v} />
                })}
            </div>
            <div>보너스</div>
            {bonus && <Ball number={bonus} />}
            {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </>
    );
};

export default Lotto;