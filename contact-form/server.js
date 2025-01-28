const express = require('express');
const app = express();
const path = require('path');


const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.static('public'));
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contactform.html'));
});


app.post('/send-mail', (req, res) => {
    console.log(req.body);
    let json = JSON.stringify({ "data": req.query.message });
    res.send(json);
    res.send('Data received');
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});