const { Comment } = require("../../../db");

const postComment = async (userName, rating, comment, date, packageId, hotelId, restaurantId, activityId, userId,) => {
    //No hago un condicionante para userName porque desde el front lo envia desde el estado "user"
    if (rating !== "1" && rating !== "2" && rating !== "3" && rating !== "4" && rating !== "5") {
        throw new Error("El puntaje debe ser un numero entre 1 y 5")
    }
    if (typeof comment !== "string" || comment.length < 4) {
        throw new Error("Debes escribir una reseña del lugar")
    }
    if (userId && userName && rating && comment && date) {
        const postComment = await Comment.create({ userName, rating, comment, date, packageId, hotelId, restaurantId, activityId, userId })
        return postComment;
    }
    throw new Error("Faltan Parametros para postear un comentario")
}

module.exports = { postComment };

