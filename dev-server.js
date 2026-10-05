const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

const apiRoutes = {
  '/api/properties': require('./api/properties.js'),
  '/api/services': require('./api/services.js'),
  '/api/testimonials': require('./api/testimonials.js'),
  '/api/blog': require('./api/blog.js'),
  '/api/contact': require('./api/contact.js'),
  '/api/newsletter': require('./api/newsletter.js')
};

function enhanceResponse(res) {
  res.status = function(code) {
    res.statusCode = code;
    return res;
  };
  res.json = function(data) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
    return res;
  };
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  enhanceResponse(res);

  // API Handlers (Exact parity with Vercel Serverless Functions)
  if (pathname.startsWith('/api/')) {
    const handler = apiRoutes[pathname];
    if (handler) {
      req.query = parsedUrl.query;
      if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
          req.body = body;
          handler(req, res);
        });
      } else {
        handler(req, res);
      }
      return;
    }

    return res.status(404).json({ success: false, status: 'error', message: 'API endpoint not found' });
  }

  // Static File Server
  if (pathname === '/') {
    pathname = '/index.html';
  }

  let decodedPathname;
  try {
    decodedPathname = decodeURIComponent(pathname);
  } catch (e) {
    decodedPathname = pathname;
  }

  const safePath = path.normalize(decodedPathname).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(PUBLIC_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`  🚀 Local Dev Server (Web UI): http://localhost:${PORT}`);
  console.log(`  📊 Local Dev API Server: http://localhost:${PORT}/api/properties`);
  console.log(`=======================================================`);
});
