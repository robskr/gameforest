/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: helpers.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.2
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const DATA_OPTION            = 'ya-option'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Helpers {
    constructor() {
        this.options        = []
    }

    loopArray(element, value) {
        if (element.substring(element.length - 1) === ';') {
            element = element.substring(0, element.length - 1)
        }
        return element.split(';').forEach((s) => {
            const arr = s.split(':')
            value[this.replaceString(arr[0])] = this.replaceString(arr[1])
        })
    }

    replaceString(string) {
        return string.replace(/\s/g, '')
    }

    disqus(selector) {
        const script = document.createElement('script')
        const iframe = document.createElement('div')

        // create script for header
        script.src = `https://${window.gameforest.disqus}.disqus.com/embed.js`
        script.setAttribute('data-timestamp', +Number(new Date()))

        iframe.id = 'disqus_thread'

        document.querySelector(selector).appendChild(iframe)

        // append script
        document.head.appendChild(script)
        document.body.appendChild(script)

        return true
    }

    facebook(selector) {
        const script    = document.createElement('script')
        const root      = document.createElement('div')
        const iframe    = document.createElement('div')

        script.src = `https://connect.facebook.net/${window.gameforest.facebook.lang}/sdk.js#xfbml=1&version=${window.gameforest.facebook.version}&appId=${window.gameforest.facebook.id}`
        root.id = 'fb-root'

        iframe.className = 'fb-comments'
        iframe.setAttribute('data-width', '100%')
        iframe.setAttribute('data-numposts', '10')
        iframe.setAttribute('data-href', window.location.href)

        document.querySelector(selector).appendChild(iframe)

        if (!document.getElementById(root.id)) {
            document.body.appendChild(script)
            document.body.appendChild(root)
        }

        return true
    }

    vimeo(option) {
        // check data option
        if (option) {
            this.loopArray(option, this.options)
        }

        // player
        const player = {
            autoplay:   this.options.autoplay ? this.options.autoplay : 1,
            loop:       this.options.loop ? 1 : 0,
            quality:    this.options.quality ? this.options.quality : '1080p',
            mute:       this.options.mute ? this.options.mute : 0
        }

        return `?autoplay=${player.autoplay}&amp;muted=${player.mute}&amp;quality=${player.quality}&amp;loop=${player.loop}`
    }

    youtube(option, id) {
        // check data option
        if (option) {
            this.loopArray(option, this.options)
        }

        // player
        const player = {
            controls:   this.options.controls ? this.options.controls : 1,
            autoplay:   this.options.autoplay ? this.options.autoplay : 1,
            mute:       this.options.mute ? this.options.mute : 0,
            loop:       this.options.loop ? `${this.options.loop}&amp;playlist=${id}` : 0,
            recommends: this.options.recommends ? this.options.recommends : 0,
            start:      this.options.start ? this.options.start : 0
        }

        return `?rel=0&amp;autoplay=${player.autoplay}&amp;controls=${player.controls}&amp;mute=${player.mute}&amp;start=${player.start}&amp;loop=${player.loop}`
    }

    video(src) {
        // get option data attribute
        const option = src.getAttribute(DATA_OPTION)

        // youtube
        if (this._attr.includes('youtube')) {
            const id = this._attr.split('v=')[1]
            src = `https://www.youtube.com/embed/${id + this.youtube(option, id)}`
        }

        // vimeo
        if (this._attr.includes('vimeo')) {
            const id = this._attr.split('https://vimeo.com/')[1]
            src = `https://player.vimeo.com/video/${id + this.vimeo(option)}`
        }

        // twitch
        if (this._attr.includes('twitch')) {
            if (this._attr.split('clips.twitch.tv/')[1]) {
                const id = this._attr.split('clips.twitch.tv/')[1]
                src = `https://clips.twitch.tv/embed?autoplay=true&clip=${id}&tt_content=embed&tt_medium=clips_embed`
            } else {
                const id = this._attr.split('videos/')[1]
                src = `https://player.twitch.tv/?autoplay=true&video=v${id}`
            }
        }

        return src
    }
}

export default Helpers
