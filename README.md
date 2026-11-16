# Kernstra PDF Web SDK: Nuxt example

View, annotate, edit and fill PDFs in a Nuxt app with the
[Kernstra PDF Web SDK](https://kernstra.com/web-sdk) (`@kernstra/pdf-web-sdk` on npm). The document is rendered and changed entirely in
the browser; nothing you open leaves it.

New to the SDK? The [get-started guide](https://kernstra.com/web-sdk/get-started) goes from
`npm install` to a first PDF, and the [playground](https://kernstra.com/playground) opens your own
PDF without installing anything.

<p>
  <img src="screenshots/landing.png" width="49%" alt="The Nuxt example's landing page: the Kernstra and Nuxt logos above a drop zone for a PDF">
  <img src="screenshots/viewer.png" width="49%" alt="A PDF open in the Kernstra PDF Web SDK viewer inside the Nuxt example, with the bar toolbar and page thumbnails">
</p>

Built with Nuxt 4 and Vue 3.5.

## What it shows

- Starting the SDK once, from a composable (`app/composables/useKernstra.ts`) that reads the key from `runtimeConfig`
- A Kernstra-branded landing page that takes a PDF from the file picker or a drop; the file stays in the browser, and the server renders the page
- Keeping the viewer out of server rendering with the `.client.vue` suffix, and loading it lazily (`<LazyDocumentViewer>`) when the first PDF is chosen
- A `DocumentViewer` component that opens the file in `onMounted` and releases it in `onBeforeUnmount`

## Requirements

- Node.js 22.22.3 or later (or 24.15+)
- A Kernstra license key

## 1. Get a license key

The SDK does not start without a license key. Sign in to the
[Kernstra console](https://console.kernstra.com) and copy a **development key**: it
runs on any host, `localhost` included, and watermarks every page. A **production
key** renders clean pages and runs only on the domains it names.

The key is not a secret. It ships to the browser by design: the SDK verifies it
there. See [Licensing](https://kernstra.com/docs/web-sdk/guides/licensing).

## 2. Run it

```bash
npm install
cp .env.example .env   # then paste your key after NUXT_PUBLIC_KERNSTRA_LICENSE=
npm run dev
```

Open http://localhost:3000 and drop a PDF on the page, or choose one: the SDK loads once you do.

`nuxt dev` reads `.env`, not `.env.local`.

## Where the SDK is wired in

| File | What it does |
| --- | --- |
| `app/composables/useKernstra.ts` | Owns the SDK options and calls `Kernstra.init()` with the key from `runtimeConfig` |
| `app/components/PdfDropzone.vue` | The landing page: file picker and drop target |
| `app/components/DocumentViewer.client.vue` | Opens the file with `PDFDocument.fromFile()`, builds the `PDFViewer`, destroys both on unmount; client only |
| `app/app.vue` | Holds the chosen file: the landing page without one, the header and the viewer with one |
| `nuxt.config.ts` | `runtimeConfig.public.kernstraLicense`, filled from `NUXT_PUBLIC_KERNSTRA_LICENSE` |

## Build for production

```bash
npm run build
NUXT_PUBLIC_KERNSTRA_LICENSE=<your key> node .output/server/index.mjs
```

Nuxt reads `NUXT_PUBLIC_KERNSTRA_LICENSE` when the server starts, not when it builds: the key stays out of the build output, and you set it in the server's environment.

Serve it over HTTPS: the license check needs the browser's Web Crypto API, which
exists only in a secure context (`localhost` counts as one).

## Learn more

- [Kernstra PDF Web SDK](https://kernstra.com/web-sdk): what the SDK does, the tools it ships and pricing
- [Get started](https://kernstra.com/web-sdk/get-started): from `npm install` to an embedded PDF viewer
- [Nuxt integration guide](https://kernstra.com/docs/web-sdk/guides/integrations#s-nuxt): the component this example is built from
- [Server-rendering frameworks](https://kernstra.com/docs/web-sdk/recipes/ssr-frameworks): Next.js, Nuxt and SvelteKit
- [Documentation](https://kernstra.com/docs/web-sdk): every configuration option, the programmatic API, events and errors
- [`@kernstra/pdf-web-sdk` on npm](https://www.npmjs.com/package/@kernstra/pdf-web-sdk)
- Support: [support@kernstra.com](mailto:support@kernstra.com)

## Other frameworks

The same page, built with:

- [Vanilla TypeScript](https://github.com/kernstra/pdf-web-sdk-example-vanilla)
- [React](https://github.com/kernstra/pdf-web-sdk-example-react)
- [Next.js](https://github.com/kernstra/pdf-web-sdk-example-nextjs)
- [Vue](https://github.com/kernstra/pdf-web-sdk-example-vue)
- [Angular](https://github.com/kernstra/pdf-web-sdk-example-angular)
- [Svelte](https://github.com/kernstra/pdf-web-sdk-example-svelte)
- [SvelteKit](https://github.com/kernstra/pdf-web-sdk-example-sveltekit)

## License

The example code is released under the [MIT License](LICENSE). The Kernstra PDF Web
SDK it uses is commercial software, governed by its
[license agreement](https://kernstra.com/legal/web-sdk-license-terms).

Built and maintained by [Kernstra](https://kernstra.com/).
