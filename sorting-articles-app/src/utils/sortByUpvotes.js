export const sortByUpvotes = (articles) => {
  return articles.sort(({ upvotes: a }, { upvotes: b }) => b - a);
};
