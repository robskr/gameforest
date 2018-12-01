import $ from 'jquery'

const Scroll = (($) => {
    class Scroll {
        // private
        _load() {
            $('.nav-link').on('click', function (event) {
                const target = $(this.getAttribute('href'))
                const num = 500

                if (target.length) {
                    event.preventDefault()
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top
                    }, num)
                }
            })
        }

        // static
        static _init() {
            const data = new Scroll()
            data._load()
        }
    }

    /**
     * ------------------------------------------------------------------------
     * Load Event
     * ------------------------------------------------------------------------
    */

    document.addEventListener('DOMContentLoaded', () => {
        Scroll._init.call()
    })

    return Scroll
})($)

export default Scroll
