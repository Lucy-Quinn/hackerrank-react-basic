import React from "react";
const Button = ({ buttonData, handleClick, slides, value }) => {
  const handleOnClick = (action) => {
    switch (action) {
      case "restart":
        handleClick(0);
        break;
      case "prev":
        value === 0 ? handleClick(slides.length - 1) : handleClick(value - 1);
        break;
      case "next":
        value === slides.length - 1 ? handleClick(0) : handleClick(value + 1);
        break;
      default:
        break;
    }
  };

  return (
    <button
      data-testid={buttonData.dataTestId}
      className={buttonData.className}
      onClick={() => handleOnClick(buttonData.type)}
      disabled={
        buttonData.type !== "next" ? value === 0 : value === slides.length - 1
      }
    >
      {buttonData.type}
    </button>
  );
};

export default Button;
