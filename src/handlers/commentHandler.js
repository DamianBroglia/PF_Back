const { getAllComments } = require("../controllers/users/coments/getAllComment");
const { postComment } = require("../controllers/users/coments/postComment");
const { deleteComment } = require("../controllers/users/coments/deleteComment");
const { getCommentsByPackageId } = require("../controllers/users/coments/getCommentByPackageId");
const { getCommentsByUserId } = require("../controllers/users/coments/getCommentByUserId");

const getACommentsHandler = async (req, res) => {
    try {
        const allComments = await getAllComments();
        res.status(200).json(allComments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const postCommentHandler = async (req, res) => {
    try {
        const { packageId, userId, userName, rating, comment, date } = req.body;
        const newComment = await postComment(packageId, userId, userName, rating, comment, date);
        res.status(200).json(newComment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteCommentHandler = async (req, res) => {
    try {
        const { userId, id } = req.params;
        const delComment = await deleteComment(userId, id);
        res.status(200).json(delComment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getCommentByPackageIdHandler = async (req, res) => {
    try {
        const { packageId } = req.params;
        const CommentPack = await getCommentsByPackageId(packageId);
        res.status(200).json(CommentPack);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getCommentByUserIdHandler = async (req, res) => {
    try {
        const { UserId } = req.params;
        const CommentUser = await getCommentsByUserId(UserId);
        res.status(200).json(CommentUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getACommentsHandler,
    postCommentHandler,
    deleteCommentHandler,
    getCommentByPackageIdHandler,
    getCommentByUserIdHandler
};