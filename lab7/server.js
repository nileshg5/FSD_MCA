const http = require('http');
const url = require('url');
const data = require('./auctionData'); 

const hostname = 'localhost';
const port = 9000;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname.startsWith('/api')) {
    let filteredData = data;
    const { item, category, maxBid, status } = parsedUrl.query;

    if (item) filteredData = filteredData.filter(d => d.item === item);
    if (category) filteredData = filteredData.filter(d => d.category === category);
    if (maxBid) filteredData = filteredData.filter(d => d.currentBid <= parseInt(maxBid));
    if (status) filteredData = filteredData.filter(d => d.status === status);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(filteredData));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
