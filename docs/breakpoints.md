# Breakpoints

Mobile-first media queries driven by one breakpoint map.

```scss
@use '@typhoon41/scss-solutions/src/modules/responsiveness/breakpoints';
```

## Breakpoint map

Each key names a breakpoint and holds its minimum width in `size`. The defaults (`src/modules/_variables.scss`) are:

```scss
(
	mobile: ( size: 576px ),
	tablet: ( size: 768px ),
	laptop: ( size: 992px ),
	desktop: ( size: 1200px ),
	4k: ( size: 1400px )
)
```

To override them, configure the module. Sass lets a module be configured only once per compilation, so do it in one
wrapper module of your application and `@use` that wrapper everywhere else:

```scss
// _breakpoints.scss in your application
@forward '@typhoon41/scss-solutions/src/modules/responsiveness/breakpoints' with (
	$breakpoints: (
		phone: ( size: 480px ),
		tablet: ( size: 768px ),
		desktop: ( size: 1200px )
	)
);
```

If you also use the [grid](./grid.md), configure the grid module instead. It forwards `apply-on` and `set-up` with the
same breakpoints.

## apply-on($given-size)

Applies the content from the given breakpoint upwards. `$given-size` must be a key of the breakpoint map. Any other
value fails compilation, and the error lists the valid keys.

```scss
.menu {
	display: none;

	@include breakpoints.apply-on(tablet) {
		display: flex;
	}
}
```

Outputs `@media only screen and (min-width: 768px) { .menu { display: flex; } }`.

## set-up()

Exposes the active breakpoint to JavaScript, so the breakpoints are defined only in SCSS. It sets the `content` of
`body::before` to the name of the widest breakpoint that matches the viewport. The pseudo-element stays hidden.

```scss
@include breakpoints.set-up();
```

```ts
const breakpoint = getComputedStyle(document.body, '::before').content.replaceAll('"', '');
```

Below its own size, the first breakpoint in the map is still reported, so it doubles as the smallest-screen value.
