# Example Implementations for Custom UI Screen Widgets

- Web Component
- Can use any framework or no framework
- Output format must be esm
- Recommended build tool is esbuild
- Examples / Starter Templates (ordered from simplest to most complex)
    - [Lit](lit) (easy, lightweight, recommended)
    - [Vanilla JS](vanilla) (a bit cumbersome, but fast)
    - [Stencil](stencil) (more complex)
- Note that [Hybrids](https://hybrids.js.org) does not work out of the box, since it [does not observe attribute values](https://github.com/hybridsjs/hybrids/blob/main/docs/component-model/structure.md#attributes)