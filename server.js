require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express(); // ✅ FIRST create app

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/userRouter"));     // auth routes
app.use("/api/payment", require("./routes/paymentRouter")); // payment routes

// Test route
app.get("/", (req, res) => {
    res.send("API Running");
});

const PORT = process.env.PORT || 3000;

// Start server AFTER DB connects
const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error("Server error:", err);
    }
};

start();