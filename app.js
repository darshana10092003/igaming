const express = require('express');
const app = express();

app.use(express.json());

// auth routes
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

// wallet routes
const walletRoutes = require("./routes/walletRoutes");
app.use("/wallet", walletRoutes);

// placebet routes
const placebetRoutes = require("./routes/placebetRoutes");
app.use("/placebet", placebetRoutes);

// settlement routes
const settlementRoutes = require("./routes/settlementRoutes");
app.use("/settlement", settlementRoutes);

module.exports = app;