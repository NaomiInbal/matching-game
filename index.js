const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('.', express.static('maomi')));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/app.html'))
})
app.listen( process.env.PORT || 3001);