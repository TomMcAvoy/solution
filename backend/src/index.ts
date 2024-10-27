import express from 'express';
import debug from 'debug';

const app = express();
const port = 3000;
const log = debug('app:server');

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  log(`Server is running at http://localhost:${port}`);
});
