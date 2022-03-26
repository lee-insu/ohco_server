import { gql } from "apollo-server-express";
import codySchema from "./cody.js";
import productsShema from "./product.js";
import perfumesShema from "./perfumes.js";
import musicShema from "./music.js";

const linkSchema = gql`
  type Query {
    _: Boolean
  }
`;

export default [
  linkSchema,
  codySchema,
  productsShema,
  perfumesShema,
  musicShema,
];
