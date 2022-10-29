
module.exports = {
    setupFiles: [
        'jest-canvas-mock',
    ],
    resolver: 'jest-webpack-resolver',
    moduleNameMapper: {
        '\\.(s?css)$': 'identity-obj-proxy',
    },
    transform: { "^.+\\.(js|jsx)$": "babel-jest" },
    setupFilesAfterEnv: [
        '@testing-library/jest-dom',
    ],
    testEnvironment: 'jsdom'
};
