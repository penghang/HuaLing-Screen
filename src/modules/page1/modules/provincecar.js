define(['jquery', 'echarts'], function ($, echarts) {
    var $page = $('#page1');
    var provinceLatLngs = {"台湾":[121.509062,25.044332],"河北":[115.402461,38.045474],"山西":[112.549248,37.857014],"内蒙古":[113.570801,43.018311],"辽宁":[123.429096,41.796767],"吉林":[125.3245,43.886841],"黑龙江":[127.642464,47.256967],"江苏":[119.367413,33.541544],"浙江":[120.153576,29.287459],"安徽":[117.283042,31.86119],"福建":[118.306239,26.075302],"江西":[115.892151,28.176493],"山东":[118.000923,36.675807],"河南":[113.665412,33.757975],"湖北":[112.298572,31.084355],"湖南":[111.982279,27.59409],"广东":[113.280637,23.125178],"广西":[108.320004,22.82402],"海南":[109.83119,19.031971],"四川":[104.065735,30.659462],"贵州":[106.713478,26.578343],"云南":[101.712251,24.840609],"西藏":[88.132212,31.660361],"陕西":[108.948024,34.263161],"甘肃":[104.223557,35.058039],"青海":[95.778916,35.623178],"宁夏":[106.278179,37.26637],"新疆":[86.017733,40.792818],"北京":[116.405285,40.104989],"天津":[117.190182,39.125596],"上海":[121.472644,31.231706],"重庆":[106.904962,29.533155],"香港":[114.173355,22.320048],"澳门":[113.54909,22.198951]};
    var province = [
        { name: '北京', value: 0 },
        { name: '天津', value: 0 },
        { name: '上海', value: 0 },
        { name: '重庆', value: 0 },
        { name: '河北', value: 0 },
        { name: '河南', value: 0 },
        { name: '云南', value: 0 },
        { name: '辽宁', value: 0 },
        { name: '黑龙江', value: 0 },
        { name: '湖南', value: 0 },
        { name: '安徽', value: 0 },
        { name: '山东', value: 0 },
        { name: '新疆', value: 0 },
        { name: '江苏', value: 0 },
        { name: '浙江', value: 0 },
        { name: '江西', value: 0 },
        { name: '湖北', value: 0 },
        { name: '广西', value: 0 },
        { name: '甘肃', value: 0 },
        { name: '山西', value: 0 },
        { name: '内蒙古', value: 0 },
        { name: '陕西', value: 0 },
        { name: '吉林', value: 0 },
        { name: '福建', value: 0 },
        { name: '贵州', value: 0 },
        { name: '广东', value: 0 },
        { name: '青海', value: 0 },
        { name: '西藏', value: 0 },
        { name: '四川', value: 0 },
        { name: '宁夏', value: 0 },
        { name: '海南', value: 0 },
        { name: '台湾', value: 0 },
        { name: '香港', value: 0 },
        { name: '澳门', value: 0 },
        { name: '南海诸岛', value: 0 }
    ];
    var hotChart = null;
    function initHotChart() {
        var option = {
            visualMap: {
                show: false,
                min: 0,
                max: 15000,
                splitNumber: 5,
                inRange: {
                    color: ['#d94e5d','#eac736','#50a3ba'].reverse()
                }
            },
            geo: {
                top: 0,
                bottom: 0,
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                silent: true,
                itemStyle: {
                    normal: {
                        areaColor: 'transparent',
                        borderColor: '#00454d'
                    }
                }
            },
            series: [{
                type: 'heatmap',
                coordinateSystem: 'geo',
                pointSize: 10,
                blurSize: 20,
                data:[]
            }]
        };
        hotChart = echarts.init($page.find('.js-hot-chart')[0]);
        hotChart.setOption(option);
    }
    function updateHotChart(data) {
        var hotMapDatas = [];
        data.forEach(function(p){
            if (provinceLatLngs[p.name.replace('省', '')]) {
                hotMapDatas.push(provinceLatLngs[p.name.replace('省', '')].concat(p.total));
            }
        });
        var option = {
            series: [{
                data: hotMapDatas
            }]
        };
        hotChart.setOption(option);
    }
    return {
        init: function() {
            initHotChart();
        },
        update: function(data) {
            updateHotChart(data);
        }
    }
});