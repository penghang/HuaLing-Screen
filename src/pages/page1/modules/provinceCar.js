import echarts from 'echarts'
import '@/lib/echarts4/china.correct.js'
import { pageTo } from '@/animation'
let page, hotChart, mapChart
const provinceLatLngs = {"台湾":[121.509062,25.044332],"河北":[115.402461,38.045474],"山西":[112.549248,37.857014],"内蒙古":[113.570801,43.018311],"辽宁":[123.429096,41.796767],"吉林":[125.3245,43.886841],"黑龙江":[127.642464,47.256967],"江苏":[119.367413,33.541544],"浙江":[120.153576,29.287459],"安徽":[117.283042,31.86119],"福建":[118.306239,26.075302],"江西":[115.892151,28.176493],"山东":[118.000923,36.675807],"河南":[113.665412,33.757975],"湖北":[112.298572,31.084355],"湖南":[111.982279,27.59409],"广东":[113.280637,23.125178],"广西":[108.320004,22.82402],"海南":[109.83119,19.031971],"四川":[104.065735,30.659462],"贵州":[106.713478,26.578343],"云南":[101.712251,24.840609],"西藏":[88.132212,31.660361],"陕西":[108.948024,34.263161],"甘肃":[104.223557,35.058039],"青海":[95.778916,35.623178],"宁夏":[106.278179,37.26637],"新疆":[86.017733,40.792818],"北京":[116.405285,40.104989],"天津":[117.190182,39.125596],"上海":[121.472644,31.231706],"重庆":[106.904962,29.533155],"香港":[114.173355,22.320048],"澳门":[113.54909,22.198951]}
const province = [
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
]
const initHotChart = function() {
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
    hotChart = echarts.init(page.querySelector('.js-hot-chart'));
    hotChart.setOption(option);
}
const initMapChart = function() {
    var option = {
        tooltip: {
            trigger: 'item'
        },
        visualMap: {
            min: 0,
            max: 100,
            range: [1, 100],
            inRange: {
                color: ["#00c6de", "#ff4b00"]
            },
            outOfRange: {
                color: ["#0191a4"]
            },
            textStyle: {
                color: "#e4ecee"
            },
            itemWidth: 12,
            itemHeight: 100,
            orient: "horizontal",
            left: 70,
            bottom: 10,
            text: ['高', '低'],
            calculable: false
        },
        series: [
            {
                top: 0,
                bottom: 0,
                name: '车辆数',
                type: 'map',
                mapType: 'china',
                selectedMode: 'single',
                roam: false,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 10,
                            color: '#fff'
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: 10,
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#024235'
                    },
                    emphasis: {
                        borderWidth: 1,
                        areaColor: "#2082d6"
                    }
                },
                data: province
            }
        ]
    };
    mapChart = echarts.init(page.querySelector(".js-map-chart"))
    mapChart.setOption(option, true);
    mapChart.on('mapselectchanged', () => {
        pageTo(3)
    })
}
const updateHotChart = function(data) {
    const hotMapDatas = [];
    data.forEach(function (p) {
        if (provinceLatLngs[p.name.replace('省', '')]) {
            hotMapDatas.push(provinceLatLngs[p.name.replace('省', '')].concat(p.total));
        }
    });
    const option = {
        series: [{
            data: hotMapDatas
        }]
    };
    hotChart.setOption(option);
}
const updateMapChart = function(data) {
    let max = 0;
    data.forEach(pc => {
        const f = province.filter(p => {
            return pc.name == p.name;
        })[0];
        if (f) {
            f.value = pc.total;
            max = pc.total > max ? pc.total : max;
        }
    });
    // province.forEach(function (p) {
    //     if (p.name === selecteProvince) {
    //         p.selected = true;
    //     } else if (p.selected) {
    //         delete p.selected;
    //     }
    // });
    mapChart.setOption({
        visualMap: {
            max: max,
            range: [1, max]
        },
        series: [
            {
                data: province
            }
        ]
    })
}
const updateProvinceList = function(data) {
    const chart = page.querySelector('.js-province-list');
    const frag = document.createDocumentFragment();
    data.slice(0, 10).forEach(row => {
        const li = document.createElement('li');
        li.className = 'process-row';
        const name = document.createElement('span');
        name.className = 'process-row-name';
        name.appendChild(document.createTextNode(row.name))
        li.appendChild(name);
        const processWrapper = document.createElement('span');
        processWrapper.className = 'process-wrapper';
        const process = document.createElement('span');
        process.className = 'process';
        process.style.width = (row.online / row.total * 100) + '%';
        processWrapper.appendChild(process);
        li.appendChild(processWrapper);
        const value = document.createElement('span');
        value.className = 'process-row-value';
        const highlight = document.createElement('span');
        highlight.className = 'hightlight-text';
        highlight.appendChild(document.createTextNode(row.online));
        value.appendChild(highlight);
        value.appendChild(document.createTextNode('/' + row.total));
        li.appendChild(value);
        frag.appendChild(li);
    });
    chart.innerHTML = ''
    chart.appendChild(frag);
}
const init = function() {
    page = document.getElementById('page1')
    initHotChart()
    initMapChart()
}
const update = function(data) {
    updateHotChart(data)
    updateMapChart(data)
    updateProvinceList(data)
}
console.log('load file modules/page1/modules/provincecar.js')
export default { init, update }