/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: carousel.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */

import $ from 'jquery'
import Helpers from './helpers'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const VERSION                = '1.0.0'
const DATA                   = 'ya-carousel'
const DATA_KEY               = `[${DATA}]`

const ClassName = {
    CAROUSEL        : 'owl-carousel',
    THEME           : 'owl-carousel-theme',
    HEIGHT          : 'owl-height-100'
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Carousel extends Helpers {
    constructor(element) {
        super()
        this._element       = element
        this._attr          = element.getAttribute(DATA)
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

    _add() {
        const num           = 100
        const id            = Math.floor(Math.random() * num)
        const carousel      = `${ClassName.CAROUSEL}-${id}`

        // add otpion
        this._option()

        // check height
        if (this.options.height) {
            this._element.classList.add(ClassName.HEIGHT)
        }

        // set class
        this._element.classList.add(ClassName.THEME, carousel)

        // init carousel
        return $(`.${carousel}`).owlCarousel({
            autoplay:        this.options.autoplay ? true : 0,
            autoplaySpeed:   this.options.autoplayspeed ? Number(this.options.autoplayspeed) : '',
            loop:            this.options.loop ? 0 : true,
            nav:             this.options.nav ? 0 : true,
            dots:            this.options.dots ? 0 : true,
            items:           this.options.items ? Number(this.options.items) : 1,
            margin:          this.options.margin ? Number(this.options.margin) : 0,
            center:          this.options.center ? true : 0,
            slideBy:         this.options.slideItem ? Number(this.options.slideItem) : 1
        })
    }

    // private
    _get() {
        return this._add()
    }

    // static
    static _init() {
        const data = new Carousel(this)
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
        Carousel._init.call(el)
    })
})

export default Carousel
