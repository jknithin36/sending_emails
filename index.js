//SINGLE_EMAIL
var SibApiV3Sdk = require("sib-api-v3-sdk");
require("dotenv").config();
SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
  process.env.API_KEY;
new SibApiV3Sdk.TransactionalEmailsApi()
  .sendTransacEmail({
    subject: "Hello from the Node SDK!",
    sender: { email: "jknithin9332@gmail.com", name: "Sendinblue" },
    replyTo: { email: "jknithin9332@gmail.com", name: "JK" },
    to: [{ name: "John Doe", email: "jknithin6029@gmail.com" }],
    htmlContent:
      "<html><body><h1>This is a transactional email {{params.bodyMessage}}</h1></body></html>",
    params: { bodyMessage: "Made just for you!" },
  })
  .then(
    function (data) {
      console.log(data);
    },
    function (error) {
      console.error(error);
    }
  );
