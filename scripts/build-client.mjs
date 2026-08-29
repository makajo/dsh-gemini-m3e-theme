import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { spawn } from 'node:child_process'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))

const args = [
  '--yes',
  'esbuild@0.25.0',
  'src/client.js',
  '--bundle',
  '--format=cjs',
  '--platform=browser',
  '--target=es2022',
  '--external:react',
  '--banner:js=window.__ModuleLoader__.load({id:"dsh-gemini-m3e-theme",factory:(require)=>{var module={exports:{}};var exports=module.exports;',
  '--footer:js=return module.exports;}});',
  '--outfile=lib/client.js',
]

const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx'

await new Promise((resolveBuild, rejectBuild) => {
  const child = spawn(npxCmd, args, { cwd: root, stdio: 'inherit' })
  child.once('error', rejectBuild)
  child.once('exit', (code) => {
    if (code === 0) resolveBuild()
    else rejectBuild(new Error(`esbuild exited with code ${code}`))
  })
})