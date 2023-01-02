const ws = require('ws');

const PORT = 8082;
const wss = new ws.Server({port: PORT});

wss.on('connection', (connection) => {
  connection.on('message', (data) => {
    wss.clients.forEach((client) => {
      client.send(`${data}`);
    });
  });
});

module.exports = wss;
