import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const nodemailer = require("nodemailer");

admin.initializeApp();
require('dotenv').config();

const { SENDER_EMAIL, SENDER_PASSWORD } = process.env;

export const sendConfirmEmail = functions.database.ref('orders/{orderId}')
.onCreate((snapshot, context) => {

    const data = snapshot.val();
    const orderId = context.params.orderId;

    const authData = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: SENDER_EMAIL,
            pass: SENDER_PASSWORD
        }
    });

    let name = data.firstName;
 
    authData.sendMail({
        from: 'Eat Sleep Burger <eatsleepburgermambog@gmail.com>',
        to: data.email,
        subject: 'Order Confirmation',
        html: `
            <h1>Thank you for your order!</h1>
            <p>Hi ${name}, <br><br> 
            Just to let you know — we've received your order "${orderId}", and it is now being processed:
            <br><br>
            Pay with cash upon delivery.</p>
        `
    }).then((res: any) => console.log("Successfully sent email.")).catch((err: any) => console.log(err));
});
    


