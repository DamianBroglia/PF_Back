const {Router} = require("express");
const { 
    sendMailToUs,
    sendMailFromAdmin,
    confirmReservation,
} = require("../handlers/emailHandler");

const mailRouter = Router();


mailRouter.post("/", sendMailToUs);

mailRouter.post("/admin" , sendMailFromAdmin);

mailRouter.post("/confirmation", confirmReservation);

module.exports = mailRouter;
