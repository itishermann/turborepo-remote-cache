import * as serverBuild from '@remix-run/dev/server-build';
import { createRequestHandler } from '@remix-run/express';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(compression());

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable('x-powered-by');

// Remix fingerprints its assets so we can cache forever.
app.use('/build', express.static('public/build', { immutable: true, maxAge: '1y' }));

// Everything else (like favicon.ico) is cached for an hour. You may want to be
// more aggressive with this caching.
app.use(express.static('public', { maxAge: '1h' }));

app.use(morgan('tiny'));

app.all(
  '*',
  createRequestHandler({
    build: serverBuild,
    mode: process.env.NODE_ENV,
  }),
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
