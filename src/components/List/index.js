import React from "react";
import ListRows from "../ListRows";
import band from "../db";

function List() {
    return (
        <div>
            <ListRows band={band}/>
        </div>
    );
}

export default List;