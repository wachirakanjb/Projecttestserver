import express from "express";
import server from "./server";

const app = express();

const PORT = 9090;

server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:9090${server.graphqlPath}`)
);
