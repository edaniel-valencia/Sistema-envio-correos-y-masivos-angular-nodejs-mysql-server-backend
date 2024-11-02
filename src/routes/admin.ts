import { Router } from "express";
import { Auth } from "../controllers/admin";


const router = Router();

router.post('/api/admin/auth', Auth);


export default router