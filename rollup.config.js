'use strict'

import babel from 'rollup-plugin-babel'

export default {
    input: process.env.NODE_ENV === 'host' ? './docs/src/js/index.js' : './src/js/index.js',
    format: 'umd',
    file: 'theme.js',
    name: 'gameforest',
    globals: {
        jquery: 'jQuery'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            externalHelpersWhitelist: [
                'taggedTemplateLiteralLoose',
                'defineProperties',
                'assertThisInitialized',
                'createClass',
                'inheritsLoose',
                'defineProperty',
                'objectSpread'
            ]
        })
    ],
    external: [
        'jquery'
    ]
}
