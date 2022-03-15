const productResolver = {
  Query: {
    products: (parent, args, { db }) => db.cody.products,
    product: (parent, { id = "" }, { db }) =>
      db.products.filter((item) => {
        return item.product_id === id;
      })[0],
    productarray: (parent, { id = [id] }, { db }) =>
      db.products.filter((item) => {
        return id.includes(item.product_id);
      }),
  },
};

export default productResolver;
