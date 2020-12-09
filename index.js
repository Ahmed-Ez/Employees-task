const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const employeeRouter = require('./routes/employeeRouter');
connectDB();
app.use(express.json());
app.use('/', employeeRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
