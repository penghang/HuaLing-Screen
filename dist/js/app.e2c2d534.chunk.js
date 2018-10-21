(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: getCarNum, getTimeActive, getAgency, getCarSeries, getProvinceCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCarNum\", function() { return getCarNum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTimeActive\", function() { return getTimeActive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAgency\", function() { return getAgency; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCarSeries\", function() { return getCarSeries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProvinceCar\", function() { return getProvinceCar; });\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ \"./src/utils/request.js\");\n\n/**\r\n * 车辆统计数\r\n */\n\nfunction getCarNum() {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: 'getCarNum',\n    method: 'get'\n  });\n}\n;\n/**\r\n * 各小时在线数\r\n */\n\nfunction getTimeActive() {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: 'getTimeActive',\n    method: 'get'\n  });\n}\n;\n/**\r\n * 经销商统计\r\n */\n\nfunction getAgency() {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: 'getAgency',\n    method: 'get'\n  });\n}\n;\n/**\r\n * 车系\r\n */\n\nfunction getCarSeries() {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: 'getCarSeries',\n    method: 'get'\n  });\n}\n;\n/**\r\n * 省份车辆统计\r\n */\n\nfunction getProvinceCar() {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: 'getProvinceCar',\n    method: 'get'\n  });\n}\n;\n\n//# sourceURL=webpack:///./src/api/index.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_page1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/page1 */ \"./src/modules/page1/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modules/page1/index.js":
/*!************************************!*\
  !*** ./src/modules/page1/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_carnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/carnum */ \"./src/modules/page1/modules/carnum.js\");\n/* harmony import */ var _modules_agency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/agency */ \"./src/modules/page1/modules/agency.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api */ \"./src/api/index.js\");\n\n\n\nObject(_api__WEBPACK_IMPORTED_MODULE_2__[\"getCarNum\"])().then(function (response) {\n  _modules_carnum__WEBPACK_IMPORTED_MODULE_0__[\"default\"].update(response.data);\n});\nObject(_api__WEBPACK_IMPORTED_MODULE_2__[\"getAgency\"])().then(function (response) {\n  _modules_agency__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update(response.data);\n});\n\n//# sourceURL=webpack:///./src/modules/page1/index.js?");

/***/ }),

/***/ "./src/modules/page1/modules/agency.js":
/*!*********************************************!*\
  !*** ./src/modules/page1/modules/agency.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ \"./node_modules/echarts/index.js\");\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_0__);\n // // 引入柱状图\n// require('echarts/lib/chart/bar');\n// // 引入提示框和标题组件\n// require('echarts/lib/component/tooltip');\n// require('echarts/lib/component/title');\n\nvar page = document.querySelector('#page1');\nvar doms = {\n  num: page.querySelector('.js-agency-num'),\n  chart: page.querySelector('.js-agency-chart')\n};\nvar defaults = {\n  grid: {\n    left: 50,\n    right: 20,\n    top: 20,\n    bottom: 20\n  },\n  color: {\n    type: 'linear',\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n      offset: 0,\n      color: '#16b1f9' // 0% 处的颜色\n\n    }, {\n      offset: 1,\n      color: '#00f1ff' // 100% 处的颜色\n\n    }],\n    globalCoord: false // 缺省为 false\n\n  },\n  xAxis: {\n    type: 'category',\n    axisTick: {\n      inside: true\n    },\n    axisLabel: {\n      color: '#7b7e85'\n    },\n    axisLine: {\n      lineStyle: {\n        color: \"#133b43\"\n      }\n    },\n    data: []\n  },\n  yAxis: {\n    type: 'value',\n    axisTick: {\n      show: false\n    },\n    axisLabel: {\n      color: '#7b7e85'\n    },\n    axisLine: {\n      lineStyle: {\n        color: \"#133b43\"\n      }\n    },\n    splitLine: {\n      show: false\n    }\n  },\n  series: [{\n    type: 'bar',\n    barWidth: '60%',\n    data: [],\n    itemStyle: {\n      barBorderRadius: [3, 3, 0, 0]\n    }\n  }]\n};\nvar chart = echarts__WEBPACK_IMPORTED_MODULE_0___default.a.init(doms.chart);\nchart.setOption(defaults);\n\nvar update = function update(data) {\n  var x = [],\n      y = [];\n  data.list.forEach(function (row) {\n    x.push(row.name);\n    y.push(row.num);\n  });\n  var option = {\n    xAxis: {\n      data: x\n    },\n    series: [{\n      data: y\n    }]\n  };\n  chart.setOption(option);\n  doms.num.innerHTML = data.total;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  update: update\n});\n\n//# sourceURL=webpack:///./src/modules/page1/modules/agency.js?");

/***/ }),

