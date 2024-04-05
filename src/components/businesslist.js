import React from "react";
import Business from "./business";

function BusinessList() {
  let list = [];

  for (let i = 0; i <= 10; i++) {
    list.push(<Business></Business>);
  }

  return (
    <>
      <div className="grid grid-flow-row">{list}</div>
    </>
  );
  // return list;
}

export default BusinessList;
