import React, { useState } from "react";
import Dropdown from "./Components/Dropdown/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

// dropdown array
const data = ["yes", "no", "other"];

const App = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <div style={styles.dropContainer}>
        <Dropdown
          label={"Select an option"}
          data={data}
          value={value}
          setValue={setValue}
        />
      </div>
    </>
  );
};

export default App;

// app styles
const styles = {
  dropContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey",
  },
};
