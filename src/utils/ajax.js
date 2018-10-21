/**
 * <p>Ajax请求模块</p>
 * <p>基于jQuery的ajax,使用Deferred</p>
 * @module Ajax请求
 */
/**
 * Ajax静态类,约定返回json类型,读取读取返回数据的success字段判定本次请求是否成功
 * @class Ajax
 */
define(["jquery", "module"], function ($, module) {
    var root = module.config().root;
    var defaultOption = {
        async: true,
        timeout: 30000,
        dataType: "json",
        data: {},
        type: "get"
    };
    /**
     * 发送ajax请求
     * @method Ajax
     * @demo ajax/ajax.html
     * @param {Object} option
     * @param {String} option.url - 请求地址
     * @param {Boolean} [option.async]
     * @param {Number} [option.timeout=30000] - 超时时间
     * @param {String} [option.dataType=json] - 请求数据类型
     * @param {Object} [option.data] - 参数
     * @param {String} [option.type=get] - 请求类型
     * @returns {AjaxPromise} 一个promise对象
     */
    function Ajax(option) {
        var dtd = $.Deferred();
        var opt = $.extend(true, {}, defaultOption, option),
            type = "get",
            url, success, error, always, defaultResult;
        if(opt.url.indexOf("http") != 0){
            opt.url = root + opt.url;
        }
        if(opt.type == "get"){
            if(opt.url.indexOf("?")>0){
                opt.url += "&_t=" + Date.parse(new Date());
            }else{
                opt.url += "?_t=" + Date.parse(new Date());
            }
        }
        if (opt.crossDomain) {
            opt.xhrFields = {
                withCredentials: true
            };
        }
        //配置回调
        success = opt.success;
        error = opt.error;
        opt.success = null;
        opt.error = null;
        var r = $.ajax(opt)
        .done(function (data, textStatus, jqXHR) {
            if (data.success !== false) {
                dtd.resolve(data);
                success && success(data);
            } else {
                dtd.reject(jqXHR, "error");
                error && error(jqXHR, "error");
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            dtd.reject(jqXHR, textStatus);
            error && error(jqXHR, textStatus);
        });
        var obj = {
            success: dtd.done,
            error: dtd.fail,
            abort: r.abort
        };
        /**
         * AjaxPromise对象
         * @class AjaxPromise
         */
        /**
         * 成功回调
         * @method success
         */
        /**
         * 失败回调
         * @method error
         */
        /**
         * 成功回调
         * @method done
         */
        /**
         * 失败回调
         * @method fail
         */
        dtd.promise(obj);
        return obj;
    }
    return Ajax;
});