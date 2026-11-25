/**
 * @jest-environment node
 */
const sassTrue = require('sass-true');
const { globSync } = require('node:fs');

describe('Scss unit tests', () => {
    const sassTestFiles = globSync('tests/**/*.tests.scss');

    sassTestFiles.forEach(file => sassTrue.runSass({ describe, it }, file));
});
