import React, { useEffect, useState } from "react";
import "../App.css";
import "h8k-components";
import Articles from "./articles/Articles";
import ButtonContainer from "../components/buttons/ButtonContainer";
import { ARTICLES_DATA } from "../utils/constants";
import { TITLE } from "../utils/constants";
import { sortByUpvotes } from "../utils/sortByUpvotes";

const TableContainer = () => {
  const [orderedArticles, setOrderedArticles] = useState([]);
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    const sortedInitially = sortByUpvotes(ARTICLES_DATA);
    setOrderedArticles(sortedInitially);
    setIsTriggered(!isTriggered);
  }, []);

  const handleClick = (articles) => {
    setOrderedArticles(articles);
    setIsTriggered(!isTriggered);
  };

  return (
    <div>
      <h8k-navbar header={TITLE}></h8k-navbar>
      <ButtonContainer
        handleClick={handleClick}
        orderedArticles={orderedArticles}
      />
      <Articles articles={orderedArticles} />
    </div>
  );
};

export default TableContainer;
