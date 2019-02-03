/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: disqus.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.1
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */

import Helpers from './helpers'

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

export default Disqus