/***/ "./src/modules/page1/modules/carnum.js":
/*!*********************************************!*\
  !*** ./src/modules/page1/modules/carnum.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/tool */ \"./src/utils/tool.js\");\n\nvar page = document.querySelector('#page1');\nvar doms = {\n  total: page.querySelector('.js-total'),\n  online: page.querySelector('.js-online'),\n  offline: page.querySelector('.js-offline'),\n  activePer: page.querySelector('.js-active-per')\n};\n\nvar update = function update(data) {\n  ['total', 'online', 'offline'].forEach(function (key) {\n    doms[key].innerHTML = Object(_utils_tool__WEBPACK_IMPORTED_MODULE_0__[\"formatNumber\"])(data[key]);\n  });\n  doms.activePer.innerHTML = Math.round(data.active / data.total * 100);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  update: update\n});\n\n//# sourceURL=webpack:///./src/modules/page1/modules/carnum.js?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/styles/index.css?");

/***/ }),

/***/ "./src/utils/request.js":
/*!******************************!*\
  !*** ./src/utils/request.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n // create an axios instance\n\nvar service = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: \"http://yapi.demo.qunar.com/mock/23844/\",\n  // api 的 base_url\n  timeout: 5000 // request timeout\n\n}); // response interceptor\n\nservice.interceptors.response.use(function (response) {\n  return response;\n},\n/**\r\n * 下面的注释为通过在response里，自定义code来标示请求状态\r\n * 当code返回如下情况则说明权限有问题，登出并返回到登录页\r\n * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中\r\n * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除\r\n */\n// response => {\n//   const res = response.data\n//   if (res.code !== 20000) {\n//     Message({\n//       message: res.message,\n//       type: 'error',\n//       duration: 5 * 1000\n//     })\n//     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;\n//     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {\n//       // 请自行在引入 MessageBox\n//       // import { Message, MessageBox } from 'element-ui'\n//       MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {\n//         confirmButtonText: '重新登录',\n//         cancelButtonText: '取消',\n//         type: 'warning'\n//       }).then(() => {\n//         store.dispatch('FedLogOut').then(() => {\n//           location.reload() // 为了重新实例化vue-router对象 避免bug\n//         })\n//       })\n//     }\n//     return Promise.reject('error')\n//   } else {\n//     return response.data\n//   }\n// },\nfunction (error) {\n  console.log('err' + error); // for debug\n\n  return Promise.reject(error);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (service);\n\n//# sourceURL=webpack:///./src/utils/request.js?");

/***/ }),

/***/ "./src/utils/tool.js":
/*!***************************!*\
  !*** ./src/utils/tool.js ***!
  \***************************/
/*! exports provided: formatNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatNumber\", function() { return formatNumber; });\nfunction formatNumber(n) {\n  var b = parseInt(n).toString();\n  var len = b.length;\n\n  if (len <= 3) {\n    return b;\n  }\n\n  var r = len % 3;\n  return r > 0 ? b.slice(0, r) + ',' + b.slice(r, len).match(/\\d{3}/g).join(',') : b.slice(r, len).match(/\\d{3}/g).join(',');\n}\n\n\n\n//# sourceURL=webpack:///./src/utils/tool.js?");

/***/ })

},[["./src/app.js","manifest","vendor"]]]);