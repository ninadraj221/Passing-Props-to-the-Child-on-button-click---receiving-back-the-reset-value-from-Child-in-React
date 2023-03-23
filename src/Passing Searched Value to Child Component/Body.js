import Resto from "./Resto";
import { useState } from "react";

const Body = () => {
  // let searchText;

  const [sendSearchText, setSendSearcText] = useState(false);

  const [searchText, setSearchText] = useState("");

  return (
    <>
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);

          // searchText = e.target.value;
        }}
      ></input>
      <button
        onClick={() => {
          console.log(searchText);
          setSendSearcText(true);
        }}
      >
        Send Searched Text to Child
      </button>
      <h1>Body</h1>

      <Resto
        shouldIFilterData={sendSearchText}
        resetFilterData={(data) => {
          console.log(data, "Inside Reset");
          setSendSearcText(data);
        }}
      />
    </>
  );
};

export default Body;
