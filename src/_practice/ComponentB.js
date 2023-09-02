import React, { useEffect } from "react";
import ComponentC from "./ComponentC";

function ComponentB(props) {
  const [college, setCollege] = useState("LPU");

  useEffect(() => {
    props.getCollege(college);
  }, [college]);
  return <ComponentC name={props.name} />;
}

export default ComponentB;
