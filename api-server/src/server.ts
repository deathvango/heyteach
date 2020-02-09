import express from "express";
import GraphHttp from "express-graphql";
import { HeyTeachContext } from "./mysql/context";
import * as bodyParser from "body-parser";
import _ from "lodash";
import faker from "faker";
import User from "./mysql/models/user";
import Person from "./mysql/models/person";
import Address from "./mysql/models/address";
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
      _.times(10, () => {
        return User.create({
          username: faker.internet.email()
        }).then(u => {
          Person.create({
            userId: u.id,
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            phone: faker.phone.phoneNumber()
          }).then(p => {
            const addr = new Address();
            Address.create({
              lineOne: faker.address.streetAddress(),
              state: faker.address.stateAbbr(),
              zip: faker.address.zipCode(),
              city: faker.address.city()
            }).then(a => {
              p.update({
                addressId: a.id
              });
            });
          });
        });
      });
    });

    app.listen(APP_PORT, APP_HOST, () =>
      console.log(`Listening on ${APP_HOST}:${APP_PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
})();
