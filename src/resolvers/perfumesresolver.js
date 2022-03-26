const perfumesResolver = {
  Query: {
    perfume: (parent, { id = "" }, { db }) =>
      db.perfumes.filter((item) => {
        return item.id === id;
      })[0],
    perfumesarray: (parent, args, { db }) => db.perfumes,
    perfumesearch: (parent, { search = "" }, { db }) =>
      db.perfumes.filter((item) => {
        return (
          item.name.includes(search) ||
          item.brand.includes(search) ||
          item.scent.includes(search) ||
          item.mood.includes(search)
        );
      }),
  },
};

export default perfumesResolver;
