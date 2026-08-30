// Build lib/client.js from src/client.js via the esbuild JS API.
// No child processes (sandboxed shells forbid spawning npx); run with:
//   node scripts/build-client.mjs        (from the package root)
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { build } from 'esbuild'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))

await build({
  entryPoints: [resolve(root, 'src/client.js')],
  bundle: true,
  format: 'cjs',
  platform: 'browser',
  target: 'es2022',
  banner: {
    js: 'window.__ModuleLoader__.load({id:"dsh-gemini-m3e-theme",factory:(require)=>{var module={exports:{}};var exports=module.exports;',
  },
  footer: {
    js: 'return module.exports;}});',
  },
  outfile: resolve(root, 'lib/client.js'),
})

console.log('built lib/client.js')
