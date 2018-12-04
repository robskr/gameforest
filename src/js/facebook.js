/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: facebook.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */

import Helpers from './helpers'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const DATA                   = 'ya-facebook'
const DATA_KEY               = `[${DATA}]`
const VERSION                = '1.0.0'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Facebook extends Helpers {
    constructor(element) {
        super()
        this._element       = element
    }

    static get VERSION() {
        return VERSION
    }

    _get() {
        return this.facebook(DATA_KEY)
    }

    // static
    static _init() {
        const data = new Facebook(this)
        data._get()
    }
}

/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(DATA_KEY).forEach((el) => {
        Facebook._init.call(el)
    })
})

export default Facebook
