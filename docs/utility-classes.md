# Global utility classes

Global classes from `src/main.scss`, also shipped compiled as `dist/scss-solutions.css`.

```scss
@use '@typhoon41/scss-solutions/src/main';
```

Unlike the mixins, these classes are emitted as soon as the file is loaded, so load it only once.

## Layout

| Class | Declarations |
| --- | --- |
| `.aligned-centrally` | `display: flex; align-items: center` |
| `.center-content` | everything from `.aligned-centrally`, plus empty `::before` / `::after` with `margin: auto`, which also centres the content horizontally |
| `.stretch-equally` | `justify-content: space-evenly` |
| `.stretch-between` | `justify-content: space-between` |
| `.vertical-stack` | `flex-direction: column` |
| `.stretch` | `width: 100%; height: 100%` |

`.stretch-equally`, `.stretch-between` and `.vertical-stack` only affect a flex container, so combine them with
`.aligned-centrally` or another flex class.

## States

| Class | Declarations |
| --- | --- |
| `.ellipsis` | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` (single-line truncation) |
| `.clickable` | `cursor: pointer` |
