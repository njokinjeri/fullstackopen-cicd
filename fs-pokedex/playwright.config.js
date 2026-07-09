/* global require, module, process */
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './e2e-tests',
    timeout: 30000,
    expect: {
        timeout: 5000
    },
    reporter: 'html',
    use: {
        baseURL: 'http://localhost:8080',
        trace: 'on-first-retry',
    },
    webServer: {
        command: 'npm start',
        url: 'http://localhost:8080',
        reuseExistingServer: !process.env.CI,
        timeout: 120000,
    },
});