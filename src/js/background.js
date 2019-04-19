/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: background.js
 * Copyright (c) 2019 yakuthemes.com (https://yakuthemes.com)
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

const DATA                   = 'ya-background'
const DATA_KEY               = `[${DATA}]`
const VERSION                = '1.0.0'

const ClassName = {
    EMBED               : 'bg-video',
    EMBED_ITEM          : 'bg-video-item',
    CONTAINER           : 'container-fluid'
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Background extends Helpers {
    constructor(element) {
        super()
        this._element       = element
        this._attr          = element.getAttribute(DATA)
        this._iframe        = document.createElement('iframe')
    }

    static get VERSION() {
        return VERSION
    }

    _calc(el, video) {
        // numbers
        const num = {
            calc    : 0.2,
            half    : 2,
            x       : 16,
            y       : 9
        }
        const ratio         = num.x / num.y
        const abundance     = this._element.offsetHeight * num.calc

        // el parameters
        el.width            = this._element.offsetWidth
        el.outerheight      = this._element.offsetHeight
        el.height           = this._element.offsetHeight + abundance

        // video paramaters
        video.width         = el.width
        video.height        = Math.ceil(video.width / ratio)
        video.marginTop     = Math.ceil(-((video.height - el.outerheight) / num.half))
        video.marginLeft    = 0

        // element height is smaller
        if (video.height < el.height) {
            video.marginTop   = Math.ceil(-((el.height - el.outerheight) / num.half))
            video.height      = el.height
            video.width       = Math.ceil(video.height * ratio)
            video.marginLeft  = Math.ceil(-((video.width - el.width) / num.half))
        }
    }

    // private
    _add(src) {
        // create container
        const container = document.createElement('div')
        container.className = ClassName.CONTAINER

        const el            = {}
        const video         = {}

        // calculate
        this._calc(el, video)

        // set style
        this._iframe.setAttribute('style', `width: ${video.width}px;height: ${video.height}px;margin-top: ${video.marginTop}px;margin-left: ${video.marginLeft}px`)

        this.loopArray(src.getAttribute('ya-option'), this.options)
        if (this.options.opacity) {
            this._iframe.style.cssText += `opacity: ${this.options.opacity}`
        }

        // iframe
        this._iframe.className    = ClassName.EMBED_ITEM
        this._iframe.src          = this.video(src)
        this._iframe.allow        = 'autoplay; encrypted-media'

        // add class
        this._element.classList.add(ClassName.EMBED)

        // append to elements
        this._element.appendChild(container)
        this._element.appendChild(this._iframe)
    }

    _get() {
        return this._add(this._element)
    }

    // static
    static _init() {
        const data = new Background(this)
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
        Background._init.call(el)
    })
})

export default Background
