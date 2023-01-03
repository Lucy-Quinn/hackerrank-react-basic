import React from "react";
import Article from "./Article";

function Articles({ articles }) {
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <Article article={article} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
