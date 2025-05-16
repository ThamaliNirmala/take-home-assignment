const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRE } = process.env;

// Middleware to protect routes
const authMiddleware = (req, res, next) => {
  // Get token from the Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token missing or malformed" });
  }

  const token = authHeader.split("Bearer ")[1];

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach user info to the request
    req.user = decoded;

    // Continue to next middleware or route
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token", error: error.message });
  }
};

// Function to generate a JWT token
const generateJWTToken = (user) =>
  jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRE}
  );

module.exports = {
  authMiddleware,
  generateJWTToken
};
