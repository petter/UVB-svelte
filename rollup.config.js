import resolve from 'rollup-plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
    (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
    (warning.code === 'CIRCULAR_DEPENDENCY' &&
        /[/\\]@sapper[/\\]/.test(warning.message)) ||
    onwarn(warning);
const dedupe = importee =>
    importee === 'svelte' || importee.startsWith('svelte/');

export default {
    client: {
        input: config.client.input(),
        output: config.client.output(),
        plugins: [
            replace({
                'process.browser': true,
                'process.env.NODE_ENV': JSON.stringify(mode),
                'process.env.API_KEY': process.env.API_KEY
            }),
            svelte({
                dev,
                hydratable: true,
                emitCss: true,
                preprocess: autoPreprocess()
            }),
            resolve({
                browser: true,
                dedupe
            }),
            commonjs(),
            typescript({ sourceMap: dev }),
            json(),

            legacy &&
                babel({
                    extensions: ['.js', '.mjs', '.html', '.svelte'],
                    runtimeHelpers: true,
                    exclude: ['node_modules/@babel/**'],
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: '> 0.25%, not dead'
                            }
                        ]
                    ],
                    plugins: [
                        '@babel/plugin-syntax-dynamic-import',
                        [
                            '@babel/plugin-transform-runtime',
                            {
                                useESModules: true
                            }
                        ]
                    ]
                }),

            !dev &&
                terser({
                    module: true
                })
        ],
        preserveEntrySignatures: 'strict',
        onwarn
    },

    server: {
        input: config.server.input(),
        output: config.server.output(),
        plugins: [
            replace({
                'process.browser': false,
                'process.env.NODE_ENV': JSON.stringify(mode)
            }),
            svelte({
                preprocess: autoPreprocess(),
                generate: 'ssr',
                dev
            }),
            resolve({
                dedupe
            }),
            commonjs(),
            typescript({ sourceMap: dev }),
            json()
        ],
        external: Object.keys(pkg.dependencies).concat(
            require('module').builtinModules ||
                Object.keys(process.binding('natives'))
        ),
        preserveEntrySignatures: 'strict',
        onwarn
    },

    serviceworker: {
        input: config.serviceworker.input(),
        output: config.serviceworker.output(),
        plugins: [
            resolve(),
            replace({
                'process.browser': true,
                'process.env.NODE_ENV': JSON.stringify(mode)
            }),
            commonjs(),
            json(),
            !dev && terser()
        ],

        onwarn
    }
};
