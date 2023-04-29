const { Comment } = require("../../../db");
//Para ver todas las reseñas que tiene un package
const getCommentsByPackageId = async (packageId) => {
    const commentsPack = await Comment.findAll({where: {packageId}})
    const allCommentPack = commentsPack.map(e => e.dataValues)
    return allCommentPack;
}

module.exports = { getCommentsByPackageId };