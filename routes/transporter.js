const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
    secure: true,
  auth: {
    // user: 'beatrice85@ethereal.email',
    user: 'olawuni.michael@gmail.com',
    pass: 'jesus4all'
    // pass: 'xxBE3X61f5quj3eckA'
  },
  // tls: {
  //   rejectUnauthorized: false,
  // },
});

module.exports = transporter;
