import React from "react";
import Row from "../Row";

function ListItem(props) {
    console.log(props.image)
    return (
        <div className="row" data-value={props.current}>
            <img className="col-3" src={props.image}></img>
            <h6 className="col-2">{props.name}</h6>
            <h6 className="col-5">{props.instrument}</h6>
            <h6 className="col-2">{props.joined}</h6>
        </div>
    );
}

export default ListItem;
