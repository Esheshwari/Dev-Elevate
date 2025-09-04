// routes/adminRoutes.js
import express from "express";
import { 
  addUser,
  createAdminLog, 
  deleteUserById, 
  getAdminLogs,
  getAllUserRegister
} from "../controller/adminController.js";
import { authenticateToken, requireAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Create a system log
router.post("/system-log", authenticateToken, requireAdmin, createAdminLog);

// ✅ Get all system logs
router.get("/system-logs", authenticateToken, requireAdmin, getAdminLogs);

// ✅ Add a new user
router.post("/add-user", authenticateToken, requireAdmin, addUser);

// ✅ Get all registered users
router.get("/all-users", authenticateToken, requireAdmin, getAllUserRegister);

// ✅ Delete user by ID (better to pass ID in URL param)
router.delete("/delete-user/:id", authenticateToken, requireAdmin, deleteUserById);

export default router;

