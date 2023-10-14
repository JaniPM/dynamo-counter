import express, { Express, Request } from 'express';
import cors from 'cors';
import counterRoutes from './counter/counter-routes';
import authRoutes from './auth/auth-routes';

const app: Express = express();
app.use(express.json());
app.options(
  '*',
  cors<Request>({
    optionsSuccessStatus: 200,
  }),
);
app.use(cors());

// Setup routes
app.use('/', authRoutes);
app.use('/counters', counterRoutes);

app.listen(4000, () => console.log('Server running'));
