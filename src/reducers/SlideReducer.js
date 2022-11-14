import { ActionTypes } from "../actions/ActionTypes";

const initialState = [
  {
    id: 1,
    name: "Slide 1",
  },
];

export default function SlideReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
