import { Router } from "express";
import { createApplication, deleteApplication, getApplication, getApplications, updateApplication } from "../controllers/application.controller.js";
import { validateToken } from "../middlewares/validateToke.js";
import validateSchema from "../middlewares/validateSchema.js";
import { createApplicationZ } from "../schemas/application.schema.js";
//
// This are tthe routes to do req and res
// and as well i using a little security 
// the first to validate the token and then zod to verify the 
// is valid
//
const router = Router();

router.get("/applications",validateToken,getApplications);
router.get("/application/:id",validateToken,getApplication);
router.post("/application",validateToken,validateSchema(createApplicationZ),createApplication);
router.put("/application/:id",validateToken,updateApplication);
router.delete("/application/:id",validateToken,deleteApplication);

export default router