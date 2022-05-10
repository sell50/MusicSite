const path = require('path');
const express = require("express");

//////////////////////////////////////////////////

const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

////////////////////////////////////////////////////

const PORT = process.env.PORT || 3001;

/////////////////////////////////////////////////

const app = express();
app.use(cors());
app.listen(5000, () => console.log("Server Running"));

//////////////////////////////////////////////////

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use("/", router);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

////////////////////////////////////////////////////////////////

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "katappdev@gmail.com",
    pass: "ThisDevEmail369!",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "katappdev@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});