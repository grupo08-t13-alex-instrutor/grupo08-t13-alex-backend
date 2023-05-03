import { Router } from 'express';
import createCommentController from '../controllers/comments/createComment.controller';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import listCommentsAnAdsController from '../controllers/comments/listCommentsAnAds.controler';
import patchCommentsAnAdsController from '../controllers/comments/patchCommentsAnAds.controller';
import deleteCommentsAnAdsController from '../controllers/comments/deleteCommentsAnAds.controller';


const commentsRouter = Router()

commentsRouter.post("/:idAds", ensureAuthMiddleware, createCommentController)
commentsRouter.get("/:idAds", listCommentsAnAdsController)

commentsRouter.patch("/:commentId", ensureAuthMiddleware, patchCommentsAnAdsController)
commentsRouter.delete("/:commentId", ensureAuthMiddleware, deleteCommentsAnAdsController)


export default commentsRouter