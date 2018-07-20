# fullcalendar 修正

## src/util/dom-manip.ts の Style 箇所を以下の様に修正

```js
// Style
// ----------------------------------------------------------------------------------------------------------------

const PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;

export function applyStyle(el: HTMLElement, props: object, propVal?: any) {
  for (let propName in props) {
    applyStyleProp(el, propName, props[propName]);
  }
}
export function applyStyleProp(el: HTMLElement, name: string, val) {
  if (el.classList[1] !== "fc-time-grid-container") {
    if (name === "height") {
      el.style[name] = "100%";
    } else {
      if (val == null) {
        el.style[name] = "";
      } else if (typeof val === "number" && PIXEL_PROP_RE.test(name)) {
        el.style[name] = val + "px";
      } else {
        el.style[name] = val;
      }
    }
  } else {
    if (name === "height") {
      el.style[name] = "";
    } else {
      if (val == null) {
        el.style[name] = "";
      } else if (typeof val === "number" && PIXEL_PROP_RE.test(name)) {
        el.style[name] = val + "px";
      } else {
        el.style[name] = val;
      }
    }
  }
}
```
