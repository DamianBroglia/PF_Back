const { Comment } = require("../../../db");
 //Para ver todas las reseñas que hizo un usuario
const getCommentsByUserId = async (userId) => {
    const comments = await Comment.findAll({where: {userId}}) 
    const allCommentUser = comments.map(e => e.dataValues)
    return allCommentUser;
}
module.exports = { getCommentsByUserId };