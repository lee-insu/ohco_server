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
    productsearch: (parent, { search = "" }, { db }) =>
      db.products.filter((item) => {
        return (
          item.name.toLowerCase().includes(search) ||
          item.cody.toLowerCase().includes(search) ||
          item.brand.toLowerCase().includes(search)
        );
      }),
  },
};

export default productResolver;
