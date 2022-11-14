import "./Mainframe.css";
import MainLeft from "./Mainframe/MainLeft";
import MainCentre from "./Mainframe/MainCentre";
import MainRight from "./Mainframe/MainRight";

function Mainframe() {
  return (
    <>
      <div className="mainwrapper">
        <div className="mainwrapperitem_3_10">
          <MainLeft />
        </div>
        <div className="mainwrapperitem_1_2">
          <MainCentre />
        </div>
        <div className="mainwrapperitem_1_5">
          <MainRight />
        </div>
      </div>
    </>
  );
}

export default Mainframe;
