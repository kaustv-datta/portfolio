const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

const port = 3000;

app.use(express.json());

app.post("/sendMail", async function (req, res) {
  const { email, message } = req.body;
  const date = new Date();

  let transporter = nodemailer.createTransport({
    sendmail: true,
    newline: "unix",
    path: "/usr/sbin/sendmail",
  });

  transporter.sendMail(
    {
      from: email,
      to: "info@codegranny.com",
      subject: "CodeGranny Enquiry: " + date,
      text: message,
    },
    (err, info) => {
      if (err) {
        res.json({
          success: false,
          error: err,
        });
      } else {
        res.json({
          success: true,
        });
      }
    }
  );
});

app.listen(port, () =>
  console.log(`Node app listening at https://localhost:${port}`)
);
