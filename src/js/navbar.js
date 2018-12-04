/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: navbar.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */

import $ from 'jquery'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const VERSION                = '1.0.0'

const Selector = {
    NAVBAR               : '.navbar',
    SEARCH               : '.navbar-search',
    ICON                 : '.toggle-search',
    CLOSE                : '.search-close'
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Navbar {
    constructor() {
        this._element       = document.querySelector(Selector.SEARCH)
        this._close         = document.querySelector(Selector.CLOSE)
        this._icon          = document.querySelector(Selector.ICON)
    }

    static get VERSION() {
        return VERSION
    }

    _fix() {
        $('.dropdown-lg').on('hide.bs.dropdown', () => {
            document.querySelector('.owl-carousel').classList.add('owl-hide')
        })

        $('.dropdown-lg').on('show.bs.dropdown', () => {
            document.querySelector('.owl-carousel').classList.remove('owl-hide')
        })
    }

    _hover() {
        $('.dropdown > .dropdown-menu > .dropdown').hover(function () {
            $(this).toggleClass('show')
        })
    }

    // private
    _toggle() {
        return this._element.classList.toggle('active')
    }

    _remove() {
        return this._element.classList.remove('active')
    }

    _get() {
        if (this._icon) {
            this._icon.addEventListener('click', (e) => {
                e.preventDefault()

                this._toggle()
            }, false)

            this._close.addEventListener('click', (e) => {
                e.preventDefault()

                this._remove()
            }, false)
        }

        this._fix()
        this._hover()
    }

    // static
    static _init() {
        const data = new Navbar(this)
        data._get()
    }
}

/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(Selector.NAVBAR).forEach((el) => {
        Navbar._init.call(el)
    })
})

export default Navbar
