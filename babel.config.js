module.exports = {
    presets: [
        ['@babel/preset-env', {
            modules: false,
            useBuiltIns: false,
            bugfixes: true,
        }],
        '@babel/preset-react',
    ],
};
