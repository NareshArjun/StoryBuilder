import { ActionTypes } from "../actions/ActionTypes";

const initialState = [
  {
    elementId: 1,
    slideId: 1,
    tag: "p",
    content: "create story",
    style: {
      border: "0.5px solid lightblue",
      padding: "0.5px",
      borderRadius: "5px",
    },
  },
];

const addTextElement = (originalState, payload) => {
  let currState = [...originalState];
  console.log(currState);
  let newElementId = currState.length + 1;
  let element = {
    elementId: newElementId,
    slideId: payload.slideId,
    tag: payload.tag,
    content: payload.content,
    style: {
      border: "0.5px solid lightblue",
      padding: "0.5px",
      borderRadius: "5px",
    },
  };
  currState = [...currState, element];
  console.log(currState);
  return currState;
};

export default function TextReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TEXT_ELEMENT:
      return addTextElement(state, action.payload);
    default:
      return state;
  }
}
