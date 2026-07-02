<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-astro-render-component/refs/heads/main/media/astro-render-component.png" alt="Icon of Astro Render Component" width="256" height="256">
  <h1>Astro Render Component</h1>
  <a href="https://www.npmjs.com/package/@igorskyflyer/astro-render-component"><img src="https://img.shields.io/npm/v/@igorskyflyer/astro-render-component.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@igorskyflyer/astro-render-component"><img src="https://img.shields.io/node/v/@igorskyflyer/astro-render-component.svg" alt="Node version"></a>
  <a href="https://www.npmjs.com/package/@igorskyflyer/astro-render-component"><img src="https://img.shields.io/npm/dt/@igorskyflyer/astro-render-component.svg" alt="npm downloads"></a>
  <a href="https://github.com/igorskyflyer/npm-astro-render-component/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@igorskyflyer/astro-render-component.svg" alt="License"></a>
  <a href="https://liberapay.com/igorskyflyer/donate"><img src="https://img.shields.io/liberapay/receives/igorskyflyer.svg?logo=liberapay"></a>
</div>

<br>

<blockquote align="center">
  Zero-Config • DOM-Free • HTML String • Fast Node Testing
</blockquote>

<h4 align="center">
  🤖 Astro component renderer. Zero configuration. Produces clean HTML strings directly in Node.js without any DOM environment. 🐬
</h4>

<br>

## Table of Contents

- ✨ [**Features**](#features)
- 🕵🏼 [**Usage**](#usage)
- 🤹🏼 [**API**](#api)
- 🗒️ [**Examples**](#examples)
- ⚙️ [**Implementation**](#implementation)
- 🎯 [**Motivation**](#motivation)
- 📝 [**Changelog**](#changelog)
- 🪪 [**License**](#license)
- 💖 [**Support**](#support)
- 🧬 [**Related**](#related)
- 👨🏻‍💻 [**Author**](#author)

<br>

## Features

- ✨ Zero-config: drop in and render `Astro` components instantly
- 🐢 Fast: pure `Node.js`, no `DOM` simulation overhead
- 🔧 Returns clean HTML string: ready for snapshots or text checks
- 🚫 No `happy-dom`/`jsdom` needed: runs in plain Node environment
- ✅ Works with `Vitest`: perfect with `@vitest-environment node`
- 📦 Tiny footprint: minimal wrapper over Astro's `Container` API
- 🛡️ Safe types: full `TypeScript` support, exported `AstroComponentFactory`
- 🔄 Supports `props`/`slots`: pass options just like `renderToString`
- ⚡ Modern baseline: Node `>=24`, Astro `>=6` ready, leveraging the [**AstroContainer API**](https://docs.astro.build/en/reference/container-reference/)
- 🧼 Clean errors: meaningful messages on render failures

<br>

## Usage

Install it by executing any of the following, depending on the preferred package manager:

```bash
bun add -d @igorskyflyer/astro-render-component
```

```bash
pnpm add -D @igorskyflyer/astro-render-component
```

```bash
yarn add -D @igorskyflyer/astro-render-component
```

```bash
npm i -D @igorskyflyer/astro-render-component
```

<br>

## API

### async renderAstroComponent()

```ts
async function renderAstroComponent(
  component: AstroComponentFactory,
  options: ContainerRenderOptions = {}
): Promise<string>
```  

Renders an Astro component to an HTML string using the experimental Container API.  
Server-side only utility – no DOM environment required.  
Perfect for Vitest tests (`@vitest-environment node`), snapshots, and SSR checks.

<br>

## Examples

Render an Astro component to HTML string:

`MyComponent.test.ts`
```ts
// @vitest-environment node
import { renderAstroComponent } from '@igorskyflyer/astro-render-component'
import MyComponent from '../MyComponent.astro'

const html: string = await renderAstroComponent(MyComponent, {
  props: { title: 'Hello' }
})

expect(html).toContain('<h1>Hello</h1>')
```

<br>

## Implementation

This utility is a thin, zero-config wrapper over Astro's experimental Container API:

- **Core API used**  
  `experimental_AstroContainer.create()` → creates isolated render context  
  `container.renderToString(component, options)` → renders to HTML string

<br>

- **Behavior**  
  - Server-side only: runs in plain Node.js (no DOM, no happy-dom/jsdom)  
  - Returns plain string containing full rendered HTML (tags, attributes, text, islands)  
  - Supports props, slots, and other `ContainerRenderOptions`  
  - Throws meaningful error on failure (e.g. invalid component, render crash)  
  - No side effects, no caching, no hydration setup

<br>

- **Key characteristics**  
  - Type-safe: derives `AstroComponentFactory` from `renderToString` signature  
  - ESM-only output (.js + .d.ts)  
  - Designed for testing (Vitest with `@vitest-environment node`) and lightweight SSR
<br>

## Motivation

Provide the lightest possible server-side Astro component renderer: zero config, no DOM dependency, fast HTML string output for testing and SSR checks.

<br>

## Changelog

Read about the latest changes in the [**CHANGELOG**](https://github.com/igorskyflyer/npm-astro-render-component/blob/main/CHANGELOG.md).

<br>

## License

Licensed under the [**MIT license**](https://github.com/igorskyflyer/npm-astro-render-component/blob/main/LICENSE).

<br>

## Support

<div align="center">
  If this open-source project has saved you time or improved your workflow, consider supporting its continued development via <a href="https://liberapay.com/igorskyflyer/donate"><strong>LiberaPay</a> or <a href="https://ko-fi.com/igorskyflyer"><strong>Ko-Fi</strong></a>.
  <br>
  <br>
  <a href="https://liberapay.com/igorskyflyer/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>
  <br>
  <a href="https://ko-fi.com/igorskyflyer"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Support Igor Dimitrijević (igorskyflyer) - Donate to Sustain Open-Source Projects" width="118" height="30" loading="lazy"></a>
  <br>
  <br>
  <blockquote>
    Support helps fund new open-source tools, maintenance, and documentation.
  </blockquote>
</div>

<br>

## Related

[@igorskyflyer/astro-easynav-button](https://www.npmjs.com/package/@igorskyflyer/astro-easynav-button)

> _🧭 Add an easy-to-use navigational button (jump to top/bottom) to your Astro site. 🔼_

<br>

[@igorskyflyer/astro-post-excerpt](https://www.npmjs.com/package/@igorskyflyer/astro-post-excerpt)

> _⭐ An Astro component that renders post excerpts for your Astro blog - directly from your Markdown and MDX files. Astro v2+ collections are supported as well! 💎_

<br>

[@igorskyflyer/chars-in-string](https://www.npmjs.com/package/@igorskyflyer/chars-in-string)

> _🪐 Provides ways of testing whether an array of chars is present inside a given String. ☄_

<br>

[@igorskyflyer/magic-queryselector](https://www.npmjs.com/package/@igorskyflyer/magic-queryselector)

> _🪄 A TypeScript-types patch for querySelector/querySelectorAll, make them return types you expect them to! 🔮_

<br>

[@igorskyflyer/vscode-folderpicker](https://www.npmjs.com/package/@igorskyflyer/vscode-folderpicker)

> _✨ Provides a custom Folder Picker API + UI for Visual Studio Code. 🎨_

<br>

## Author
Created by **Igor Dimitrijević ([*@igorskyflyer*](https://github.com/igorskyflyer/))**.
