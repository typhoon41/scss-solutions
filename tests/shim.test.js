/**
 * @jest-environment node
 */
const sassTrue = require('sass-true');
const glob = require('glob');

describe('Scss unit tests', () => {
    const sassTestFiles = glob.sync('tests/**/*.tests.scss');

    sassTestFiles.forEach(file => sassTrue.runSass({ describe, it }, file));
});