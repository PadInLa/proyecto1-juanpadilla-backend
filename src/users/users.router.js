import {
  createUser,
  deleteUser,
  getUserbyID,
  getUserbyName_pass,
  patchUser,
} from "./users.controller";
import { Router } from "express";
const router = Router();

// Endpoint GET
router.get("/:number", getUserbyID);
router.get("/:email/:pass", getUserbyName_pass);

// Endpoint POST
router.post("/", createUser);

// Endpoint PATCH
router.patch("/:id", patchUser);

// Endpoint DELETE
router.delete("/:id", deleteUser);

export default router;
