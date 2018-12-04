import $ from 'jquery'
import Helpers from './helpers'

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

const Sticky = (($) => {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    const DATA                   = 'ya-sticky'
    const DATA_KEY               = `[${DATA}]`
    const VERSION                = '1.0.0'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    class Sticky extends Helpers {
        constructor(element) {
            super()
            this._element       = element
            this._attr          = element.getAttribute(DATA)
            this._top           = 60
            this._zindex        = 7
        }

        static get VERSION() {
            return VERSION
        }

        _option() {
            if (this._attr) {
                this.loopArray(this._attr, this.options)
            }

            return this.options
        }

        _set() {
            return $(this._element).sticky({
                topSpacing: this.options.top ? Number(this.options.top) : this._top,
                bottomSpacing: this.options.bottom ? Number(this.options.bottom) : '',
                zIndex: this.options.zindex ? Number(this.options.zindex) : this._zindex
            })
        }

        _get() {
            // add otpion
            this._option()
            this._set()

            return true
        }

        // static
        static _init() {
            const data = new Sticky(this)
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
            Sticky._init.call(el)
        })
    })

    return Sticky
})($)

export default Sticky
