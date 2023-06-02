import { Router } from "express";
import { dataSendController } from "../controllers/getControllers";

const router = Router();

router.post('/save', dataSendController);

export default router;
