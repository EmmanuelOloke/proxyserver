import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
  const response = await fetch('https://fruityvice.com/api/fruit/all');
  res.json(await response.json());
});

app.listen(3002, () => {
  console.log('listening on port 3002');
});
