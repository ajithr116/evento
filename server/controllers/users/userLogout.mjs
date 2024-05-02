import express from 'express'; 
const app = express();
let tokenBlacklist = [];

app.use((req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]; // Extract the token from the Authorization header

  if (tokenBlacklist.includes(token)) {
    return res.status(401).json({ message: 'Token is blacklisted' });
  }
  // Verify the token and continue with your existing authentication logic...
  next();
});

const userLogout = (req, res) => {
  const token = req.headers.authorization.split(' ')[1]; // Extract the token from the Authorization header
  console.log("reached 6 " + token);
  tokenBlacklist.push(token); // Add the token to the blacklist
  console.log("reached 7 " + token);
  res.json({ message: 'Logout successful' });
};

export default userLogout;
