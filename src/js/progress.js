/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: progress.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.1
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const DATA                   = '.progress-loaded'
const VERSION                = '1.0.0'

const Selector = {
  VALUE       : 'aria-valuenow',
  BAR         : '.progress-bar'
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Progress {
  constructor(element) {
    this._element       = element
    this._bar           = element.querySelector(Selector.BAR)
    this._value         = this._bar.getAttribute(Selector.VALUE)
  }

  static get VERSION() {
    return VERSION
  }

  _get() {
    let current = 0

    setInterval((el) => {
      if (current >= this._value) {
        clearInterval(el)
      } else {
        current += 1
        this._bar.style.setProperty('width', `${current}%`)
      }
    }, 0)

    return true
  }

  // static
  static _init() {
    const data = new Progress(this)
    data._get()
  }
}

/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(DATA).forEach((el) => {
    Progress._init.call(el)
  })
})

export default Progress
