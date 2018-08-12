const env = process.env.NODE_ENV || 'development';

module.exports = {
  development: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
  test: {
    MONGODB_URI: process.env.MONGODB_URI_TEST,
  },
}[env];
