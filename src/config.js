define(function(){
    var config = {}; 
    require.config({
        waitSeconds: 30,//超时时间(s)
        paths: {
            //组件配置
            'jquery': 'lib/jquery-1.9.1.min',
            'nicescroll': 'lib/jquery.nicescroll.min',
            'customevent': 'plugins/customevent',
            'ajax': 'plugins/ajax',
            'timer': 'plugins/timer',
            'tool': 'plugins/tool',
            'echarts': 'lib/echarts4/echarts.min',
            'china': 'lib/echarts4/china.correct',
            'localforage': 'lib/localforage/localforage.min',
            'api': 'api/index',

            'page1': 'modules/page1/index',
            'page1-carnum': 'modules/page1/modules/carnum',
            'page1-timeactive': 'modules/page1/modules/timeactive',
            'page1-agency': 'modules/page1/modules/agency',
            'page1-carseries': 'modules/page1/modules/carseries',
            'page1-provincecar': 'modules/page1/modules/provincecar'
        },
        /**
         * 给模块传递参数
         */
        config: {
            'ajax': {
                root: 'http://yapi.demo.qunar.com/mock/23844/'
            }
        }
    });
    return config;
});