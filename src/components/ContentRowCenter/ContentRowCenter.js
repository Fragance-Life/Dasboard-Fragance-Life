import React from "react";
import "./ContentRowCenter.css"
import LastFraganceInDb from "../LastFraganceInDb/LastFraganceInDb";
import GenresInDb from "../GenresInDb/GenresInDb";
function ContentRowCenter() {
  return (
    <div className="roww">
      <LastFraganceInDb />
      <GenresInDb />
    </div>
  );
}

export default ContentRowCenter;
