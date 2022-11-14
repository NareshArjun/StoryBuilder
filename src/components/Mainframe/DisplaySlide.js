import React from "react";
import { useSelector } from "react-redux";
import DisplayElement from "./DisplayElement";

function DisplaySlide(props) {
  const elements = useSelector((state) => state.textReducer);
  let slideElements;

  return elements
    .filter((element) => element.slideId === props.slideId)
    .map((element) => {
      return <DisplayElement key={element.id} element={element} />;
    });
}

export default DisplaySlide;
