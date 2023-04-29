const { Comment } = require("../../../db");

const getAllComments = async () => {
    const comments = await Comment.findAll()
    const allComment = comments.map(e => e.dataValues)
    return allComment;
}

module.exports = { getAllComments };