import express from "express";
import graphqlHttp from "express-graphql";
import { buildSchema } from "graphql";
import { users } from "./routes/usersRoute";
import { HeyTeachContext } from "./mysql/context";
import * as bodyParser from "body-parser";

// GraphQL Schema
const schema = buildSchema(`
  type Query {
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);

interface RollDiceDto {
  numDice: number;
  numSides?: number;
}

// GraphQL root resolver function for each API endpoint
const root = {
  rollDice: (req: RollDiceDto) => {
    let output: number[] = [];
    for (let i = 0; i < req.numDice; ++i) {
      output.push(1 + Math.floor(Math.random() * (req.numSides || 6)));
    }
    return output;
  }
};

// Express initialization
const app = express();
const PORT = 5000;
const HOST = "0.0.0.0";

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

app.use(
  "/graphql",
  graphqlHttp({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.use("/users", users);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

(async () => {
  try {
    await HeyTeachContext.sync({ force: true });
    app.listen(PORT, HOST, () => console.log(`Listening on ${HOST}:${PORT}`));
  } catch (e) {
    console.log(e);
  }
})();
