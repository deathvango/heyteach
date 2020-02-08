import express from "express";
import graphqlHttp from "express-graphql";
import { buildSchema } from "graphql";
import { users } from "./routes/usersRoute";
import { HeyTeachContext } from "./mysql/context";

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
