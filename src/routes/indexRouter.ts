import { skillControllers } from "../controllers/skills.controller";
import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import skillSchema from "../schemas/skillSchema";


const router = Router();

router.post('/skills', validateSchema(skillSchema), skillControllers.postSkill );
router.get('/skills', skillControllers.getSkills);

export default router;