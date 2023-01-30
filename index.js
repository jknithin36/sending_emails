const Sib = require("sib-api-v3-sdk");
require("dotenv").config();
const client = Sib.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.API_KEY;

const tranEmailApi = new Sib.TransactionalEmailsApi();
const sender = {
  email: "jknithin6029@gmail.com",
  name: "Nithin",
};
const receivers = [
  {
    email: "jknithin36@gmail.com",
  },
];

tranEmailApi
  .sendTransacEmail({
    sender,
    to: receivers,
    subject: "Subscribe to Cules Coding to become a developer",
    textContent: "jk nithin kumar",
  })
  .then(console.log)
  .catch(console.log);

//email -acmpimg
