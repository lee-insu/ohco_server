import { gql } from "apollo-server-express";

const productsSchema = gql`
  type RecommandProducts {
    product_id: String
  }

  type Products {
    product_id: String
    img_url: String
    name: String
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
  }
`;

export default productsSchema;
