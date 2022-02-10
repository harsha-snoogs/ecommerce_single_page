import React from "react";

function SortBy() {
  return (
    <select class="form-select" aria-label="Default select example">
      <option selected disabled>SortBy:</option>
      <option value="none">None</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  );
}

export default SortBy;
