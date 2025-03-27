// Import Stripe library with secret key
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// Import the info model for database interaction
const infomodel = require('../model/infoModel')

// Function to store payment information in the database
async function storedb(ss) {
    console.log(ss)
    await infomodel.create(ss)
        .then(users => console.log("Data created Successfully"))
        .catch(err => console.log(err.message))
}

// Function to handle checkout process
async function checkout(req, res) {
    const list = req.body
    // console.log(list)

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
        line_items: list,
        mode: 'payment',
        phone_number_collection: {
            enabled: true
        },
        shipping_address_collection: {
            allowed_countries: ['US', 'BR', 'IN']
        },
        success_url: `${process.env.BASE_URL}/complete?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.BASE_URL}/cancel`
    })
    res.json({
        url: session.url
    })
}

// Function to handle payment completion
async function complete(req, res) {
    const result = Promise.all([
        stripe.checkout.sessions.retrieve(req.query.session_id, { expand: ['payment_intent.payment_method'] }),
        stripe.checkout.sessions.listLineItems(req.query.session_id)
    ]);
    const response2 = await result;
    // console.log(response2[0].collected_information.shipping_details.name);

    // Extract necessary information from the response
    const { name } = response2[0].collected_information.shipping_details;
    const { email } = response2[0].customer_details;
    const { city, state, country, postal_code } = response2[0].collected_information.shipping_details.address;
    const { id, amount } = response2[0].payment_intent;
    const date = new Date();
    const items = response2[1].data.map(a => a.description);

    // Store the extracted information in the database
    storedb({ name, email, address: { city, state, country, postal_code }, payment: id, amount, date, items });

    // Send an HTML response with a success message and redirect script
    res.send(`
        <html>
            <head>
                <title>Payment Successful</title>
                <script>

                    // Redirect to the home page (frontend) after 2 seconds
                    setTimeout(function() {
                        window.location.href = 'http://localhost:5173/';
                    }, 2000);
                </script>
            </head>
            <body>
                <h1>Payment Successful!</h1>
                <p>Your payment was processed successfully. You will be redirected to the home page shortly...</p>
            </body>
        </html>
    `);
}

// Export the controller functions
module.exports = { checkout, complete }
