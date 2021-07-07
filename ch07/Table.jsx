import React from "react";

import Tr from "./Tr";

const Table = ({ onClick, tableData }) => {
    return (
        <table onClick={onClick}>
            <tbody>
                {tableData.map((tr, i) => <Tr key={i} rowData={tr} />)}
            </tbody>
        </table>
    );
};

export default Table;