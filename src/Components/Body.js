import React from "react";
import Restaurant from "./Restaurant";
import { useState } from "react";

const Body = () => {
  let data = 100;

  const [data2, setData2] = useState(9);

  //   function passProps() {
  //     console.log("Pass Props1 clicked");
  //   }

  console.log("From Body");
  console.log(data, data2);

  //   function handleChildResetValue(data) {
  //     console.log(data);
  //   }

  return (
    <>
      <h1>Body</h1>

      {/* Using Normal Function */}
      {/* <button onClick={passProps}>Pass Props</button> */}

      {/* Using Arrow Function */}
      <button
        onClick={() => {
          setData2(data2 + 1);
          data = data + 1;
        }}
      >
        Pass Props from Parent (Body) to the Child (Restaurant)
      </button>

      <Restaurant
        args1={data}
        args2={data2}
        // resetCounterValue={handleChildResetValue}
        resetCounterValue={(data) => {
          console.log(
            data,
            "This value is passed from child (Rest) to Parent (Body)"
          );

          setData2(data);
        }}
      />
    </>
  );
};

export default Body;
