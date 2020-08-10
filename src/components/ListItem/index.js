import React from "react";
import band from "../db";
import "./style.css";

function ListItem() {


    return (
<div>
    {band.map(member => <div class="row">
        <img className="col-3" src={member.image}></img>
        <h6 className="col-2">{member.name}</h6>
        <h6 className="col-5">{member.instrument}</h6>
        <h6 className="col-2">{member.year_joined}</h6>
    </div>)}
    </div>
    );
}

export default ListItem;
