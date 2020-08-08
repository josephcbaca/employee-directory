import React from "react";
import Row from "../Row"

let band = [
    {
        id: "1",
        name: "Chris Squire",
        instrument: ["bass", "backing vocals"],
        year_joined: 1968,
        current_member: false
    },
    {
        id: "2",
        name: "Steve Howe",
        instruments: ["guitar", "backing vocals", "lap steel guitar"],
        year_joined: 1970,
        current_member: true
    }
];

function List() {

    return (
        <div>
            <Row>
                <h3 className="col-4">Name</h3>
                <h3 className="col-4">Instrument</h3>
                <h3 className="col-4">Joined</h3>
            </Row>
            <Row>
                <h7 className="col-4">{band[0].name}</h7>
                <h7 className="col-4">{band[0].instrument}</h7>
                <h7 className="col-4">{band[0].year_joined}</h7>
            </Row>
        </div>
    );
}

export default List;