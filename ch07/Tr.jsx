import React from "react";

import Td from "./Td";

const Tr = ({ rowData }) => {
    return (
        <tr>
            {rowData.map((td, i) => <Td key={i} />)}
        </tr>
    );
};

export default Tr;