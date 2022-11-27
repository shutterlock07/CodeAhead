import React from "react";
import FTIcon from "react-file-type-icons";

const fileCard = ({ fileName, onClick }) => {
  return (
    <div className="file-card-wrapper" onClick={() => onClick(fileName)}>
      <div className="file-image-container">
        <FTIcon key={fileName} fileName={fileName} />
      </div>
      <div className="file-name">{fileName}</div>
    </div>
  );
};

export default fileCard;
