var nmail = require('nodemailer');
var senderEmail = 'sarif.onwork@gmail.com';
var senderPass = 'superman007';
var toEmail = 'shidayat007@gmail.com';

var transporter = nmail.createTransport({
    service: 'gmail',
    auth: {
      user: senderEmail,
      pass: senderPass
    }
  });

  var mailOpt = {
    from: senderEmail,
    to: toEmail,
    
    subject: 'Email Test',
    text: 'PT Econusa InterAktiv Indonesia Node Js Email Test'
  };


  transporter.sendMail(mailOpt, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });