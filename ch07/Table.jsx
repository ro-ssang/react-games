import React from "react";

import Tr from "./Tr";

const Table = ({ tableData, dispatch }) => {
    return (
        <table>
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

export default React.memo(Table);