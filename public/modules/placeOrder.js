module.exports = (nodemailer) => {

    let status = "";

    const send = (email, text, product, number, firstName, lastName) => {
        console.log("swag transporter");
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'graham.shanahan69@ethereal.email',
                pass: '8N6ffEV5mehE4FkZGt'
            }
        });

        var mailOptions = {
            from: email,
            to: 'graham.shanahan69@ethereal.email',
            subject: firstName + ' ' + lastName + ' Ordered ' + product,
            text: text + '\n' + 'contact number: ' + number
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