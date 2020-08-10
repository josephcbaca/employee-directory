import React from "react";
import "./style.css";

function ListHeader() {
    return (
        <div className="row list-header-style">
            <h5 className="col-3">Photo</h5>
            <h5 className="col-2">Name</h5>
            <h5 className="col-5">Instrument</h5>
            <h5 className="col-2">Joined</h5>
        </div>
    );
}

export default ListHeader;
