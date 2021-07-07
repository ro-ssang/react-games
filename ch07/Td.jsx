import React, { useCallback } from "react";
import { CLICK_CELL, CHANGE_TURN } from "./TicTacToe";

const Td = ({ rowIndex, cellIndex, cellData, dispatch }) => {
    const onClickCell = useCallback(() => {
        if (cellData) {
            return;
        }
        dispatch({ type: CLICK_CELL, rowIndex, cellIndex });
    }, [cellData]);

    return (
        <td onClick={onClickCell}>{cellData}</td>
    );
};

export default Td;