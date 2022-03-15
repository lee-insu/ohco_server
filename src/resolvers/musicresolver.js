const musicResolver = {
  Query: {
    music: (parent, { id = "" }, { db }) =>
      db.music.filter((item) => {
        return item.id === id;
      })[0],
    musicarray: (parent, args, { db }) => db.music,
  },
};

export default musicResolver;
