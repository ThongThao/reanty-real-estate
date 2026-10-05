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

  const payload = req.body || {};
  return res.status(200).json({
    status: 'success',
    message: 'Subscribed to Reanty newsletter successfully!',
    received: payload,
    timestamp: new Date().toISOString()
  });
};
