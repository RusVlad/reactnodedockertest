import React from "react";
import PropTypes from "prop-types";

const Properties = (props) => {
  return (
    <div className="container">
      <h1 className="header">Properties</h1>
      <div className="properties-actions">
        <div className="filter-section">
          {props.searchForm}
          {props.sortForm}
          {props.viewTypeFilter}
        </div>
      </div>
      {props.list}
    </div>
  );
};

Properties.propTypes = {
  searchForm: PropTypes.node,
  sortForm: PropTypes.node,
  viewTypeFilter: PropTypes.node,
  list: PropTypes.node,
};

export default Properties;
