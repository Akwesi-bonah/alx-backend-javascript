import express from 'express';
import linkRoutes from './routes';

const app = express();
const PORT = 1245;

linkRoutes(app);
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});

export default app;
module.exports = app;
