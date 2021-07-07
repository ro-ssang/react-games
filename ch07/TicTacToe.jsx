import React, { useReducer } from "react";

import Table from "./Table";

const initialState = {
    winner: "",
    turn: "O",
    tableData: [["", "", ""], ["", "", ""], ["", "", ""]]
};

const reducer = (state, action) => {

};

const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <Table />
            {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    );
};

export default TicTacToe;