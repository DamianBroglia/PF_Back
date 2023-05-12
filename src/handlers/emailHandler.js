// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true, 
//     auth: {
//         user: process.env.MAILER_USER,
//         pass: process.env.MAILER_PASSWORD 
//     },
// });

// transporter.verify().then(() => {
//     console.log("ready for sending emails");
// });

// const sendMailToUs = async (req, res) => {
//     try {
//         const {from, content} = req.body;
//         const info = await transporter.sendMail({
//             from: `${from} <foo@example.com>`,
//             to: "lucasguere@hotmail.com",
//             subject: "Feedback",
//             html: `<b>${content}</b>`,
//         });
//         res.status(200).json(info);
//     } catch (error) {
//         res.status(400).json({error: error.message});
//     }
// }

// const sendMailFromAdmin = async (req, res) => {
//     try {
//         const {to, title, content, link, img} = req.body;
//         const html = `
//             <b>${content}</b>
//             <br/>
//             <a href=${link}>${link}</a>
//         `
//         const info = await transporter.sendMail({
//             from: `Patagonia Horizons <gurennnn@gmail.com>`,
//             to: to,
//             subject: title,
//             html: html,
//         });
//         if (info.rejected.length) {
//             res.status(300).json({
//                 message: "los siguientes destinatarios no recibieron el mensaje",
//                 data: info.rejected
//             })
//         } else if (!info.rejected.length){
//             res.status(200).json({data: info.accepted});
//         }
//     } catch (error) {
//         res.status(400).json({error: error.message});
//     }
// }

// module.exports = {
//     sendMailToUs,
//     sendMailFromAdmin
// }
