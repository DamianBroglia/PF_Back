const { Comment } = require("../../../db");
//Para ver todas las reseñas que tiene un package
const getCommentsByPackageId = async (packageId) => {
    const comments = await Comment.findAll({where: {packageId}})
    const allComment = comments.map(e => e.dataValues)
    return allComment;
}

module.exports = { getCommentsByPackageId };