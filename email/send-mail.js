const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('SG.IpfwLBsiQI-tK1-H1UUvPQ.CGo4RozJGX8z-X7zSURK7wBXX22coR1j6SFs-167EXQ');
const msg = {
  to: 'cherokeedreemer@gmail.com',
  from: 'cherokeedreemer@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);


//
// exports.handler = async (event, context) => {
//   let statusCode = "200";
//
//   if (event.httpMethod === "POST"){
//     const sgMail = require("@sendgrid/mail");
//     sgMail.setApiKey("SG.IpfwLBsiQI-tK1-H1UUvPQ.CGo4RozJGX8z-X7zSURK7wBXX22coR1j6SFs-167EXQ")
//
//     const { email, message } = JSON.parse(event.body)
//
//     try {
//       await sgMail.send({
//         from: "chreokeedreemer@gmail.com",
//         to: "cherokeedreemer@gmail.com",
//         reply_to: email,
//         subject: "Inbound message from jared-matta.web.app",
//         text: message,
//       })
//     } catch (err) {
//       statusCode = "500";
//     }
//   }
//
//   return {
//     statusCode,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Headers": "Content-Type",
//       "Access-Control-Allow-Methods": "OPTIONS,POST"
//     },
//   };
// };
