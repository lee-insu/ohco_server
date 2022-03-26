const musicResolver = {
  Query: {
    music: (parent, { id = "" }, { db }) =>
      db.music.filter((item) => {
        return item.id === id;
      })[0],
    musicarray: (parent, args, { db }) => db.music,
    musicsearch: (parent, { search = "" }, { db }) =>
      db.music.filter((item) => {
        return (
          item.name.toLowerCase().includes(search) ||
          item.artist.toLowerCase().includes(search) ||
          item.album.toLowerCase().includes(search) ||
          item.mood === search
        );
      }),
  },
};

export default musicResolver;
