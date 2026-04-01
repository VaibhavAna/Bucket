const Razorpay = require("razorpay");

const razorpay = new Razorpay({
    key_id: "YOUR_KEY",
    key_secret: "YOUR_SECRET",
});

exports.createOrder = async (req, res) => {
    try {
        const options = {
            amount: req.body.amount * 100,
            currency: "INR",
        };

        const order = await razorpay.orders.create(options);
        res.json(order);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};