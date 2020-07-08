import React from "react";
import PropTypes from "prop-types";

import DefaultCard from "./defaultCard";
import { NavLink } from "react-router-dom";

// Properties list
const DefaultList = (props) => {
  return (
    <div className={props.filterViewType + " properties-list"}>
      {props.properties.length ? (
        props.properties.map((item, index) => (
          <NavLink className="item" to={"/property/" + item._id} key={index}>
            <DefaultCard property={item} />
          </NavLink>
        ))
      ) : (
          <p className="empty-list-message">...no properties to show</p>
        )}
    </div>
  );
};

DefaultList.propTypes = {
  properties: PropTypes.array.isRequired,
  filterViewType: PropTypes.string
};

export default DefaultList;
