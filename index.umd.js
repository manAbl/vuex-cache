!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e["vuex-cache"]=n()}(this,function(){"use strict";var e=function(e){return"string"==typeof e?e:JSON.stringify(e)},n=function(n){var r=e(n[0]);return n[1]&&(r=r+":"+e(n[1])),r};return function(r){var t=new Map;t.dispatch=function(){for(var e=arguments.length,a=Array(e),i=0;e>i;i++)a[i]=arguments[i];var f=n(a);return t.has(f)||t.set(f,r.dispatch.apply(r,a)),t.get(f)};var a=t.has.bind(t);t.has=function(){for(var r=arguments.length,t=Array(r),i=0;r>i;i++)t[i]=arguments[i];var f=n(t);return a(e(f))};var i=t.delete.bind(t);t.delete=function(){for(var r=arguments.length,t=Array(r),a=0;r>a;a++)t[a]=arguments[a];var f=n(t);return i(e(f))},r.cache=t}});
