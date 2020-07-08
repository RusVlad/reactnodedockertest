import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const propertiesReducer = (state = initialState.propertiesReducer, action) => {
  switch (action.type) {
    case types.GET_PROPERTIES_SUCCESS:
      return { ...state, properties: action.properties };
    default:
      return state;
  }
};

export default propertiesReducer;
