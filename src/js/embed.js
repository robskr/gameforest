/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: embed.js
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

const DATA                   = 'ya-embed'
const DATA_KEY               = `[${DATA}]`
const DATA_TITLE             = 'ya-title'
const DATA_LENGTH            = 'ya-length'
const VERSION                = '1.0.0'

const ClassName = {
    ITEM          : 'embed-item',
    TITLE         : 'embed-title',
    LENGTH        : 'embed-length'
}

const Selector = {
    EMBED            : '.embed',
    CAPTION          : '.embed-caption',
    IFRAME           : `.${ClassName.EMBED_ITEM}`
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Embed extends Helpers {
    constructor(element) {
        super()
        this._element       = element
        this._attr          = element.getAttribute(DATA)
        this._title         = element.getAttribute(DATA_TITLE)
        this._length        = element.getAttribute(DATA_LENGTH)
        this._item          = element.querySelector('img')
        this._embed         = element.querySelector(Selector.EMBED)
        this._iframe        = element.querySelector(Selector.IFRAME)
    }

    static get VERSION() {
        return VERSION
    }

    caption() {
        const caption   = document.createElement('div')

        // caption
        caption.className = 'embed-caption'
        this._element.appendChild(caption)

        if (this._title) {
            const title     = document.createElement('div')
            title.className = ClassName.TITLE
            title.innerText = this._title
            caption.appendChild(title)
        }

        if (this._length) {
            const length    = document.createElement('div')
            length.className = ClassName.LENGTH
            length.innerText = this._length
            caption.appendChild(length)
        }
    }

    _set() {
        this._item.classList.add(ClassName.ITEM)
        this._element.classList.add('embed', 'embed-responsive', 'embed-responsive-16by9')

        if (this._title || this._length) {
            this.caption()
        }

        return true
    }

    _remove() {
        this._item.classList.add('animated', 'fadeOut')

        // animated caption
        if (this._title || this._length) {
            this._element.querySelector(Selector.CAPTION).classList.add('animated', 'fadeOut')
        }

        return true
    }

    // private
    _add(src) {
        // create an element
        const iframe        = document.createElement('iframe')

        // iframe
        iframe.className    = ClassName.ITEM
        iframe.src          = this.video(src)
        iframe.setAttribute('allowFullScreen', '')
        iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture')

        // class when clicked
        this._element.classList.add('play')
        this._remove()

        // append iframe
        return this._element.appendChild(iframe)
    }

    _get() {
        // set classes
        this._set()

        // click event
        this._element.addEventListener('click', e => {
            e.preventDefault()

            return this._add(this._element)
        }, false)
    }

    // static
    static _init() {
        const data = new Embed(this)
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
        Embed._init.call(el)
    })
})

export default Embed
