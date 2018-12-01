(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
	typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
	(factory((global.gameforest = {}),global.jQuery));
}(this, (function (exports,$) { 'use strict';

$ = $ && $.hasOwnProperty('default') ? $['default'] : $;

var Scroll = function ($$$1) {
  var Scroll =
  /*#__PURE__*/
  function () {
    function Scroll() {}

    var _proto = Scroll.prototype;

    // private
    _proto._load = function _load() {
      $$$1('.nav-link').on('click', function (event) {
        var target = $$$1(this.getAttribute('href'));
        var num = 500;

        if (target.length) {
          event.preventDefault();
          $$$1('html, body').stop().animate({
            scrollTop: target.offset().top
          }, num);
        }
      });
    }; // static


    Scroll._init = function _init() {
      var data = new Scroll();

      data._load();
    };

    return Scroll;
  }();
  /**
   * ------------------------------------------------------------------------
   * Load Event
   * ------------------------------------------------------------------------
  */


  document.addEventListener('DOMContentLoaded', function () {
    Scroll._init.call();
  });
  return Scroll;
}($);

exports.Scroll = Scroll;

Object.defineProperty(exports, '__esModule', { value: true });

})));
