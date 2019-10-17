/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: theme.js
 * Copyright (c) 2019 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.3
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

    // private
    _load() {
        this._bootstrap()
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
