import React from "react";
import "./GoalList.css";

const GoalList = props => {
  console.log(props.goals);
  return (
    <div className="goallist">
      This is from GoalList Component
      {/* <ul className="list">
        <li>SONY</li>
        <li>JBL</li>
        <li>APPLE</li>
        <li>BOAT</li>
        <li>REALME</li>
      </ul> */}
    </div>
  );
};

export default GoalList;
