const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

function wildcardRoute(req, res, next) {
  const text = `url: ${req.url}, originalUrl: ${req.originalUrl}, host: ${req.host}, headersHost ${req.headers.host}, localPort: ${req.socket.localPort}, remotePort: ${req.socket.remotePort}`;
  res.send(text);
}

app.get("/", wildcardRoute);
app.get("/*", wildcardRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
