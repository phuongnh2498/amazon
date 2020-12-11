const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HwrqYHtfvuHyk2aXRlFGEEFMwKtc0KClR77v1kfQSzeZ3ZZuKxvzjYEPN6jdApjFovfR3uyIdzITt9P2r50WxEo007B2vs7Jg')

const app = express()

app.use(cors({ origin: true }));
app.use(express.json())


app.get('/', (request, response) => response.status(200).send('hello'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total

    console.log('Payment Done!! ', total)

    const paymentItent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
        payment_method_types: ['card'],
    })

    response.status(201).send({
        clientSecret: paymentItent.client_secret
    })
})
exports.api = functions.https.onRequest(app)