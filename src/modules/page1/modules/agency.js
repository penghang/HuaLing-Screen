define(['jquery', 'echarts'], function ($, echarts) {
    var $page = $('#page1');
    var $doms = {};
    var chart = null;
    var defaults = {
        grid: {
            left: 50,
            right: 20,
            top: 20,
            bottom: 20
        },
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#16b1f9' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#00f1ff' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },
        xAxis: {
            type : 'category',
            axisTick: {
                inside: true
            },
            axisLabel: {
                color: '#7b7e85'
            },
            axisLine: {
                lineStyle: {
                    color: "#133b43"
                }
            },
            data : []
        },
        yAxis: {
            type : 'value',
            axisTick: {
                show: false  
            },
            axisLabel: {
                color: '#7b7e85'
            },
            axisLine: {
                lineStyle: {
                    color: "#133b43"
                }
            },
            splitLine: {
                show: false
            }
        },
        series : [
            {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[],
                itemStyle: {
                    barBorderRadius: [3,3,0,0]
                }
            }
        ]
    };
    return {
        init: function() {
            $doms = {
                num: $page.find('.js-agency-num'),
                chart: $page.find('.js-agency-chart')
            };
            chart = echarts.init($doms.chart[0]);
            chart.setOption(defaults);
        },
        update: function(data) {
            var x = [], y = [];
            data.list.forEach(function(row){
                x.push(row.name);
                y.push(row.num);
            });
            var option = {
                xAxis: {
                    data: x
                },
                series: [{
                    data: y
                }]
            };
            chart.setOption(option);
            $doms.num.html(data.total);
        }
    };
});