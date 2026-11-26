# SCSS Solutions

Shareable SCSS utilities: mixins for a flexible grid, breakpoints and positioning, plus a small set of global utility
classes.

## Installation

```bash
npm install --save-dev @typhoon41/scss-solutions
```

Requires Dart Sass with the module system (`@use` / `@forward`). Developing this package requires Node.js 24 or newer.

## How to use it

Mixins emit nothing until you `@use` a module and `@include` one of its mixins:

```scss
@use '@typhoon41/scss-solutions/src/modules/position/absolute';

.badge {
	@include absolute.zero-position($top: 0.5rem, $left: auto);
}
```

Paths in these docs start at the package name and assume `node_modules` is on your Sass load path (in Angular:
`stylePreprocessorOptions.includePaths`). With `node_modules/@typhoon41` on the load path, the prefix shortens to
`scss-solutions/src/...`.

Global utility classes come from `src/main.scss`, or the compiled `dist/scss-solutions.css`:

```scss
@use '@typhoon41/scss-solutions/src/main';
```

## What's included

- [Flexible grid system](./docs/grid.md)
- [Breakpoints and media queries](./docs/breakpoints.md)
- [Absolute positioning](./docs/absolute-positioning.md)
- [Fixed positioning](./docs/fixed-positioning.md)
- [Global utility classes](./docs/utility-classes.md)

## License

Apache-2.0 © Nikola Dragićević
