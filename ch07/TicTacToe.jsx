import React, { useCallback, useEffect, useReducer } from "react";

import Table from "./Table";

const initialState = {
    winner: "",
    turn: "O",
    tableData: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ],
    recentCell: [-1, -1],
};

export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";
export const RESET_GAME = "RESET_GAME";

const reducer = (state, action) => {
    switch (action.type) {
        case SET_WINNER:
            return ({
                ...state,
                winner: action.winner,
            });
        case CLICK_CELL:
            const tableData = [ ...state.tableData ];
            tableData[action.rowIndex] = [ ...tableData[action.rowIndex] ];
            tableData[action.rowIndex][action.cellIndex] = state.turn;
            return ({
                ...state,
                tableData,
                recentCell: [action.rowIndex, action.cellIndex],
            });
        case CHANGE_TURN:
            return ({
                ...state,
                turn: state.turn === "O" ? "X" : "O",
            });
        case RESET_GAME:
            return ({
                ...state,
                turn: "O",
                tableData: [
                    ["", "", ""],
                    ["", "", ""],
                    ["", "", ""]
                ],
                recentCell: [-1, -1],
            });
        default:
            return state;
    }
};

const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { turn, tableData, recentCell } = state;
    useEffect(() => {
        const [row, cell] = recentCell;
        if (row < 0) {
            return;
        }
        let win = false;
        if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
            win = true;
        } else if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
            win = true;
        } else if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
            win = true;
        } else if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
            win = true;
        }
        if (win) {
            dispatch({ type: SET_WINNER, winner: turn });
            dispatch({ type: RESET_GAME });
        } else {
            let all = true;
            tableData.forEach((rowData) => {
                rowData.forEach((cellData) => {
                    if (!cellData) {
                        all = false;
                    }
                });
            });
            if (all) {
                dispatch({ type: SET_WINNER, winner: "" });
                dispatch({ type: RESET_GAME });
            } else {
                dispatch({ type: CHANGE_TURN });
            }
        }
    }, [tableData]);

    return (
        <>
            <Table
                tableData={state.tableData}
                dispatch={dispatch}
            />
            {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    );
};

export default TicTacToe;