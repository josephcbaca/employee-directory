import React from "react";
import ListItem from "../ListItem";
import ListHeader from "../ListHeader";
import ButtonRow from "../ButtonRow";

function List() {
    return (
        <div>
            <ButtonRow />
            <ListHeader />
            <ListItem />
        </div>
    );
}

export default List;