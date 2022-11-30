import React from "react";

function SensorsContainer({children}) {
  return (
    <ul className="SensorCards-container">
      {children}
    </ul>
  );
}

export default SensorsContainer;
