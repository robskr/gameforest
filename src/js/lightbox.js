/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: lightbox.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.2
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

const DATA                   = 'ya-lightbox'
const DATA_KEY               = `[${DATA}]`
const VERSION                = '1.0.0'

const ClassName = {
    LIGHTBOX        : DATA,
    BACKDROP        : `${DATA}-backdrop`,
    CLOSE           : `${DATA}-close`,
    BODY            : `${DATA}-body`,
    IFRAME          : 'embed-responsive embed-responsive-16by9',
    IFRAME_ITEM     : 'embed-responsive-item',
    IMAGE           : `${DATA}-img`,
    ITEM            : `${DATA}-item`,
    FACEBOOK        : 'ya-facebook',
    DISQUS          : 'ya-disqus'
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Lightbox extends Helpers {
    constructor(element) {
        super()
        this._element       = element
        this._attr          = element.getAttribute('href')
        this._data          = element.getAttribute(DATA)
        this._rel           = element.getAttribute('rel')
    }

    static get VERSION() {
        return VERSION
    }

    // private
    _add(src) {
        // define types
        const youtube                    = this._attr.includes('youtube.com/watch')
        const twitch                     = this._attr.includes('twitch')

        // create elements
        const lightbox                   = document.createElement('div')
        lightbox.backdrop                = document.createElement('div')
        lightbox.body                    = document.createElement('div')
        lightbox.item                    = document.createElement('div')
        lightbox.close                   = document.createElement('div')

        // add classes
        lightbox.className               = ClassName.LIGHTBOX
        lightbox.body.className          = ClassName.BODY
        lightbox.close.className         = ClassName.CLOSE
        lightbox.backdrop.className      = ClassName.BACKDROP

        // add effect
        lightbox.body.classList.add('animated', 'fast', 'fadeIn', 'animate1')
        lightbox.backdrop.classList.add('animated', 'fadeIn', 'fast')

        // add lightbox
        document.body.appendChild(lightbox)
        lightbox.appendChild(lightbox.body)
        lightbox.item.appendChild(lightbox.close)
        lightbox.appendChild(lightbox.backdrop)

        // check type
        if (this._rel) {
            this._gallery(lightbox) // append gallery
        } else if (youtube || twitch) {
            this._video(lightbox, src) // append video
        } else {
            this._image(lightbox) // append image
        }

        if (this._data) {
            this.loopArray(this._data, this.options)
            lightbox.option = this.options
            if (lightbox.option.disqus || lightbox.option.facebook) {
                this._comments(lightbox)
            }
        }

        // remove lightbox
        lightbox.item.addEventListener('click', (e) => {
            e.preventDefault()

            if (!lightbox.element.contains(e.target)) {
                if (lightbox.carousel) {
                    if (!lightbox.element.contains(e.target) && !lightbox.carousel.contains(e.target)) {
                        this._remove(lightbox)
                    }
                } else {
                    this._remove(lightbox)
                }
            }

            return false
        }, false)

        return true
    }

    // gallery
    _gallery(lightbox) {
        lightbox.item.className       = `${ClassName.ITEM} ya-lightbox-gallery`
        lightbox.element              = document.createElement('img')
        lightbox.element.className    = ClassName.IMAGE
        lightbox.element.src          = this._attr
        lightbox.carousel             = document.createElement('div')
        lightbox.carousel.className   = 'owl-carousel owl-carousel-theme'

        // append gallery
        lightbox.body.appendChild(lightbox.item)
        lightbox.item.appendChild(lightbox.carousel)
        lightbox.carousel.appendChild(lightbox.element)

        // detect gallery
        document.querySelectorAll(`${DATA_KEY}[rel=${this._rel}]`).forEach((el) => {
            if (this._attr !== el.getAttribute('href')) {
                lightbox.element              = document.createElement('img')
                lightbox.element.className    = ClassName.IMAGE
                lightbox.element.src          = el.getAttribute('href')
                // append gallery
                lightbox.carousel.appendChild(lightbox.element)
            }
        })

        $('.owl-carousel-theme').owlCarousel({
            loop: true,
            nav: true,
            items: 1
        })

        return true
    }

    // video
    _video(lightbox, src) {
        lightbox.item.className             = ClassName.ITEM
        lightbox.element                    = document.createElement('iframe')
        lightbox.element.className          = ClassName.IFRAME_ITEM
        lightbox.element.src                = this.video(src)
        lightbox.embed                      = document.createElement('div')
        lightbox.embed.className            = ClassName.IFRAME

        // append iframe
        lightbox.body.appendChild(lightbox.item)
        lightbox.item.appendChild(lightbox.embed)
        lightbox.embed.appendChild(lightbox.element)

        return true
    }

    // image
    _image(lightbox) {
        lightbox.item.className         = ClassName.ITEM
        lightbox.element                = document.createElement('img')
        lightbox.element.className      = ClassName.IMAGE
        lightbox.element.src            = this._attr

        // append image
        lightbox.body.appendChild(lightbox.item)
        lightbox.item.appendChild(lightbox.element)

        return true
    }

    _comments(lightbox) {
        lightbox.item.classList.add('ya-lightbox-comment')
        lightbox.comments                = document.createElement('div')
        lightbox.comments.className      = 'ya-lightbox-comments'
        lightbox.comment                 = document.createElement('div')

        // append comment
        lightbox.body.appendChild(lightbox.comments)

        if (lightbox.option.disqus) {
            lightbox.comment.id = 'disqus_thread'
            lightbox.comment.setAttribute(ClassName.DISQUS, '')
            lightbox.comments.appendChild(lightbox.comment)
            this.disqus(`[${ClassName.DISQUS}]`)
        }

        if (lightbox.option.facebook) {
            lightbox.comment.className = 'fb-comments'
            lightbox.comment.setAttribute(ClassName.FACEBOOK, '')
            lightbox.comment.setAttribute('data-width', '100%')
            lightbox.comment.setAttribute('data-numposts', '10')
            lightbox.comments.appendChild(lightbox.comment)
            this.facebook(`[${ClassName.FACEBOOK}]`)
        }

        return true
    }

    _remove(lightbox) {
        return document.body.removeChild(lightbox)
    }

    _get() {
        this._element.addEventListener('click', (e) => {
            e.preventDefault()

            this._add(this._element)
        }, false)
    }

    // static
    static _init() {
        const data = new Lightbox(this)
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
        Lightbox._init.call(el)
    })
})

export default Lightbox
