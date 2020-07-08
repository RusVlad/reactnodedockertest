import React from "react";
import PropTypes from "prop-types";
import ReactSelect from "react-select";

const SortForm = (props) => {
  // set / reset sortby value
  const handleChange = val => {
    let newVal = { value: "", label: "" };
    if (val) {
      newVal = val;
    }
    props.setSortByProperty(newVal);
  };

  return (
    <div className="sort-form form">
      <label>Sort by</label>
      <ReactSelect
        className="sort-select"
        placeholder={"Select"}
        onChange={handleChange}
        value={{ value: props.sortByProperty.value, label: props.sortByProperty.label }}
        options={props.options}
        isClearable={true}
        isSearchable={false}
      />
    </div>
  );
};

SortForm.propTypes = {
  sortByProperty: PropTypes.object,
  setSortByProperty: PropTypes.func.isRequired,
  options: PropTypes.array
};

export default SortForm;
