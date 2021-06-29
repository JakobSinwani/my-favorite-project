const functions = require("firebase-functions");
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: functions.config().auth.email,
    pass: functions.config().auth.pass
  }
});



exports.sendMail = functions.auth.user().onCreate(user => {
  const {email} = user;
  let message = `<h3 style="color: #9C27B0">Hello Dear ${user.displayName}!!</h3> <br>
                Please SUbscribe My Channel!
                `

  const mailOptions = {
    from: functions.config().auth.email,
    to: email,
    subject: 'Thank you for watching',
    html: message
  };

  return transporter.sendMail(mailOptions, (error, data)=> {
    console.log('CONFIG!!!!!!!!!!!!!!!!!!!!!!!!!', functions.config().auth)
    if (error) {
      console.log(error)

      return
    }
    console.log("EMAIL Sent!")
  })
})


exports.nofar = functions.firestore.document('folders/{uid}/userFolder/{folderId}')
  .onCreate((snap, context) => {
    const {uid, folderId} = context.params;

    admin.firestore().collection('Users').doc(uid).collection('myFolders').doc(folderId)
      .set(snap.data())
      .then(()=> console.log('SUCEESSS!!!'))
      .catch(e => console.error(e.message));
  })

