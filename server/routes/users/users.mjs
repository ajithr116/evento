import express from 'express';
import userRegister from '../../controllers/users/userRegister.mjs';
import userLogin from '../../controllers/users/userLogin.mjs';
import userLogout from '../../controllers/users/userLogout.mjs';

const router = express.Router();

router.post('/signup', userRegister);
router.post('/login',userLogin);
router.post('/logout', userLogout);

export default router;