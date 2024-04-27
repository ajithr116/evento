import express from 'express';
import adminLogin from '../../controllers/admin/adminLogin.mjs';
import sample from '../../controllers/admin/adminLogin.mjs'


const router = express.Router();

router
  .get('/login', adminLogin)
  .post('/sample', sample);

export default router;
