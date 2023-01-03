import React from "react";
import { sortByUpvotes } from "../../utils/sortByUpvotes";
import { sortByDate } from "../../utils/sortByDate";

const Button = ({ buttonData, handleClick, orderedArticles }) => {
  const handleOnClick = (type) => {
    let sortedArticles;
    if (type === "upvoted") {
      sortedArticles = sortByUpvotes(orderedArticles);
    } else {
      sortedArticles = sortByDate(orderedArticles);
    }
    handleClick(sortedArticles);
  };

  return (
    <button
      data-testid={buttonData.dataTestId}
      className={buttonData.className}
      onClick={() => handleOnClick(buttonData.type)}
    >
      {buttonData.type}
    </button>
  );
};

export default Button;
