import { gql } from "apollo-server-express";

const codySchema = gql`
  type Codylist {
    id: ID!
    user_id: String
    img_url: String
    information: Information
    category: Category
    products: [Products]
    perfumes: [Perfumes]
    music: [Music]
  }

  type Information {
    name: String
    youtube: String
    instagram: String
    shop: String
  }

  type Category {
    mood: String
    season: String
    sex: String
    style: String
    theme: String
  }

  extend type Query {
    codymain(seoson: String, offset: Int, limit: Int): [Codylist]
    codyfilter(
      mood: String
      season: String
      sex: String
      style: String
      theme: String
      count: Int
    ): [Codylist]
    codylist: [Codylist]
    usercodylist(user_id: String): [Codylist]
    usersimilarlist(theme: String): [Codylist]
    codyitem(id: ID!): Codylist
    codyarray(id: [String]): [Codylist]
    information: Information
    category: Category
  }
`;

export default codySchema;
