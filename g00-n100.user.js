// ==UserScript==
// @name        Google 100
// @description Google 100 results always
// @namespace   XkaV
// @include        http*://*.google.*/search*
// @include        http://*.google.*/imgres*

// @version     1.01
// @grant       none
// ==/UserScript==
var url = window.location.href;
var n100 = "&num=100";
if(url.indexOf(n100) == -1){
  url += n100;
  window.location = url;
}
