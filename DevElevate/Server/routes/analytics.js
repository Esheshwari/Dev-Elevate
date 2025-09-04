import express from "express";
import { verifyToken, isAdmin } from "../middleware/authMiddleware.js";
import User from "../models/User.js";
import Session from "../models/Session.js";
import Module from "../models/Module.js";
import Quiz from "../models/Quiz.js";
import Feedback from "../models/Feedback.js";

const router = express.Router();

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
    // TODO: implement logic for active users
    res.json({ activeUsers: 0 });
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

export default router;


