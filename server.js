const express = require('express');
const mailgun = require('mailgun-js');
const app = express();
const port = process.env.PORT || 5173;

const DOMAIN = process.env.DOMAIN;
const mg = mailgun({apiKey: process.env.API_KEY, domain: DOMAIN});

app.use(express.json());

app.post('/send-email', (req, res) => {
    const { email, firstname, lastname } = req.body;

    const data = {
        from: 'Mailgun Sandbox <postmaster@sandbox3d8f1807e3f24bf683d1c309501b78d0.mailgun.org>',
        to: email,
        subject: `Hello ${firstname} ${lastname}`,
        text: 'This is a test email from Mailgun'
    };

    mg.messages().send(data, (error, body) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to send email' });
        } else {
            console.log(body);
            res.json({ message: 'Email sent' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});