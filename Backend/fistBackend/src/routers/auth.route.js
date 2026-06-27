import express from "express";
import { Loginuser, Logout, Register } from "../controllers/auth.controller.js";
import { sampaleMiddleWare } from "../middlewares/auth.middleware.js";

const router = express.Router();
console.log(2);

router.post("/login",sampaleMiddleWare, Loginuser);
router.post("/register", Register);
router.get("/logout", Logout);

export default router;
