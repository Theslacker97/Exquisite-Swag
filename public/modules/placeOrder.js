module.exports = (nodemailer) => {

    let status = "";

    const send = () => {
        console.log("email transporter");

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'graham.shanahan69@ethereal.email',
                pass: '8N6ffEV5mehE4FkZGt'
            }
        });

        var mailOptions = {
            from: 'sbudiction@gmail.com',
            to: 'graham.shanahan69@ethereal.email',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                status = 'Email sent: ' + info.response;
            }
        });
    }

    const getStatus = () => status;

    return {
        send,
        getStatus

    }
}