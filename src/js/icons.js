/**
 * --------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: icons.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const VERSION                = '1.0.0'
const PATH                   = window.path ? window.path : 'plugins'

const Font = {
    SOLID                : '.fas',
    REGULAR              : '.far',
    BRAND                : '.fab'
}

const FontAwesome = {
    CSS                  : `${PATH}/fontawesome/css/fontawesome.min.css`,
    REGULAR              : `${PATH}/fontawesome/css/regular.min.css`,
    BRAND                : `${PATH}/fontawesome/css/brands.min.css`,
    SOLID                : `${PATH}/fontawesome/css/solid.min.css`
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Icons {
    constructor() {
        this._stylesheet            = document.createElement('link')
        this._stylesheet.rel        = 'stylesheet'
        this._stylesheet.href       = FontAwesome.CSS
    }

    static get VERSION() {
        return VERSION
    }

    _solid() {
        if (document.querySelector(Font.SOLID)) {
            // create stylesheet
            const fas = document.createElement('link')
            fas.rel = 'stylesheet'
            fas.href = FontAwesome.SOLID

            // append stylesheet
            document.head.appendChild(fas)
        }

        return true
    }

    _brand() {
        if (document.querySelector(Font.BRAND)) {
            // create stylesheet
            const fab = document.createElement('link')
            fab.rel = 'stylesheet'
            fab.href = FontAwesome.BRAND

            // append stylesheet
            document.head.appendChild(fab)
        }

        return true
    }

    _regular() {
        if (document.querySelector(Font.REGULAR)) {
            // create stylesheet
            const far = document.createElement('link')
            far.rel = 'stylesheet'
            far.href = FontAwesome.REGULAR

            // append stylesheet
            document.head.appendChild(far)
        }

        return true
    }

    _get() {
        // append stylesheet
        document.head.appendChild(this._stylesheet)

        // detect type
        this._solid()
        this._brand()
        this._regular()
    }

    // static
    static _init() {
        const data = new Icons()
        data._get()
    }
}

/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector(Font.SOLID) || document.querySelector(Font.BRAND) || document.querySelector(Font.REGULAR)) {
        Icons._init.call()
    }
})

export default Icons
