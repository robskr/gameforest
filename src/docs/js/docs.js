import $ from 'jquery'

const Docs = (() => {
    class Docs {
        // private
        _load() {
            $('.sticky').sticky({
                topSpacing: 100,
                zIndex: 3
            })
        }

        // static
        static _init() {
            const data = new Docs()
            data._load()
        }
    }

    /**
     * ------------------------------------------------------------------------
     * Load Event
     * ------------------------------------------------------------------------
    */

    document.addEventListener('DOMContentLoaded', () => {
        Docs._init.call()
    })

    return Docs
})()

export default Docs
