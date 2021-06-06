const functions = require("firebase-functions");
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'favoritesfabfa@gmail.com',
    pass:'a123b456!'
  }
});


exports.sendContactMessage = functions.auth.user().onCreate(user => {
  const {email} = user;
  let message = `<h3 style="color: #9C27B0">Hello Dir ${user.displayName}!!</h3> <br>
                Please SUbscribe My Channel!
                `
  const mailOptions = {
    from: `favoritesfabfa@gmail.com`,
    to: email,
    subject: 'Thank you for watching',
    html: message
  };

  return transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      console.log(error)
      return
    }
    console.log("EMAIL Sent!")
  });
})



