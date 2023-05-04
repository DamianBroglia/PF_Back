
const promRating = (arrayComments) => {
    let totalRating = 0;
    let ratingQuantity = 0;
    arrayComments.forEach(el => {
        totalRating = totalRating + Number(el.rating)
        ratingQuantity = ratingQuantity + 1
    });

    return totalRating / ratingQuantity
}
module.exports = { promRating }