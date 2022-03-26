import { gql } from "apollo-server-express";

const perfumesSchema = gql`
  type RecommandCody {
    id: String
  }

  type Perfumes {
    id: String
    img_url: String
    price: Int
    name: String
    brand: String
    scent: String
    mood: String
    shop_url: String
    recommand_cody: [RecommandCody]
  }

  extend type Query {
    perfume(id: ID!): Perfumes
    perfumesarray: [Perfumes]
    perfumesearch(search: String): [Perfumes]
  }
`;

export default perfumesSchema;
