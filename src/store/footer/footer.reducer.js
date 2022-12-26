import { FOOTER_ACTION_TYPES } from "./footer.types";

const INITIAL_STATE = {
  isShowing: true,
};

export const footerReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case FOOTER_ACTION_TYPES.SHOW_FOOTER_COMPONENT:
      return { ...state, isShowing: payload };
    default:
      return state;
  }
};
