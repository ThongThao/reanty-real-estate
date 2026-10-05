const fs = require('fs');
const path = require('path');

function getPropertiesData() {
  try {
    const cwdPath = path.join(process.cwd(), 'data', 'properties.json');
    if (fs.existsSync(cwdPath)) {
      return JSON.parse(fs.readFileSync(cwdPath, 'utf8'));
    }
  } catch (e) {
    // Fallback
  }
  try {
    const relPath = path.join(__dirname, '..', 'data', 'properties.json');
    if (fs.existsSync(relPath)) {
      return JSON.parse(fs.readFileSync(relPath, 'utf8'));
    }
  } catch (e) {
    // Fallback
  }
  try {
    return require('../data/properties.json');
  } catch (e) {
    return null;
  }
}

function sendResponse(res, statusCode, body) {
  if (typeof res.status === 'function') {
    return res.status(statusCode).json(body);
  }
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  return res.end(JSON.stringify(body));
}

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status ? res.status(204).end() : (res.writeHead(204), res.end());
  }

  if (req.method !== 'GET') {
    return sendResponse(res, 405, {
      success: false,
      status: 'error',
      message: 'Method Not Allowed'
    });
  }

  const data = getPropertiesData();
  if (!data) {
    return sendResponse(res, 500, {
      success: false,
      status: 'error',
      message: 'Internal Server Error: Unable to load blog dataset'
    });
  }

  return sendResponse(res, 200, {
    success: true,
    status: 'success',
    data: data.blogPosts || []
  });
};
