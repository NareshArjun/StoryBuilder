import { ActionTypes } from "./ActionTypes";

export const slideToShow = (id) => {
  return {
    type: ActionTypes.SLIDE_TO_SHOW,
    payload: id,
  };
};
