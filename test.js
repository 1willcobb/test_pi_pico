const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.post('/receive_count', (req, res) => {
  const count = req.body.count;
  console.log('Received count:', count);
  res.json({ status: 'success', received: count });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


