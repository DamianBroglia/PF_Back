const { Comment } = require("../../../db");

const deleteComment = async (userId, id) => {
    const findComment = await Comment.findByPk(id)
    if (findComment.userId === Number(userId)) {
        findComment.destroy()
        return findComment;
    } else {
        throw new Error("Solo puedes eliminar tus reseñas")
    }
}

module.exports = { deleteComment };