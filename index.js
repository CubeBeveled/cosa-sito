const express = require('express');
const server = express();

startServer(3000, "./index.html")

function startServer(port, filename) {
  server.listen(port, () => { console.log('\x1b[32m', `Server is running on port ${port}`) });

  server.use(express.static(__dirname));

  server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, filename));
  })

  server.use((req, res, next) => {
    console.log(`Received a ${req.method} request for ${req.url}`);
    next();
  });
}