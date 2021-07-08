import React, { useContext } from "react";

import { TableContext } from "./MineSearch";
import Td from "./Td";

const Tr = ({ rowIndex }) => {
    const { tableData } = useContext(TableContext);
    
    return (
        <tr>
            {tableData[rowIndex].map((v, i) => 
                <Td key={i} rowIndex={rowIndex} cellIndex={i}/>
            )}
        </tr>
    );
};

export default Tr;