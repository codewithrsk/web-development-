import express from "express";
import { Loginuser, Logout, Register } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/login", Loginuser);
router.post("/rigester", Register);
router.post("/logout", Logout);

export default router;
