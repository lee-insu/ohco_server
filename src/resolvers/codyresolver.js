const codyResolver = {
  Query: {
    codymain: (parent, { seoson = "", offset = "", limit = "" }, { db }) =>
      seoson
        ? db.cody

            .filter((item) => {
              return item.category.season === seoson;
            })
            .slice(offset, limit)
        : db.cody.slice(offset, limit),

    codyfilter: (
      parent,
      { count = "", mood = "", season = "", style = "", sex = "", theme = "" },
      { db }
    ) =>
      db.cody
        .filter((item) => {
          const condition = { mood, season, style, sex, theme };
          Object.keys(condition).forEach((key) => {
            if (condition[key] === "") {
              delete condition[key];
            }
          });
          let result = true;
          for (let key of Object.keys(condition)) {
            if (item.category[key] != condition[key]) {
              result = false;
              break;
            }
          }
          return result;
        })
        .slice(0, count),

    codylist: (parent, args, { db }) => db.cody,

    usercodylist: (parent, { user_id = "" }, { db }) =>
      user_id
        ? db.cody.filter((item) => {
            return item.user_id === user_id;
          })
        : null,
    usersimilarlist: (parent, { style = "", sex = "" }, { db }) =>
      db.cody.filter((item) => {
        const condition = { style, sex };
        Object.keys(condition).forEach((key) => {
          if (condition[key] === "") {
            delete condition[key];
          }
        });
        let result = true;
        for (let key of Object.keys(condition)) {
          if (item.category[key] != condition[key]) {
            result = false;
            break;
          }
        }
        return result;
      }),
    codyitem: (parent, { id = "" }, { db }) =>
      db.cody.filter((item) => {
        return item.id === id;
      })[0],

    codyarray: (parent, { id = [id] }, { db }) =>
      db.cody.filter((item) => {
        return id.includes(item.id);
      }),
    codysearch: (parent, { search = "" }, { db }) =>
      db.cody.filter((item) => {
        return (
          item.information.name.includes(search) ||
          item.information.instagram.toLowerCase().includes(search) ||
          item.category.mood.includes(search) ||
          item.category.season.includes(search) ||
          item.category.sex === search ||
          item.category.style.includes(search) ||
          item.category.theme.includes(search)
        );
      }),

    information: (parent, args, { db }) => db.cody.information,
    category: (parent, args, { db }) => db.cody.category,
  },
};

export default codyResolver;
