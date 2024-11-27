require('dotenv').config();
const express = require("express");
const rootRouter = require("./routes/index")
const cors = require("cors");
const bodyParser = require("body-parser")
const PORT = 3000;

const app = express();

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:3000', // Adjust this to the origin(s) you want to allow
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
};

app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
app.use('/api/v1', rootRouter);

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})

