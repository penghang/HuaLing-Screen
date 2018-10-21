/**
 * 定时器
 * @module 定时器
 */
define(["jquery", "ajax"], function ($, Ajax) {
    var defaults = {
        auto: true,
        async: false,
        ajax: false,
        url: null,
        data: null,
        fn: null,
        scope: null,
        delay: false,
        count: "infinite",
        interval: 10 * 1000
    };
    /**
     * 定时器类
     * @class Timer
     * @constructor
     * @demo timer/timer-normal.html {普通}
     * @demo timer/timer-async.html {异步}
     * @param {Object} opt
     * @param {Boolean} [opt.auto] - 是否自动开始.默认true
     * @param {Boolean} [opt.async] - 是否为异步,如果定时执行的方法有延迟执行时,需要指定async为true,并在延迟执行完成后调用asyncDone通知定时器执行完毕可以开始下一次记时.默认false
     * @param {Boolean} [opt.ajax] - 是否为Ajax定时器,定时执行Ajax请求,为true时,async总是true.默认false
     * @param {String} [opt.url] - ajax为true时,请求的url
     * @param {Object} [opt.data] - ajax为true时,请求的参数
     * @param {Function} opt.fn - 定时执行的函数,ajax为true时会将请求的结果传递给回掉函数
     * @param {Object} [opt.scope] - 执行域,this指向,默认指向定时器
     * @param {Boolean} [opt.delay] - 第一次是否延迟执行,默认false不延迟
     * @param {(String|Number)} [opt.count] - 如果是数字,为执行次数,默认为infinite无限循环
     * @param {Number} [opt.interval] - 执行间隔.默认10s即10*1000
     */
    var Timer = function (opt) {
        this._init($.extend({}, defaults, opt));
        return this;
    };
    Timer.prototype = {
        constructor: Timer,
        _init: function (opt) {
            this._opt = opt;
            this._first = true;
            this._interval = 0;
            this._count = 0;
            this._running = false;
            if (this._opt.ajax) {
                this._opt.async = true;
            }
            if (opt.auto) {
                this.start();
            }
        },
        _exec: function () {
            var that = this;
            var scope = this._opt.scope || this;
            if (that._interval != undefined &&
				(that._opt.count === "infinite" || (that._opt.count !== "infinite" && that._count < that._opt.count))) {
                that._interval = setTimeout(function () {
                    that._count++;
                    that._exec();
                    if (that._opt.ajax) {
                        that._ajax();
                    } else {
                        if (that._opt.async) {
                            that._wait();
                        }
                        that._opt.fn.call(scope);
                    }
                }, that._opt.interval);
                if (this._first) {
                    this._first = false;
                    if (!that._opt.delay) {
                        that._count++;
                        if (that._opt.ajax) {
                            that._ajax();
                        } else {
                            if (that._opt.async) {
                                that._wait();
                            }
                            that._opt.fn.call(scope);
                        }
                    }
                }
            }
        },
        _ajax: function () {
            var that = this;
            var opt = this._opt;
            var scope = opt.scope || this;
            this._wait();
            Ajax({
                url: opt.url,
                data: opt.data
            })
            .success(function (result) {
                opt.fn.call(scope, true, result);
            })
            .error(function (jqXHR, textStatus) {
                opt.fn.call(scope, false, jqXHR, textStatus);
            })
            .always(function () {
                that.asyncDone();
            });
        },
        _wait: function () {
            this._waitting = true;
            clearTimeout(this._interval);
        },
        _continue: function () {
            this._waitting = false;
            this._exec();
        }
    };
    /**
     * 开启定时器
     * @method start
     */
    Timer.prototype.start = function () {
        if (this._running || this._destroy) {
            return;
        }
        this._running = true;
        this._exec();
    };
    /**
     * 停止定时器
     * @method stop
     */
    Timer.prototype.stop = function () {
        this._running = false;
        this._waitting = false;
        clearTimeout(this._interval);
    };
    /**
     * 获取执行次数
     * @method getCount
     */
    Timer.prototype.getCount = function () {
        return this._count;
    };
    /**
     * 当async为true时,异步执行完成后通知Timer开始下一次计时
     * @method asyncDone
     */
    Timer.prototype.asyncDone = function () {
        if (this._opt.async && this._running && this._waitting) {
            this._continue();
        }
    };
    /**
     * 销毁定时器
     * @method destroy 
     */
    Timer.prototype.destroy = function () {
        this.stop();
        this._destroy = true;
        this._opt.fn = function () { };
    };
    return Timer;
});