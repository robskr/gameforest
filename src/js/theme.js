/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: theme.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.2
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */

import $ from 'jquery'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Theme {
    _bootstrap() {
        $('[data-toggle="tooltip"]').tooltip()
        $('[data-toggle="popover"]').popover()
    }

    _fixHeight() {
        if (document.querySelector('.owl-height-100')) {
            const height = window.innerHeight - document.querySelector('.site-header').offsetHeight

            document.querySelectorAll('.owl-carousel-item').forEach((el) => {
                el.style.height =  `${height}px`
            })
        }
    }

    // private
    _load() {
        this._bootstrap()
        this._fixHeight()
    }

    // static
    static _init() {
        const data = new Theme()
        data._load()
    }
}

/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/

document.addEventListener('DOMContentLoaded', () => {
    Theme._init.call()
})

export default Theme
