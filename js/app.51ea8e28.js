(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0c27":function(t,e,a){"use strict";a("0ef3")},"0ef3":function(t,e,a){},"55d9":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-overlay",{attrs:{show:t.overlay.show,variant:t.overlay.variant,opacity:t.overlay.opacity,blur:t.overlay.blur,rounded:t.overlay.sm},scopedSlots:t._u([{key:"overlay",fn:function(){return[a("div",{staticClass:"text-center"},[a("i",{staticClass:"fad fa-spinner-third fa-spin",staticStyle:{"font-size":"30px"}}),a("p",{staticStyle:{"margin-top":"10px","font-size":"18px"}},[t._v("Loading...")])])]},proxy:!0}])},[a("div",{staticClass:"container",staticStyle:{"min-height":"450px"}},[a("div",{staticClass:"weather"},[a("div",{staticClass:"weather__top"},[a("b-row",[a("b-col",[a("div",{staticClass:"input-search"},[a("b-input-group",[a("b-input-group-text",[a("i",{staticClass:"fas fa-search-location"})]),a("b-form-input",{on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fetchWeather()}},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1)],1)])],1)],1),t.weather.id?a("div",{staticClass:"weather__body"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("b-row",[a("b-col",[a("h4",{staticClass:"location-name"},[t._v(" "+t._s(t.weather.name)+", "+t._s(t.weather.sys.country)+" ")])])],1),a("b-row",[a("b-col",[a("b-img",{attrs:{center:"",src:"https://openweathermap.org/img/wn/"+t.weather["weather"][0]["icon"]+"@4x.png",alt:"Weather icon"}})],1)],1),a("b-row",[a("b-col",[a("div",{staticClass:"weather-temp"},[a("h4",[t._v(t._s(Math.round(t.weather.main.temp))+"°C")])])])],1),a("b-row",[a("b-col",[a("div",{staticClass:"weather-desc"},[a("h5",[t._v(" "+t._s(t.weather.weather[0].main)+" - "+t._s(t.weather.weather[0]["description"])+" ")])])])],1),a("b-row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[a("b-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"6"}},[a("div",{staticClass:"weather-humidity"},[a("h5",[t._v("Humidity: "+t._s(t.weather.main.humidity))])])]),a("b-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"6"}},[a("div",{staticClass:"weather-temp-maxmin"},[a("h5",[t._v(" Temp max: "+t._s(Math.round(t.weather.main.temp_max))+" - Temp min: "+t._s(Math.round(t.weather.main.temp_min))+" ")])])])],1),a("b-row",[a("b-col",[a("div",{staticClass:"weather-date"},[a("h5",[t._v(t._s(this.dateTimeNow()))])])])],1)],1)])]):a("div",{staticClass:"weather__error"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h4",[t._v("City not found")])])])])])])])],1)},o=[],i=(a("d3b7"),a("99af"),{api_key:"df24978067427fe992301ab2fe332253",url_base:"https://api.openweathermap.org/data/2.5/"}),s={name:"App",data:function(){return{location:"",weather:{},overlay:{show:!1,variant:"light",opacity:1,blur:"1rem",rounded:"sm"}}},methods:{fetchWeather:function(){var t=this;this.overlay.show=!0,fetch("".concat(i.url_base,"weather?q=").concat(this.location,"&units=metric&APPID=").concat(i.api_key)).then((function(t){return t.json()})).then((function(e){t.setResults(e)})),this.overlay.show=!1},setResults:function(t){this.weather=t},dateTimeNow:function(){var t=new Date,e=["January","February","March","April","May","June","July","August","September","October","November","December"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=a[t.getDay()],n=t.getDate(),o=e[t.getMonth()],i=t.getFullYear();return"".concat(r," ").concat(n," ").concat(o," ").concat(i)}}},c=s,l=(a("0c27"),a("2877")),u=Object(l["a"])(c,n,o,!1,null,"101d98a2",null),d=u.exports,p=a("5f5b"),h=a("b1e0");a("f9e3"),a("2dd8"),a("55d9");r["default"].config.productionTip=!1,r["default"].use(p["a"]),r["default"].use(h["a"]),new r["default"]({render:function(t){return t(d)}}).$mount("#app")}});
//# sourceMappingURL=app.51ea8e28.js.map