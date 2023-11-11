//auth, isAdmin, isStudent
const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  try {
    //extract JWT token
    const token = req.body.token;

    if (!token) {
      return res.json({
        success: false,
        message: "Token Missing ",
      });
    }

    //verify the token
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload;
    } catch (err) {
      res.status(401).json({
        success: false,
        message: "Token is Invalid",
      });
    }

    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong while verifying the user",
    });
  }
};

exports.isStudent = (req, res, next) => {
  try {
    if (req.user.role !== "student") {
      return res.json({
        success: false,
        message: "This is a proctected route for student",
      });
    }
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: " User role is not matching ",
    });
  }
};

exports.isTeacher = (req, res, next) => {
  try {
    if (req.user.role !== "teacher") {
      return res.json({
        success: false,
        message: "This is a proctected route for teacher",
      });
    }
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: " User role is not matching ",
    });
  }
};
