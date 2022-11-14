import { ActionTypes } from "./ActionTypes";

export const addTextElement = (element) => {
  return {
    type: ActionTypes.ADD_TEXT_ELEMENT,
    payload: element,
  };
};
