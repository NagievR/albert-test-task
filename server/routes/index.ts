import { Router } from "express";
import peopleRouter from "./peopleRoute";

const rootRouter: Router = Router();

rootRouter.use('/people', peopleRouter);

export default rootRouter;
