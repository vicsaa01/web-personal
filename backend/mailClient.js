const FormData = require('form-data');
const Mailgun = require('mailgun.js');

const express = require('express')
const cors = require('cors')

// Setup Mailgun client

const mailgun = new Mailgun(FormData);
const client = mailgun.client({username: 'api', key: ''}) // DON'T PASTE KEY, USE ENV

// Run Express app

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});

// API route

app.post('/send-mail', (req, res) => {
    client.messages.create('sandboxfd7f3d0135d247ce889bc2867e327ec8.mailgun.org', {
        from: "postmaster@sandboxfd7f3d0135d247ce889bc2867e327ec8.mailgun.org",
        to: ["victorsaakes@gmail.com"],
        subject: 'Message from ' + req.body.name,
        text: "New message",
        html: '<div><p>Name: ' + req.body.name + '</p><br/><p>Email: ' + req.body.email + '</p><br/><p>Message: ' + req.body.message + '</p></div>'
    })
    .then(m => res.status(201).json(m))
    .catch(e => console.log('Error:', e))
})