import React from "react";

function DisplayElement(props) {
  return React.createElement(
    props.element.tag,
    { style: props.element.style },
    props.element.content
  );
}

export default DisplayElement;
