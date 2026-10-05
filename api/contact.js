module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
  }

  let payload = req.body;
  if (typeof payload === 'string') {
    try {
      payload = JSON.parse(payload);
    } catch (e) {
      payload = {};
    }
  }
  payload = payload || {};

  const { name, email, message } = payload;
  if (!name || !email || !message) {
    return res.status(400).json({
      status: 'error',
      message: 'All fields (name, email, message) are required.'
    });
  }

  return res.status(200).json({
    status: 'success',
    message: 'Thank you for contacting Reanty! We will get back to you shortly.',
    received: { name, email, message },
    timestamp: new Date().toISOString()
  });
};
