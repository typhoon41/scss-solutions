# Fixed positioning

One-liner for fixed positioning against the viewport.

```scss
@use '@typhoon41/scss-solutions/src/modules/position/fixed';
```

## zero-position($top, $right, $bottom, $left)

All arguments are optional and default to `0`.

```scss
.overlay {
	@include fixed.zero-position(); // covers the viewport
}

.toolbar {
	@include fixed.zero-position($bottom: auto); // pinned to the top
}
```

Outputs:

```scss
position: fixed;
top: $top;
right: $right;
bottom: $bottom;
left: $left;
```
