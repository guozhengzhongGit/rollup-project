import json from "@rollup/plugin-json";
import {terser} from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel'
export default {
    input: ['src/entry.js'],
    output: [
        {
            file: 'dist/bundle-cjs.js',
            format: 'cjs'
        },
        {
            file: 'dist/bundle-es.js',
            format: 'es'
        },
        {
            file: 'dist/bundle.js',
            format: 'umd',
            name: 'gzz'
        },
        {
            file: 'dist/bundle.min.js',
            format: 'iife',
            name: 'gzz',
            plugins: [terser()]
        }

    ],
    plugins: [commonjs(), nodeResolve(), babel({ babelHelpers: 'bundled' }), json()]
}
