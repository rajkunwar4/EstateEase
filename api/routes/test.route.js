import express from "express";
import { shouldBeAdmin } from "../controllers/test.controller.js";
import { shouldBeLoggedIn } from "../controllers/test.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

/*
    route-1: should be logged in
    route-1: should be a admin

*/ 

router.get("/should-be-logged-in",verifyToken,shouldBeLoggedIn);
router.get("/should-be-admin",verifyToken,shouldBeAdmin);




export  default router