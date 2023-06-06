import { Router } from "express";
import { getDataSendController } from "../controllers/getControllers";

const router = Router();

router.post('/getblock', getDataSendController);

export default router;
