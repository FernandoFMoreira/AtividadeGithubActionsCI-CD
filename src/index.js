const express = require('express');
const dotenv = require('dotenv');
const path = require('node:path');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, 'calculator')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'calculator/index.html'));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});