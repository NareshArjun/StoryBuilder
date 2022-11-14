import "./MainLeft.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTextElement } from "../../actions/TextActions";

function MainLeft() {
  const [menuIcon, setMenuIcon] = useState("Text");
  const slideInShow = useSelector(
    (state) => state.displayingSlideReducer.slideInDisplay
  );
  const dispatch = useDispatch();

  function clickedMenuIcon(event) {
    setMenuIcon(event.target.innerText);
  }
  function clickedMenuDetailElement(event) {
    console.log(event);
    if (event.target.localName !== "div") {
      dispatch(
        addTextElement({
          slideId: slideInShow,
          tag: event.target.localName,
          content: event.target.innerText,
        })
      );
    }
  }

  return (
    <>
      <div className="flexcontainer menucontainer">
        <div className="menulist">
          <div onClick={clickedMenuIcon}>
            <ul className="flexcontainer menulistcontainer">
              <li
                className={`menuelement ${menuIcon === "Text" ? "active" : ""}`}
              >
                <span>Text</span>
              </li>
              <li
                className={`menuelement ${
                  menuIcon === "Image" ? "active" : ""
                }`}
              >
                <span>Image</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="menudetail">
          {menuIcon === "Text" && (
            <div onClick={clickedMenuDetailElement}>
              <div className="flexcontainer menudetailcontainer">
                <div className="menudetailelement">
                  <h1 className="elements">Heading 1</h1>
                </div>
                <div className="menudetailelement">
                  <h2 className="elements">Heading 2</h2>
                </div>
                <div className="menudetailelement">
                  <h3 className="elements">Heading 3</h3>
                </div>
              </div>
            </div>
          )}
          {menuIcon === "Image" && <div></div>}
        </div>
      </div>
    </>
  );
}

export default MainLeft;
