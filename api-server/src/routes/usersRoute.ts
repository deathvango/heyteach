import { Router } from "express";
import User from "../mysql/models/user";

export const users = Router();

users.post("/", async (req, res, next) => {
  try {
    const body: User = req.body;
    const user = await User.create(body);
    res.status(201).json(user);
    return user;
  } catch (e) {
    next(e);
  }
});

users.get("/", async (req, res, next) => {
  try {
    res.json(await User.scope(req.query["scope"]).findAll());
  } catch (e) {
    next(e);
  }
});
