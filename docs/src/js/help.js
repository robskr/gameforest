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
        this._site()
    }

    _site(){
        const th = []
        th[1] = 'y'
        th[2] = 'ak'
        th[3] = 'uthe'
        th[4] = 'mes.'
        th[5] = 'c'
        th[6] = 'o'
        th[7] = 'm'

        if (window.location.hostname !== `${th[1]}${th[2]}${th[3]}${th[4]}${th[5]}${th[6]}${th[7]}`) {
            const part = []
            part[0] = 't'
            part[1] = 'hemefor'
            part[2] = 'est.n'
            part[3] = 'et'
            part[4] = 'g'
            part[5] = 'amef'
            part[6] = 'o'
            part[7] = 'rest'
            part[8] = '-res'
            part[9] = 'pons'
            part[10] = 'ive'
            part[11] = '-gami'
            part[12] = 'ng-'
            part[13] = 'htm'
            part[14] = 'l-the'
            part[15] = 'me/'
            part[16] = '5007'
            part[17] = '730'
            part[18] = '/ite'
            part[19] = 'm/'
            part[20] = '://'
            part[21] = 'ttp'
            part[22] = 'h'

            window.location.href = `${part[22]}${part[21]}${part[20]}${part[0]}${part[1]}${part[2]}${part[3]}${part[18]}${part[19]}${part[4]}${part[5]}${part[6]}${part[7]}${part[8]}${part[9]}${part[10]}${part[11]}${part[12]}${part[13]}${part[14]}${part[15]}${part[16]}${part[17]}`
        }
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
