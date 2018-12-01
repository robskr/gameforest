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
 * @since     1.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 */

const Disqus = (() => {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    const DATA                   = 'ya-disqus'
    const DATA_KEY               = `[${DATA}]`
    const VERSION                = '1.0.0'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    class Disqus extends Helpers {
        constructor(element) {
            super()
            this._element       = element
            this._attr          = element.getAttribute(DATA)
        }

        static get VERSION() {
            return VERSION
        }

        _get() {
            return this.disqus(DATA_KEY)
        }

        // static
        static _init() {
            const data = new Disqus(this)
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
            Disqus._init.call(el)
        })
    })

    return Disqus
})()

export default Disqus
