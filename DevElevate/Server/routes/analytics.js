<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middleware/authMiddleware"); 
const User = require("../models/User");
const Session = require("../models/Session");
const Module = require("../models/Module");
const Quiz = require("../models/Quiz");
const Feedback = require("../models/Feedback");
=======
import express from "express";
import { verifyToken, isAdmin } from "../middleware/authMiddleware.js";
import User from "../models/User.js";
import Session from "../models/Session.js";
import Module from "../models/Module.js";
import Quiz from "../models/Quiz.js";
import Feedback from "../models/Feedback.js";

const router = express.Router();
>>>>>>> origin/main

// 📌 Total registered users
router.get("/total-users", verifyToken, isAdmin, async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.json({ totalUsers: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 Active users per day/week/month
router.get("/active-users", verifyToken, isAdmin, async (req, res) => {
  try {
<<<<<<< HEAD
    const since = new Date();
    since.setDate(since.getDate() - 7); // last 7 days for demo
    const active = await Session.distinct("userId", { createdAt: { $gte: since } });
    res.json({ activeUsers: active.length });
=======
    const { period = "week" } = req.query;
    const since = new Date();

    if (period === "day") since.setDate(since.getDate() - 1);
    else if (period === "week") since.setDate(since.getDate() - 7);
    else if (period === "month") since.setMonth(since.getMonth() - 1);

    const active = await Session.distinct("userId", { createdAt: { $gte: since } });
    res.json({ activeUsers: active.length, period });
>>>>>>> origin/main
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 Total learning sessions
router.get("/sessions", verifyToken, isAdmin, async (req, res) => {
  try {
    const count = await Session.countDocuments();
    res.json({ totalSessions: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 Module completion counts
router.get("/modules-completed", verifyToken, isAdmin, async (req, res) => {
  try {
    const count = await Module.countDocuments({ status: "completed" });
    res.json({ modulesCompleted: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 Quiz attempts
router.get("/quiz-attempts", verifyToken, isAdmin, async (req, res) => {
  try {
    const count = await Quiz.countDocuments();
    res.json({ quizAttempts: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 Feedback submitted
router.get("/feedback", verifyToken, isAdmin, async (req, res) => {
  try {
    const count = await Feedback.countDocuments();
    res.json({ feedbackCount: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

<<<<<<< HEAD
module.exports = router;
=======
export default router;
>>>>>>> origin/main
