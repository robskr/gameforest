'use strict'

import babel from 'rollup-plugin-babel';

export default {
    input: '../../src/js/index.js',
    format: 'umd',
    file: 'theme.js',
    name: 'gameforest',
    globals: {
        jquery: 'jQuery',
        webfontloader: 'WebFont'
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
        'jquery',
        'webfontloader'
    ]
}
