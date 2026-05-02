import React from "react";

const H1 = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <h2>{props.subheading}</h2>
    </>
  );
};

export default H1;

