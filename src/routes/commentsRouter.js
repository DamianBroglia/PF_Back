const { Router } = require("express");
const { 
    getACommentsHandler,
    postCommentHandler,
    deleteCommentHandler
} = require("../handlers/commentHandler");

const commentsRouter = Router();

commentsRouter.post("/", postCommentHandler);

commentsRouter.get("/", getACommentsHandler);

commentsRouter.delete("/:userId/:id", deleteCommentHandler)

module.exports = commentsRouter;