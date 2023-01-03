import React, { Fragment } from "react";
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
            <Fragment key={article.id}>
              <Article article={article} />
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
