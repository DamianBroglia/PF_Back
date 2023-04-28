const { Router } = require("express");
const { 
    getACommentsHandler,
    postCommentHandler,
    deleteCommentHandler,
    getCommentByPackageIdHandler,
    getCommentByUserIdHandler
} = require("../handlers/commentHandler");

const commentsRouter = Router();

commentsRouter.post("/", postCommentHandler);

commentsRouter.get("/", getACommentsHandler);

commentsRouter.get("/:userId", getCommentByUserIdHandler);

commentsRouter.get("/:packageId", getCommentByPackageIdHandler);

commentsRouter.delete("/:userId/:id", deleteCommentHandler)

module.exports = commentsRouter;