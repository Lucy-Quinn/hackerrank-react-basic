import React from "react";
import { BUTTON_DATA } from "../../utils/constants";
import Button from "../buttons/Button";

const ButtonContainer = ({ handleClick, orderedArticles }) => {
  return (
    <div className="layout-row align-items-center justify-content-center my-20 navigation">
      <label className="form-hint mb-0 text-uppercase font-weight-light">
        Sort By
      </label>
      {BUTTON_DATA.map((buttonData) => (
        <Button
          buttonData={buttonData}
          handleClick={handleClick}
          orderedArticles={orderedArticles}
        />
      ))}
    </div>
  );
};

export default ButtonContainer;
