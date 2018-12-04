import $ from 'jquery'

/**
 * Gameforest Bootstrap Gaming Theme
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * Licensed under The GPLv3 License
 * For full copyright and license information, please see the LICENSE.md
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) yakuthemes.com (https://yakuthemes.com)
 * @link      https://yakuthemes.com
 * @since     5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 */

const Navbar = (($) => {
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

    return Navbar
})($)

export default Navbar
