import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/api/v1/entries', (req, res) => {
  res.send('coming soon...');
});

app.get('/api/v1/entries/:id', (req, res) => {
  res.send(req.params.id);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`));
