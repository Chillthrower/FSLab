const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); 

app.get('/', (_, res) => res.json({ message: "Hello, World!" }));
app.listen(5000);
