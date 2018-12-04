import $ from 'jquery'
import WebFont from 'webfontloader'

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

const Theme = (() => {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    const FONTS  = 'Roboto:300,400,500,700,900'

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

        _webfont() {
            return WebFont.load({
                google: {
                    families: [FONTS]
                }
            })
        }

        // private
        _load() {
            this._bootstrap()
            this._webfont()
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

    return Theme
})(WebFont)

export default Theme
