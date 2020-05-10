import http, { RequestListener } from 'http';

const port = process.env.PORT ?? 8000;

const requestListener: RequestListener = (_request, response) => {
  response.writeHead(200, {
    'content-type': 'application/json',
  });

  response.end(JSON.stringify({
    status: 'ok',
    message: 'OK',
    data: {},
  }));
};

const server = http.createServer(requestListener);

server.listen(port, () => console.log(`Listening on http://localhost:${port}`));
