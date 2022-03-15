import { gql } from "apollo-server-express";

const musicSchema = gql`
  type Music {
    id: String
    artist: String
    album: String
    name: String
    mood: String
    img_url: String
    music_url: String
    recommand_cody: [RecommandCody]
  }

  extend type Query {
    music(id: ID): Music
    musicarray: [Music]
  }
`;

export default musicSchema;
