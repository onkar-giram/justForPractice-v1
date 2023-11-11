const express = require("express");
const router = express.Router();

const { login, signup } = require("../controllers/AuthController");
const { auth, isStudent, isTeacher } = require("../middlewares/AuthMiddleware");

router.post("/login", login);
router.post("/signup", signup);

//Protected Route
router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "welcome to the protected route for students",
  });
});

router.get("/admin", auth, isTeacher, (req, res) => {
  res.json({
    success: true,
    message: "welcome to the protected route for admins",
  });
});

module.exports = router;
