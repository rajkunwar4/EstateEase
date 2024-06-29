import express from 'express'
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/user.controller.js';

const router= express.Router();

router.get("/hello",getAllUsers)
router.get("/:id",getUser);
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)



export default router;