# Grid

A flexbox grid with column and offset classes for every breakpoint, in the spirit of Bootstrap.

## Full grid

```scss
@use '@typhoon41/scss-solutions/src/modules/layout/grid';

@include grid.generate(); // 12 divisions
@include grid.generate(24); // any whole number from 2 to 1000
```

The grid uses the [breakpoint map](./breakpoints.md#breakpoint-map). To override it, configure the grid once in a
wrapper module. The grid forwards the breakpoints module, so `apply-on` and `set-up` come with it:

```scss
// _breakpoints.scss in your application
@forward '@typhoon41/scss-solutions/src/modules/layout/grid' with (
	$breakpoints: (
		tablet: ( size: 768px ),
		desktop: ( size: 1200px )
	)
);
```

For `$divisions` = N and every breakpoint key `<size>`, `generate` outputs:

| Class | Effect |
| --- | --- |
| `.row` | flex container that wraps; elements inside it with a column or offset class get `box-sizing: border-box`, `flex-shrink: 0` and `max-width: 100%` |
| `.column-auto` | width fits the content |
| `.column-1` … `.column-N` | width of 1/N … N/N of the row |
| `.offset-1` … `.offset-N` | left margin of 1/N … N/N of the row |
| `.column-<size>-auto` | width fits the content from `<size>` up |
| `.column-<size>-1` … `.column-<size>-N` | column width from `<size>` up |
| `.offset-<size>-1` … `.offset-<size>-N` | left margin from `<size>` up |

For example, with the default breakpoints, `column-12 column-tablet-6 column-desktop-4` is full width on phones, half
width from 768px and a third from 1200px.

`generate` fails compilation if `$divisions` is not a number or is outside 2–1000.

## Grid core

Only the row and the auto-width column, without breakpoints. The full grid already includes it.

```scss
@use '@typhoon41/scss-solutions/src/modules/layout/grid-core';

@include grid-core.generate('column-', 'offset-');
```

Both prefixes are required. The column prefix names the `.<column-prefix>auto` class, and `.row` uses both prefixes to
find the columns and offsets inside it.
