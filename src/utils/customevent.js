/**
 * <p>自定义事件基类</p>
 * <p>实例化一个事件对象,即可通过on和off注册和移除事件监听,事件会在调用fire时触发</p>
 * @module 自定义事件
 * @class CustomEvent
 */
define(function () {
    /**
     * @class CustomEvent
     * @constructor
     * @demo customevent/customevent.html {基本}
     * @demo customevent/customevent-mul.html {多次监听}
     * @demo customevent/customevent-off.html {取消监听}
     */
    var CustomEvent = function () {
        this._events = {};
    };
    CustomEvent.prototype = {
        /**
         * 触发事件
         * @method fire
         * @param {string} event - 事件名称
         * @param {...*} [params] - 作为参数传递给监听者
         */
        fire: function (e) {
            var that = this;
            var len = arguments.length;
            var arr = [];
            for (var i = 1; i < len; i++) {
                arr.push(arguments[i]);
            }
            var events = that._events;
            if (events[e]) {
                events[e].forEach(function (fn) {
                    fn.apply(that, arr);
                });
            }
        },
        /**
         * 监听事件,可以多次监听
         * @method on
         * @param {string} event - 事件名称
         * @param {function} fn - 回调函数
         */
        on: function (event, fn) {
            if (this._events[event]) {
                this._events[event].push(fn);
            } else {
                this._events[event] = [fn];
            }
        },
        /**
         * 移除事件监听
         * @method off
         * @param {string} event - 事件名称
         * @param {function} [fn] - 监听时的回调函数,如果为空则移除该事件的所有回调函数
         */
        off: function (event, fn) {
            var fnArr,index;
            if (fnArr = this._events[event]) {
                if (fn) {
                    index = fnArr.indexOf(fn);
                    if (index > -1) {
                        fnArr.splice(index, 1);
                    }
                    if (!fnArr.length) {
                        delete this._events[event];
                    }
                } else {
                    delete this._events[event];
                }
            }
        }
    };
    return CustomEvent;
});