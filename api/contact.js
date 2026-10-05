function sendResponse(res, statusCode, body) {
  if (typeof res.status === 'function') {
    return res.status(statusCode).json(body);
  }
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  return res.end(JSON.stringify(body));
}

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status ? res.status(204).end() : (res.writeHead(204), res.end());
  }

  if (req.method !== 'POST') {
    return sendResponse(res, 405, {
      success: false,
      status: 'error',
      message: 'Method Not Allowed'
    });
  }

  let payload = req.body;
  if (typeof payload === 'string') {
    try {
      payload = JSON.parse(payload);
    } catch (e) {
      return sendResponse(res, 400, {
        success: false,
        status: 'error',
        message: 'Invalid JSON payload'
      });
    }
  }
  payload = payload || {};

  const { name, email, message } = payload;
  if (!name || !email || !message) {
    return sendResponse(res, 400, {
      success: false,
      status: 'error',
      message: 'All fields (name, email, message) are required.'
    });
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return sendResponse(res, 400, {
      success: false,
      status: 'error',
      message: 'Please provide a valid email address.'
    });
  }

  return sendResponse(res, 200, {
    success: true,
    status: 'success',
    message: 'Thank you for contacting Reanty! We will get back to you shortly.',
    received: { name, email, message },
    timestamp: new Date().toISOString()
  });
};
