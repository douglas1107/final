const fs=require('fs');
const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());


app.get('/', (req, res) => {
    let page=fs.readFileSync('../client/index.html', 'utf8');
    res.send(page);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
