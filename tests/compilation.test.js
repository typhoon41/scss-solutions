/**
 * @jest-environment node
 */
const sass = require('sass');

const compile = source => sass.compileString(source, { loadPaths: ['src/modules'] }).css;
const gridWith = include => `@use 'layout/grid'; ${include}`;

describe('Grid compilation', () => {
    it('should default to twelve divisions on every default breakpoint', () => {
        const css = compile(gridWith('@include grid.generate();'));

        expect(css).toMatch(/\.column-3 \{\s+flex: 0 0 auto;\s+width: 25%;/);
        expect(css).toMatch(/\.offset-12 \{\s+margin-left: 100%;/);
        expect(css).toContain('.column-4k-6');
        expect(css).not.toContain('.column-13');
    });

    it.each([
        ['a non-number', "'a'", 'Please provide number parameter for divisions! Given value: a'],
        ['fewer than two', '1', 'between 2 and 1000! Given value: 1'],
        ['more than a thousand', '1001', 'between 2 and 1000! Given value: 1001']
    ])('should reject %s as divisions', (_, divisions, message) => {
        expect(() => compile(gridWith(`@include grid.generate(${divisions});`))).toThrow(message);
    });
});

describe('Breakpoints compilation', () => {
    it('should reject unknown breakpoint and list the known ones', () => {
        const source = "@use 'responsiveness/breakpoints'; @include breakpoints.apply-on(phone) { a { order: 1; } }";

        expect(() => compile(source)).toThrow('Size must be any of following values: mobile, tablet, laptop, desktop, 4k. Given size: phone');
    });
});

describe('Global utility classes', () => {
    it('should compile main stylesheet without leaking lint directives', () => {
        const css = sass.compile('src/main.scss').css;

        expect(css).toContain('.aligned-centrally, .center-content');
        expect(css).not.toContain('stylelint');
    });
});
