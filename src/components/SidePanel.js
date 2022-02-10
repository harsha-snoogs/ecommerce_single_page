import React, { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import {sortFunctunality} from '../components/sortFunctionality'
function SidePanel(props) {

  const { rawData, filterDataHandler } = props;

  let products = rawData.products;
  let filter = rawData.filters.primaryFilters;


  let [selectedArray, setSelectedArray] = useState([]);
  let [sortValue, setSortValue] = useState("");
  let [sortedArray, setSortedArray]= useState([])

  let handleOnChange = (event, option) => {
    if (event.target.checked) {
      setSelectedArray([...selectedArray, event.target.value]);
    } else {
      let deletedArr = selectedArray.filter((value) => {
        return value !== event.target.value;
      });
      setSelectedArray(deletedArr);
    }
  };

  useEffect(() => {
    //updates the array into sorted as options displayed. 
    let data = sortFunctunality(sortValue,products)
    setSortedArray(data);
    filterDataHandler(sortedArray)
  }, [sortValue]);
  


  return (
    <>
      <div className="fw-bolder">Sort</div>
      <select className="form-select" aria-label="Default select example">
        <option selected disabled>
          None
        </option>
        {rawData.sortOptions.map((sortName, index) => {
          return (
            <option
              key={index}
              value={sortName}
              onClick={(e) => setSortValue(e.target.value)}
            >
              {sortName}
            </option>
          );
        })}
      </select>
      <div className="fw-bolder">Filters</div>
      <div>
        {filter.map((filter) => {
          return (
            <div key={filter.id}>
              <h6 style={{ marginTop: "0.5rem" }}>{filter.id}</h6>
              <CheckBox
                filterValueArray={filter.filterValues}
                onChangeTrigger={handleOnChange}
              />
            </div>
          );
        })}
      </div>
      <button
        className="btn btn-blue"
      ></button>
    </>
  );
}

export default SidePanel;
