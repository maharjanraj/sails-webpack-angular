switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports.webpack = require('./webpack.prod');
    break;
  default:
    module.exports.webpack = require('./webpack.dev');
}

