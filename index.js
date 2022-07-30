import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Tree Grid Data Structure');
});

app.listen(process.env.PORT, () =>
  console.log(`Tree Grid App listening on port ${process.env.PORT}!`),
);