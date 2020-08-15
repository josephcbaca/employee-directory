import React from "react";

export default function FormBtn(props) {
  return (
    <button {...props} className={"btn btn-outline-primary col-6 mb-1"}>
      {props.children}
    </button>
  );
}
