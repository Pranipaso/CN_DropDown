import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./dropdown.css";

const Dropdown = ({ value, setValue, data, label }) => {
  // state for showing and closing the dropdown
  const [showDropdown, setShowDropdown] = useState(false);
  const selectOption = (item) => {
    setValue(item);
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      {/* dropdown field */}
      <div onClick={() => setShowDropdown(!showDropdown)} style={styles.field}>
        <h6 style={{ fontSize: "30px", margin: "0px 0px" }}>
          {value.length === 0 ? label : value}
        </h6>
        {!showDropdown ? (
          <FaChevronDown size={30} />
        ) : (
          <FaChevronUp size={30} />
        )}
      </div>
      {/* dropdown options */}
      {showDropdown && (
        <div style={styles.optionsContainer}>
          {data.map((item, index) => {
            return (
              <h6
                onClick={() => selectOption(item)}
                style={{
                  ...styles.options,
                  backgroundColor: value === item ? "#e0e0e0" : null,
                }}
                className="dropdownOption"
              >
                {item}
              </h6>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

// dropdown component styles
const styles = {
  field: {
    cursor: "pointer",
    userSelect: "none",
    backgroundColor: "#ececec",
    width: "500px",
    padding: "0px 20px",
    height: "100px",
    marginTop: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "20px",
  },
  optionsContainer: {
    cursor: "pointer",
    userSelect: "none",
    backgroundColor: "#ececec",
    width: "500px",
    marginTop: "5px",
    padding: "10px",
    borderRadius: "20px",
  },
  options: {
    borderRadius: "10px",
    fontSize: "30px",
    margin: "10px 0px",
    // padding: "5px 0px ",
    padding: "10px 20px",
  },
};
