'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const SendMail = require('./public/modules/placeOrder');
// Create Express app
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


let useSSL = false;
const local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}


const email = SendMail(nodemailer);
app.use(express.static('public'));

app.post('/placeOrder', (req, res) => {
    email.send(
        req.body.mail,
        req.body.message,
        req.body.customRadio,
        req.body.cel,
        req.body.firstName,
        req.body.lastName);
    res.send("Your order has been placed thank you we will contact you as soon as possible to confirm your order")
});

const PORT = process.env.PORT || 3000;


// Start the Express server
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`))