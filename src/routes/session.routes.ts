import { Router } from 'express';
import { sessionController } from '../controllers/session/session.controller';

const sessionRouter = Router();

sessionRouter.post("", sessionController)

export default sessionRouter