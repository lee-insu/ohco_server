import { gql } from "apollo-server-express";

const productsSchema = gql`
  type RecommandProducts {
    id: String
  }

  type Products {
    id: String
    img_url: String
    name: String
    img_copyright: String
    brand: String
    shop_url: String
    cody: String
    price: Int
    recommand_products: [RecommandProducts]
  }

  extend type Query {
    product(id: ID!): Products
    products: [Products]
    productarray(id: [String]): [Products]
    productsearch(search: String): [Products]
  }
`;

export default productsSchema;
