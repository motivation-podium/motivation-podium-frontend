import React from "react";
import { FcSupport } from "react-icons/fc";
import "./styleUser/UnderConstruction.css"
function UnderConstruction() {
  return (
    <div className="UnderConstruction">
      <div>
      <FcSupport className="UnderConstructionIcon"/>
      </div>
      <h2 className="UnderConstructionMsg">Under Construction</h2>
    </div>
  );
}

export default UnderConstruction;
