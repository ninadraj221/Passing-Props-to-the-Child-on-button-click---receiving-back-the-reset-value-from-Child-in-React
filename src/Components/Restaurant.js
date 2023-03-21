import React from "react";
import { useState } from "react";

const Restaurant = (props) => {
  //   const [resetCounterInChild, setResetCounterInChild] = useState("From Child");

  const resetCounterInChild = 0;

  console.log("From rest");

  //Since this Functional Component gets resetted therefore the counter always have the initial Value i.e. 1
  //However as props are passed we always get the updated value of the props
  console.log(resetCounterInChild, props);

  return (
    <>
      <h1>Restaurant</h1>
      <h2>
        This is Props {props?.args1} {props?.args2}
      </h2>
      <button
        onClick={() => {
          props.resetCounterValue(resetCounterInChild);
        }}
      >
        Click here to reset the counter from the Child (Restaurant)
      </button>
    </>
  );
};

export default Restaurant;
