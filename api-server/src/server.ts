import express from "express";
import GraphHttp from "express-graphql";
import { HeyTeachContext, CreateTestData } from "./mysql/context";
import * as bodyParser from "body-parser";
import HeyTeachGqlSchema from "./graphql/schema";

// Express initialization
const app = express();
const APP_PORT = 5000;
const APP_HOST = "0.0.0.0";

// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for json body parsing
app.use(bodyParser.json({ limit: "5mb" }));

// enable corse for all origins
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Expose-Headers", "x-total-count");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type,authorization");

  next();
});

// GraphQL endpoint
app.use(
  "/graphql",
  GraphHttp({
    schema: HeyTeachGqlSchema,
    pretty: true,
    graphiql: true
  })
);

// Root
app.get("/", (req, res) => {
  res.send("Hello World!");
});

(async () => {
  try {
    HeyTeachContext.sync({ force: true }).then(() => {
      CreateTestData();
    });

    app.listen(APP_PORT, APP_HOST, () =>
      console.log(`Listening on ${APP_HOST}:${APP_PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
})();
