const path = require('path');

module.exports = function override(config, env) {
    config.output = {
        ...config.output,
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/js/[name].js',
    };
    return config;
};
