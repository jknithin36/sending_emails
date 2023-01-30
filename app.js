//BULK_EMAIL

var SibApiV3Sdk = require("sib-api-v3-sdk");
require("dotenv").config();
SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
  process.env.API_KEY;

new SibApiV3Sdk.TransactionalEmailsApi()
  .sendTransacEmail({
    // SENDER_EMAIL
    sender: { email: "jknithin9332@gmail.com", name: "Sendinblue" },
    subject: "This is my default subject line",
    templateId: 27,
    params: {
      greeting: "This is the default greeting",
      headline: "This is the default headline",
    },
    messageVersions: [
      //Definition for Message Version 1
      //TO WHOM WE ARE SENDING
      {
        to: [
          {
            email: "jknithin6029@gmail.com",
            name: "Bob Anderson",
          },
          {
            email: "jknithin36@gmail.com",
            name: "Anne Smith",
          },
        ],
        params: {
          greeting: "Hello again!",
          headline: "Take advantage of our summer deals, taylored just for you",
        },
        subject: "Some deals worth to be looked at!",
      },

      //Definition for Message Version 2
      //SEND OTHER MESSAGES TO ANOTHER ONE
      {
        to: [
          {
            email: "nithin.19bcn7060@vitap.ac.in",
            name: "Marie Delvaux",
          },
        ],
        params: {
          greeting:
            "Hello Marie, we have prepared some exclusive summer deals for you.",
          headline: "Some bathing suits you might like",
        },
        subject: "Marie, new bathing suits are here.",
      },
    ],
  })
  .then(
    function (data) {
      console.log(data);
    },
    function (error) {
      console.error(error);
    }
  );
