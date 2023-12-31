import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../Controllers/users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/",  createUser);
//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id",  getUser);

//GET ALL
router.get("/", getUsers);

export default router;