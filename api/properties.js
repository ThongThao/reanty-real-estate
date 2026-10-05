const data = require('../data/properties.json');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  const { category } = req.query || {};
  let properties = data.featuredProperties || [];
  if (category && category !== 'all') {
    properties = properties.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  return res.status(200).json({ status: 'success', data: properties });
};
