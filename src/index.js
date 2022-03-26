import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import resolvers from "./resolvers/index.js";
import schema from "./schema/index.js";
import http from "http";
import { randomDB, readDB, reverseDB } from "./dbController.js";
// import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    db: {
      cody: reverseDB("cody"),
      products: randomDB("products"),
      perfumes: randomDB("perfumes"),
      music: randomDB("music"),
    },
  },
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();
server.applyMiddleware({
  app,
  path: "/graphql",
  cors: {
    origin: ["http://localhost:3000", "https://studio.apollographql.com"],
    credentials: true,
  },
});

await new Promise((resolve) => httpServer.listen({ port: 8000 }, resolve));

// console.log(process.env.DB_MOMNGO);
console.log(`🚀 Server ready at http://localhost:8000${server.graphqlPath}`);

// const uri =
//

// try {
//   mongoose
//     .connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => console.log("connection mongo"))
//     .catch((e) => console.log(e, "err"));
// } catch (error) {
//   console.log(error, "error");
// }
