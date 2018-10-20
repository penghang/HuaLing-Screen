define(['ajax'], function (Ajax) {
    var Api = {
        /**
         * 车辆统计数
         */
        getCarNum: function() {
            return Ajax({
                url: 'getCarNum'
            });
        },
        /**
         * 各小时在线数
         */
        getTimeActive: function() {
            return Ajax({
                url: 'getTimeActive'
            });
        },
        /**
         * 经销商统计
         */
        getAgency: function() {
            return Ajax({
                url: 'getAgency'
            });
        },
        /**
         * 车系
         */
        getCarSeries: function() {
            return Ajax({
                url: 'getCarSeries'
            });
        },
        /**
         * 省份车辆统计
         */
        getProvinceCar: function() {
            return Ajax({
                url: 'getProvinceCar'
            });
        }
    };
    return Api;
});