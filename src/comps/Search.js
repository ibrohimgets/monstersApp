import React from "react";

const Search = ({ className, placeholder, type, onchange }) => {
  return (
    <div>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        onChange={onchange}
      />
    </div>
  );
};
export default Search;
