import React, { createContext, useMemo, useReducer } from "react";

import Table from "./Table";
import Form from "./Form";

export const CODE = {
    MINE: -7,
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    CLICKED_MINE: -6,
    OPENED: 0,
};

export const TableContext = createContext({
    tableData: [],
    dispatch: () => {},
    halted: true,
});

const plantMine = (row, cell, mine) => {
    const candidate = Array(row * cell).fill().map((v, i) => i);
    const shuffle = [];
    while (candidate.length > row * cell - mine) {
        const chosen = candidate.splice(Math.floor(Math.random() * (candidate.length)), 1)[0];
        shuffle.push(chosen);
    }
    
    const data = [];
    for (let i = 0; i < row; i++) {
        const rowData = [];
        data.push(rowData);
        for (let j = 0; j < cell; j++) {
            rowData.push(CODE.NORMAL);
        }
    }
    
    for (let k = 0; k < shuffle.length; k++) {
        const ver = Math.floor(shuffle[k] / cell);
        const hor = shuffle[k] % cell;
        data[ver][hor] = CODE.MINE;
    }

    return data;
};

const initialState = {
    tableData: [],
    timer: 0,
    result: "",
    halted: true,
};

export const START_GAME = "START_GAME";
export const OPEN_CELL = "OPEN_CELL";
export const CLICK_MINE = "CLICK_MINE";
export const FLAG_CELL = "FLAG_CELL";
export const QUESTION_CELL = "QUESTION_CELL";
export const NORMALIZE_CELL = "NORMALIZE_CELL";


const reducer = (state, action) => {
    switch (action.type) {
        case START_GAME:
            return {
                ...state,
                tableData: plantMine(action.row, action.cell, action.mine),
                halted: false,
            };
        case OPEN_CELL:
            {
                const tableData = [ ...state.tableData ];
                tableData[action.row] = [ ...tableData[action.row] ];
                let around = [];
                if (tableData[action.row - 1]) {
                    around = around.concat(
                        tableData[action.row - 1][action.cell - 1],
                        tableData[action.row - 1][action.cell],
                        tableData[action.row - 1][action.cell + 1],
                    );
                }
                around = around.concat(
                    tableData[action.row][action.cell - 1],
                    tableData[action.row][action.cell + 1],
                );
                if (tableData[action.row + 1]) {
                    around = around.concat(
                        tableData[action.row + 1][action.cell - 1],
                        tableData[action.row + 1][action.cell],
                        tableData[action.row + 1][action.cell + 1],
                    );
                }
                const count = around.filter((v) => [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v)).length;
                tableData[action.row][action.cell] = count;
                return {
                    ...state,
                    tableData,
                };
            }
        case CLICK_MINE:
            {
                const tableData = [ ...state.tableData ];
                tableData[action.row] = [ ...tableData[action.row] ];
                tableData[action.row][action.cell] = CODE.CLICKED_MINE;
                return {
                    ...state,
                    tableData,
                    halted: true,
                };
            }
        case FLAG_CELL:
            {
                const tableData = [ ...state.tableData ];
                tableData[action.row] = [ ...tableData[action.row] ];
                if (state.tableData[action.row][action.cell] === CODE.MINE) {
                    tableData[action.row][action.cell] = CODE.FLAG_MINE;
                } else {
                    tableData[action.row][action.cell] = CODE.FLAG;
                }
                return {
                    ...state,
                    tableData,
                };
            }
        case QUESTION_CELL:
            {
                const tableData = [ ...state.tableData ];
                tableData[action.row] = [ ...tableData[action.row] ];
                if (state.tableData[action.row][action.cell] === CODE.FLAG_MINE) {
                    tableData[action.row][action.cell] = CODE.QUESTION_MINE;
                } else {
                    tableData[action.row][action.cell] = CODE.QUESTION;
                }
                return {
                    ...state,
                    tableData,
                };
            }
        case NORMALIZE_CELL:
            {
                const tableData = [ ...state.tableData ];
                tableData[action.row] = [ ...tableData[action.row] ];
                if (state.tableData[action.row][action.cell] === CODE.QUESTION_MINE) {
                    tableData[action.row][action.cell] = CODE.MINE;
                } else {
                    tableData[action.row][action.cell] = CODE.NORMAL;
                }
                return {
                    ...state,
                    tableData,
                };
            }
        default:
            return state;
    }
};

const MineSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { tableData, timer, result, halted } = state;

    const value = useMemo(() => ({ tableData, dispatch, halted }), [tableData, halted]);

    return (
        <TableContext.Provider value={value}>
            <Form />
            <div>{timer}</div>
            <Table />
            <div>{result}</div>
        </TableContext.Provider>
    );
};

export default MineSearch;