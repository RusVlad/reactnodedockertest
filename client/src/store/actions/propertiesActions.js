import * as types from "./actionTypes";
import RequestProvider from "../../providers/requests";

/**
 *
 * @param {Array} properties Array of property objects
 */
export const setProperties = (properties) => {
  return { type: types.GET_PROPERTIES_SUCCESS, properties };
};

export const getProperties = () => {
  return (dispatch) => {
    RequestProvider.get("/properties").then((res) => {
      dispatch(setProperties(res));
    });
  };
};
