import { combineReducers } from "redux";
import TextReducer from "./TextReducer";
import SlideReducer from "./SlideReducer";
import DisplayingSlideReducer from "./DisplayingSlideReducer";

const reducer = combineReducers({
  textReducer: TextReducer,
  slideReducer: SlideReducer,
  displayingSlideReducer: DisplayingSlideReducer,
});

export default reducer;
