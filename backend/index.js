const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to DoTube backend!');
});

app.listen(PORT, () => {
  console.log(`DoTube backend running on port ${PORT}`);
});