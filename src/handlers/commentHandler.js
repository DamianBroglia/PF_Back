const { getAllComments } = require("../controllers/users/coments/getAllComment");
const { postComment } = require("../controllers/users/coments/postComment");
const { deleteComment } = require("../controllers/users/coments/deleteComment");
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
        const {userName, rating, comment, date, packageId, hotelId, restaurantId, activityId, userId } = req.body;
        const newComment = await postComment(userName, rating, comment, date, packageId, hotelId, restaurantId, activityId, userId );
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


const getCommentByUserIdHandler = async (req, res) => {
    try {
        const { userId } = req.params;
        const commentUser = await getCommentsByUserId(userId);
        res.status(200).json(commentUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    getACommentsHandler,
    postCommentHandler,
    deleteCommentHandler,
    getCommentByUserIdHandler,
};