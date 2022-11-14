import "./MainRight.css";
import { useSelector, useDispatch } from "react-redux";
import DisplayElement from "./DisplayElement";
import DisplaySlide from "./DisplaySlide";
import { slideToShow } from "../../actions/DisplayingSlideActions";

function MainRight() {
  const slides = useSelector((state) => state.slideReducer);
  const elements = useSelector((state) => state.textReducer);
  let slideElements;
  const dispatch = useDispatch();
  console.log("slides", slides);
  function clickedSlide(event) {
    console.log("in right", event);
    console.log(
      "dataset",
      event.target.dataset.slideid || event.target.parentElement.dataset.slideid
    );
    dispatch(
      slideToShow(
        event.target.dataset.slideid ||
          event.target.parentElement.dataset.slideid
      )
    );
  }

  return (
    <>
      <div className="displaycontainer">
        <div className="displayflexcontainer">
          <div className="displayslide displayflexcontainer">
            <h4 style={{ textAlign: "center" }}>
              Create New <br /> Slide
            </h4>
          </div>
          {slides.length > 0 &&
            slides.map((slide) => {
              return (
                <div
                  className="displayslide"
                  key={slide.id}
                  data-slideid={slide.id}
                  onClick={clickedSlide}
                >
                  {
                    elements
                      .filter((element) => element.slideId === slide.id)
                      .map((element) => {
                        return (
                          <DisplayElement
                            key={element.elementId}
                            element={element}
                          />
                        );
                      }) /* <DisplaySlide slideId={slide.id} /> */
                  }
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default MainRight;
