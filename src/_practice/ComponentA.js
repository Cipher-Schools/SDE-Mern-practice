import React from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
  const [name, setName] = useState("Nitesh");
  const [college, setCollege] = useState("");
  return (
    <>
      <ComponentB name={name} getCollege={(collegeName) => setCollege(collegeName)} />
    </>
  );
}

export default ComponentA;
