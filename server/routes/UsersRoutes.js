import express from "express";
import { verify } from "../controller/UsersController.js";

const route2 = express.Router();

route2.post("/", verify)

export default route2;