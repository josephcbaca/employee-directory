import React from "react";
import { useState } from "react";

export default function ButtonRow() {
    let [currentMembers, setCurrentMembers] = useState(0)
    let [sortYear, setsortYear] = useState(0)

    let colors = ["success", "danger", "warning"];

    return [
        <button onClick={() => setCurrentMembers(currentMembers + 1)} className={`btn btn-${colors[currentMembers]} red col-6`}>See Current Members</button>,
        <button onClick={() => setsortYear(sortYear - 1)} className={`btn btn-${colors[sortYear]} red col-6`}>Sort by Year</button>
    ]
}

// import React from "react";
// import { useState } from "react";
// export default function Counter(props) {
//   let [count, setCount] = useState(0);

//   let renderContent = [];
//   for (let i = 0; i < count; i++) {
//     renderContent.push(<div className="jeremiah">{i}</div>);
//   }

//   return [
//     <div onClick={() => setCount(count + 1)}>
//       You've clicked {count} times.
//     </div>,
//     renderContent
//   ];
// }