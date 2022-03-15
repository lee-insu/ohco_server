const perfumesResolver = {
  Query: {
    perfume: (parent, { id = "" }, { db }) =>
      db.perfumes.filter((item) => {
        return item.id === id;
      })[0],
    perfumesarray: (parent, args, { db }) => db.perfumes,
  },
};

export default perfumesResolver;
