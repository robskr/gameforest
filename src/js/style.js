/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: style.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.3
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */

import Helpers from './helpers'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const DATA                   = 'ya-style'
const DATA_KEY               = `[${DATA}]`
const VERSION                = '1.0.0'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Style extends Helpers {
    constructor(element) {
        super()
        this._element       = element
        this._attr          = element.getAttribute(DATA)
        this.option         = []
    }

    static get VERSION() {
        return VERSION
    }

    // private
    _set(option) {
        const Defaults = {
            bg: option['background-color'] ? `background-color: ${option['background-color']} !important;` : '',
            height: option.height ? `height: ${option.height} !important;` : '',
            opacity: option.opacity ? `opacity: ${option.opacity} !important;` : '',
            borderColor: option['border-color'] ? `border-color: ${option['border-color']};` : ' '
        }

        return Defaults.height + Defaults.bg + Defaults.opacity + Defaults.borderColor
    }

    _get() {
        this.loopArray(this._attr, this.option)
        this._element.style.cssText = this._set(this.option)
        this._element.removeAttribute(DATA)
    }

    // static
    static _init() {
        const data = new Style(this)
        data._get()
    }
}

/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(DATA_KEY).forEach(el => {
        Style._init.call(el)
    })
})

export default Style
