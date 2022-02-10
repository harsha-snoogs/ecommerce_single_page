import React, { useState } from "react";
import CheckBox from "./CheckBox";

function SidePanel(props) {
  const { rawData, filterDataHandler } = props;
  let products = rawData.products;
  let filter = rawData.filters.primaryFilters;
  console.log(filter);

  let [selectedArray, setSelectedArray] = useState([]);
  
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
  
  console.log(selectedArray);
  return (
    <>
      <div>Filters</div>
      <div>
        {filter.map((filter) => {
          return (
            <div key={filter.id}>
              <h5>{filter.id}</h5>
              <CheckBox
                filterValueArray={filter.filterValues}
                onChangeTrigger={handleOnChange}
              />
            </div>
          );
        })}
      </div>
      <button className="btn btn-blue" onClick={filterDataHandler(selectedArray)}></button>
    </>
  );
}

export default SidePanel;
