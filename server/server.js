const express = require('express');
const process = require('dotenv').config();
const articlesRouter = require('./routers/articleRouters.js');

const {connectDb} = require('./config/dbConnection.js');
connectDb();
const app = express();
const port = 8000;
app.use('/api/articles', articlesRouter);

app.listen(port, () => {
    console.log(`listening on port ${port} `);
});
