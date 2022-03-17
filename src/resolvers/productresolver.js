const productResolver = {
  Query: {
    products: (parent, args, { db }) => db.products,
    product: (parent, { id = "" }, { db }) =>
      db.products.filter((item) => {
        return item.id === id;
      })[0],
    productarray: (parent, { id = [id] }, { db }) =>
      db.products.filter((item) => {
        return id.includes(item.id);
      }),
  },
};

export default productResolver;
