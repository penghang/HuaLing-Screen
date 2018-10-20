define(['echarts', 'jquery', 'china', 'api', 'customevent', 'localforage', 
    'page1-carnum', 'page1-timeactive', 'page1-agency', 'page1-carseries', 'page1-provincecar'], 
    function (echarts, $, c, Api, CustomEvent, lf, c1, c2, c3, c4, c5) {
    var lfStore = lf.createInstance({name: 'guest'});
    var modules = [
        { name: 'CarNum', module: c1 },
        { name: 'TimeActive', module: c2 },
        { name: 'Agency', module: c3 },
        { name: 'CarSeries', module: c4},
        { name: 'ProvinceCar', module: c5 }
    ];
    modules.forEach(function(m) {
        m.module.init();
        Api['get' + m.name]().then(function(data){
            m.module.update(data);
        });
    });
    var version = 1;
    var lfKeys = {
        version: 'version',
        carnum: 'carnum'
    };
    return;

    /**
     * 加载本地缓存
     */
    // function loadLocal(){
    //     lfStore.getItem(lfKeys.version).then(function(data){
    //         if(data == version) {
    //             lfStore.getItem(lfKeys.timeactive).then(function(data){
    //                 data && renderActiveChart(data);
    //             });
    //             lfStore.getItem(lfKeys.hotcartype).then(function(data){
    //                 data && renderHotCarType(data);
    //             });
    //             lfStore.getItem(lfKeys.cloudinfo).then(function(data){
    //                 data && renderCloudInfo(data);
    //             });
    //             lfStore.getItem(lfKeys.totalmileage).then(function(data){
    //                 data && renderMileage(data);
    //             });
    //             lfStore.getItem(lfKeys.statistics).then(function(data){
    //                 data && renderStatisticsNum(data);
    //             });
    //             lfStore.getItem(lfKeys.citydata).then(function(data){
    //                 data && renderCityData(data);
    //             });
    //             lfStore.getItem(lfKeys.top5city).then(function(data){
    //                 if (data) {
    //                     top5city = data;
    //                     renderTop5City(top5city);
    //                 }
    //             });
    //         } else {
    //             lfStore.clear();
    //             lfStore.setItem(lfKeys.version, version);
    //         }
    //     });
    // }
});