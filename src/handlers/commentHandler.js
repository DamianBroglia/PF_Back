const { getAllComments } = require("../controllers/users/coments/getComment");
const { postComment } = require("../controllers/users/coments/postComment");
const { deleteComment } = require("../controllers/users/coments/deleteComment");

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
        const { userId, userName, rating, comment, date } = req.body;
        const newComment = await postComment(userId, userName, rating, comment, date);
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

module.exports = {
    getACommentsHandler,
    postCommentHandler,
    deleteCommentHandler
};