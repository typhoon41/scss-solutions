# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## What this is

`@typhoon41/scss-solutions`: shareable SCSS utilities, published publicly on npmjs.org. Two parts:

- **Mixins** under `src/modules/` (grid, breakpoints, absolute and fixed positioning). They emit nothing until a
  consumer `@use`s a module and `@include`s a mixin.
- **Global utility classes** from `src/main.scss` (`src/partials/`: alignment, containers, cursors, typography),
  compiled to `dist/scss-solutions.css` by `npm run build`.

Linting uses `@typhoon41/stylelint-config`. Marush consumes the package; the `scss-solutions` skill of the
`conventions@toolkit` plugin describes its use there, so keep that skill in step with public changes here.

## Commands

```sh
npm ci                  # install; the lockfile resolves from registry.npmjs.org
npm run lint            # stylelint with --fix over src/ and tests/
npm test                # sass-true specs (tests/**/*.tests.scss) run through jest
npm run build           # compile src/main.scss to dist/scss-solutions.css
npm pack --dry-run      # the tarball must hold only src/, dist/, package.json, README.md, LICENSE
```

CI runs the lint without `--fix`, then the tests and the build.

## Editing

- A mixin, its parameters, a default breakpoint and a global class name are public API. Renaming or removing one, or
  changing what it outputs, fails or changes consumers' styles: it is a breaking change (`feat!:`), released as a
  major version (a minor while the version is 0.x).
- Every mixin gets a sass-true spec in `tests/`, named `<module>.tests.scss` after the module it covers.
- Document a new mixin or class in `docs/` and link it from `README.md`.

## Releasing

Released through the toolkit `release/` tooling (github.com/typhoon41/toolkit), configured by `release.json` and
`azure-pipelines.yml`. Commit and PR conventions and the version-bump flow are owned by the `conventional-commits` and
`toolkit-release` skills of the `conventions@toolkit` plugin; follow them instead of a copy here. In short: bump
`version` in `package.json` through a PR; the pipeline publishes to npm and creates the tag and GitHub release after
approval.
