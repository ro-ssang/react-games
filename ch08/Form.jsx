import React, { useCallback, useContext, useState } from "react";

import { START_GAME, TableContext } from "./MineSearch";

const Form = () => {
    const [row, setRow] = useState();
    const [cell, setCell] = useState();
    const [mine, setMine] = useState();

    const { dispatch } = useContext(TableContext);

    const onChangeRow = useCallback((e) => {
        setRow(e.target.value);
    }, []);

    const onChangeCell = useCallback((e) => {
        setCell(e.target.value);
    }, []);

    const onChangeMine = useCallback((e) => {
        setMine(e.target.value);
    }, []);

    const onClickBtn = useCallback(() => {
        dispatch({ type: START_GAME, row, cell, mine });
    }, [row, cell, mine]);

    return (
        <div>
            <input type="number" value={row} onChange={onChangeRow} />
            <input type="number" value={cell} onChange={onChangeCell} />
            <input type="number" value={mine} onChange={onChangeMine} />
            <button onClick={onClickBtn}>시작</button>
        </div>
    );
};

export default Form;