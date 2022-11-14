import React from "react";
import "./MainCentre.css";
import { useSelector } from "react-redux";
import DisplayElement from "./DisplayElement";

function MainCentre() {
  const slideToShow = useSelector(
    (state) => state.displayingSlideReducer.slideInDisplay
  );
  const slides = useSelector((state) => state.slideReducer);
  const elements = useSelector((state) => state.textReducer);
  const slide =
    slides.length > 0 && slides.find((slide) => slide.id === slideToShow);
  const slideElements =
    elements.length > 0 &&
    elements.filter((element) => element.slideId === slideToShow);
  console.log("slides", slides);
  console.log("slide", slide);
  console.log("slideElements", slideElements);

  return (
    <>
      <div className="storycontainer">
        <div className="storycanvas">
          <div className="storycard">
            {slide &&
              slideElements.length > 0 &&
              slideElements.map((element) => {
                console.log("slide inside", slide);
                console.log("slide element inside", element);
                //data-slideid={slide.id}
                return (
                  <DisplayElement key={element.elementId} element={element} />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCentre;
