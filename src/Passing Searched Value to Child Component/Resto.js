import { useEffect } from "react";

const Resto = (props) => {
  console.log("Resto", props);

  useEffect(filterData, [props?.shouldIFilterData]);

  function filterData() {
    console.log("Inside filter Data");
    props.resetFilterData(false);
  }

  return <h1>Resto</h1>;
};

export default Resto;
