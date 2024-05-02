import bcrypt from 'bcrypt';
import User from '../../models/users.mjs';
import jwt from 'jsonwebtoken';

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log("email " + email + " password " + password); // Log email and password for debugging
  
  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.log("users email exist");
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("password not match");
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    console.log("Good");
    return res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default userLogin;