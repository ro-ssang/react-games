import React from "react";

import Tr from "./Tr";

const Table = ({ onClick, tableData, dispatch }) => {
    return (
        <table onClick={onClick}>
            <tbody>
                {tableData.map((tr, i) => 
                    <Tr
                        key={i}
                        rowData={tr}
                        rowIndex={i}
                        dispatch={dispatch}
                    />
                )}
            </tbody>
        </table>
    );
};

export default Table;