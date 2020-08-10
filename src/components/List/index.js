import React from "react";
import Row from "../Row";
import ListItem from "../ListItem";
import band from "../db";

function List() {
    return (
        <div>
            <Row>
                <h5 className="col-3">Photo</h5>
                <h5 className="col-2">Name</h5>
                <h5 className="col-5">Instrument</h5>
                <h5 className="col-2">Joined</h5>
            </Row>

            <ListItem
                image={band[0].image}
                name={band[0].name}
                instrument={band[0].instrument}
                joined={band[0].year_joined}
                current={band[0].current_member}
            />

        </div>
    );
}

export default List;