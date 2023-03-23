import React from "react";
import ReactDOM from "react-dom/client";
// import Body from "./Components/Body";
import Body from "./Passing Searched Value to Child Component/Body";

const AppLayout = () => {
  return <Body />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
