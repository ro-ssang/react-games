import React, { useContext } from "react";

import { TableContext } from "./MineSearch";
import Tr from "./Tr";

const Table = () => {
    const { tableData } = useContext(TableContext);

    return (
        <table>
            <tbody>
                {tableData.map((v, i) => <Tr key={i} rowIndex={i} />)}
            </tbody>
        </table>
    );
};

export default Table;