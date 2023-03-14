import { defineConfig } from 'tsup'
import Vue from 'unplugin-vue/esbuild'
import VueJsx from 'unplugin-vue-jsx/esbuild'
import type { Plugin } from 'esbuild'
import type { Options } from 'tsup'

export default defineConfig((options: Options) => {
  const esbuildPlugins: Plugin[] = [Vue(), (VueJsx as any)()]

  return {
    entry: ['./src/index.ts'],
    target: 'es2019',
    platform: 'browser',
    esbuildPlugins,
    format: ['esm', 'cjs'],
    // dts: true,
    minify: false,
    splitting: false,
    // sourcemap: true,
    // treeshake: true,
    clean: true,
  }
})
