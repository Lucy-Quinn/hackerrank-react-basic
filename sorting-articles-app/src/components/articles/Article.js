import React from "react";
import { v4 as uuidv4 } from "uuid";

const Article = ({ article }) => {
  return (
    <tr data-testid="article" key={uuidv4()}>
      <td data-testid="article-title">{article.title}</td>
      <td data-testid="article-upvotes">{article.upvotes}</td>
      <td data-testid="article-date">{article.date}</td>
    </tr>
  );
};

export default Article;
