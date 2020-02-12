import express from "express";
import next from "next";
import Axios from "axios";
import * as bodyParser from "body-parser";

const devMode = process.env.NODE_ENV !== "production";
const app = next({
  dev: devMode,
});
const handle = app.getRequestHandler();

// Express initialization
// const app = express();
const APP_PORT = 3000;
const APP_HOST = "0.0.0.0";
app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json({ limit: "5mb" }));

  server.post("/graphql", async (req, res) => {
    Axios.post("http://192.168.99.100:5000/graphql?", req.body)
      .then(response => {
        res.json(response.data);
      })
      .catch(err => {
        res.status(400);
        res.json(err);
      });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(APP_PORT, err => {
    if (err) {
      throw err;
    }
    console.log(`Listening on ${APP_HOST}:${APP_PORT}`);
  });
});
