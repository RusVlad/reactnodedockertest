import { combineReducers } from "redux";
import userReducer from "./userReducer";
import propertiesReducer from "./propertiesReducer";

const rootReducer = combineReducers({
  userReducer,
  propertiesReducer,
});

export default rootReducer;
