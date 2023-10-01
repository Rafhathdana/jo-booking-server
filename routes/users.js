import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updatedUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();
// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello user,you are logged in")
// });
// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello user, you are logged in and you can delete you account")
// });
// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello user, you are logged in and you can delete all account")
// });
//update
router.put("/:id", verifyUser, updatedUser);
//delete
router.delete("/:id", verifyUser, deleteUser);
//get
router.get("/:id", verifyUser, getUser);
//getall
router.get("/", verifyAdmin, getUsers);
export default router;
