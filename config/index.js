var env = process.env.NODE_ENV || 'development';
module.exports = {
  '__DEV__': env,
  '__PROD__': env === 'production'
}
