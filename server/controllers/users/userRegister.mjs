import bcrypt from 'bcrypt';
import User from '../../models/users.mjs';

const userRegister = async(req,res) => {
    const { firstName, lastName, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let user = await User.findOne({ email: email });

    if (user) {
        return res.status(400).json({ message: 'User already exists' });
    } else {
        try {
            user = new User({
                firstName,
                lastName,
                email,
                password: hashedPassword, 
            });
            await user.save();
            console.log({ message: 'Signup successful' });
            return res.status(200).json({ message: 'Signup successful' });

        }
        catch(err){
            console.error('An error occurred:', err);
            return res.status(500).json({ message: 'Server error' });
        }
    }
} 

export default userRegister;
