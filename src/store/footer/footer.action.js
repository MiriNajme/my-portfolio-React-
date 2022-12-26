import { createAction } from "../../utils/reducer/reducer.utils";
import { FOOTER_ACTION_TYPES } from "./footer.types";

export const showFooter = (footer) =>
  createAction(FOOTER_ACTION_TYPES.SHOW_FOOTER_COMPONENT, footer);
