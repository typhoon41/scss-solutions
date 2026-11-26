# Absolute positioning

One-liners for the most common absolute positioning declarations.

```scss
@use '@typhoon41/scss-solutions/src/modules/position/absolute';
```

## zero-position($top, $right, $bottom, $left)

All arguments are optional and default to `0`.

```scss
@include absolute.zero-position(); // covers the positioned parent
@include absolute.zero-position($bottom: auto); // pins to the top edge
```

Outputs:

```scss
position: absolute;
top: $top;
right: $right;
bottom: $bottom;
left: $left;
```

## unset-position($top, $right, $bottom, $left)

All arguments are optional and default to `unset`. Outputs the same declarations as `zero-position`.

```scss
@include absolute.unset-position($top: 0, $right: 0); // top right corner
```
