import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 3002;

app.use(cors());

app.get('/', async (req, res) => {
  const response = await fetch('https://fruityvice.com/api/fruit/all');
  res.json(await response.json());
});

app.get(`/showd/${fruitName}`, async (req, res) => {
  const response = await fetch(`https://fruityvice.com/api/fruit/${fruitName}`);
  res.json(await response.json());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
