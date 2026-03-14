// Author: Igor Dimitrijević (@igorskyflyer)

import {
  experimental_AstroContainer as AstroContainer,
  type ContainerRenderOptions
} from 'astro/container'

export type AstroComponentFactory = Parameters<
  AstroContainer['renderToString']
>[0]

/**
 * Renders an Astro component to an HTML string using the experimental Container API.
 *
 * Server-side only utility – no DOM environment required.
 * Perfect for Vitest tests (`@vitest-environment node`), snapshots, and SSR checks.
 *
 * @param component - Astro component (`.astro` or `.mdx` import)
 * @param options - Rendering options (props, slots, etc.)
 * @returns Promise<string> The rendered HTML string
 *
 * @example
 * ```ts
 * // @vitest-environment node
 * import { renderAstroComponent } from '@igorskyflyer/astro-render-component'
 * import MyComponent from '../MyComponent.astro'
 *
 * const html: string = await renderAstroComponent(MyComponent, {
 *   props: { title: 'Hi' }
 * })
 *
 * expect(html).toContain('<h1>Hi</h1>')
 * ```
 */
export async function renderAstroComponent(
  component: AstroComponentFactory,
  options: ContainerRenderOptions = {}
): Promise<string> {
  try {
    const container: AstroContainer = await AstroContainer.create()
    const result: string = await container.renderToString(component, options)

    return result
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Failed to render Astro component: ${err.message}`)
    }
    throw err
  }
}
