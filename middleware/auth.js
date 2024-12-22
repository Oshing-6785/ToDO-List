const jwt = require("jsonwebtoken");
require("dotenv").config();
const authMiddleware = (req, resp, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return resp.status(401).json({ error: "Access denied. No token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    resp.status(400).json({ error: "Invalid token." });
  }
};

module.exports = authMiddleware;
