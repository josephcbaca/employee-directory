import React, { useState } from "react";
import ListHeader from "../ListHeader";
import FormBtn from "../FormBtn";
import "./style.css";

function ListRows(props) {
    // Place to keep state of sorted list
    const [listRows, setListRows] = useState(props)
    const [order, setOrder] = useState(0)



    // Function to complete sorting and return sorted list
    function handleSortListYear() {
        const orderList = ["original", "asc", "desc"]
        let newOrder = order + 1

        if (newOrder === orderList.indexOf("asc")) {
            // setListRows(listRows.sort((a, b) => a - b ))
            setOrder(newOrder)
        }
        if (newOrder === orderList.indexOf("desc")) {
            // setListRows(listRows.sort((a, b) => a - b ))

            setOrder(newOrder)
        }
        if(newOrder === orderList.length) {
            setOrder(0)
        }


        // listRows.sort((a, b) =>
        // if (a.year_joined < b.year_joined) {

        // }
        // //   if (a.year_joined < b.year_joined) {
        // //     return -1;
        // //   }
        // //   if (a.year_joined > b.year_joined) {
        // //     return 1;
        // //   }
        // //   return 0;
        // // });
    }

    // Click handler that calls sortin function and updates state
    return (

        <div>
            <FormBtn
                onClick={handleSortListYear}
            >
                Sort by Year
              </FormBtn>
            <ListHeader />
            {listRows.band.map(member => <div className="row" key={member.id}>
                <img className="col-3 img-size my-1" src={member.image}></img>
                <h6 className="col-2">{member.name}</h6>
                <h6 className="col-5">{member.instrument}</h6>
                <h6 className="col-2">{member.year_joined}</h6>
            </div>)}
        </div>
    );
}


export default ListRows;
