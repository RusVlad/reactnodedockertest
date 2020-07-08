import React, { useEffect, useState } from "react";
import PropertiesList from "../../components/properties/propertiesList";
import { useDispatch, useSelector } from "react-redux";

import { FILTER_VIEW_TYPE_CARDS, FILTER_VIEW_TYPE_LIST } from "../../constants";
import * as PropertiesActions from "../../store/actions/propertiesActions";
import SearchForm from "../../components/common/searchForm";
import ListViewTypeFilter from "../../components/common/listViewTypeFilter";
import DefaultList from "../../components/common/defaultList";
import SortForm from "../../components/common/sortForm";

import orderBy from "lodash/orderBy";

const PropertiesPage = () => {
  const properties = useSelector((state) => state.propertiesReducer.properties);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [sortByProperty, setSortByProperty] = useState({ value: "", label: "" });
  const [filterViewType, setFilterViewType] = useState(FILTER_VIEW_TYPE_LIST);
  const dispatch = useDispatch();

  // fetch properties
  useEffect(() => {
    if (!properties.length) {
      dispatch(PropertiesActions.getProperties());
    }
  }, []);

  useEffect(() => {
    setFilteredProperties([...properties]);
  }, [properties]);

  // search filter
  useEffect(() => {
    // reset sortBy filter and filter by search value
    if (searchInputValue !== "") {
      const filterKeyword = searchInputValue.toLowerCase();
      const filteredProperties = properties.filter((item) => {
        let textToFilter =
          item.name.toLowerCase() +
          item.description.toLowerCase() +
          item.sold_price.toString();

        if (textToFilter.includes(filterKeyword)) {
          return item;
        }
      });

      if (sortByProperty.value !== "") {
        setSortByProperty({ value: "", label: "" });
      }
      setFilteredProperties(filteredProperties);
    } else if (sortByProperty.value === "") {
      setFilteredProperties(properties);
    }
  }, [searchInputValue]);

  // sort filter
  useEffect(() => {
    // reset search filter and sort by selected sortBy value
    if (sortByProperty.value !== "") {

      const sortBy = sortByProperty.value.toLowerCase();
      const filteredProperties = orderBy(properties, sortBy);

      if (searchInputValue !== "") {
        setSearchInputValue("");
      }
      setFilteredProperties(filteredProperties);
    } else {
      setFilteredProperties(properties);
    }
  }, [sortByProperty]);

  const getSortByOptions = () => {
    return [
      { value: "name", label: "name" },
      { value: "location.street", label: "location" },
      { value: "sold_price", label: "price" }
    ]
  };

  return (
    <PropertiesList
      searchForm={
        <SearchForm
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
        />
      }
      sortForm={
        <SortForm
          options={getSortByOptions()}
          sortByProperty={sortByProperty}
          setSortByProperty={setSortByProperty}
        />
      }
      viewTypeFilter={
        <ListViewTypeFilter
          filterViewType={filterViewType}
          setFilterViewType={setFilterViewType}
          cardsView={FILTER_VIEW_TYPE_CARDS}
          listView={FILTER_VIEW_TYPE_LIST}
        />
      }
      list={
        <DefaultList
          properties={filteredProperties}
          filterViewType={filterViewType}
        />
      }
    />
  );
};

export default PropertiesPage;
