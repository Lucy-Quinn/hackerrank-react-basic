export const sortByDate = (articles) => {
    return articles.sort(function (a, b) {
        const dateA = new Date(a.date),
          dateB = new Date(b.date);
        return dateB - dateA;
      });
  };
  