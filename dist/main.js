(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"lph_logo.png";var n=document.getElementById("content");n.classList.add("d-flex"),function(){var e=document.createElement("div");e.classList.add("nav","d-flex"),n.appendChild(e);var a=new Image;a.src=t,e.appendChild(a);var r=document.createElement("div");r.classList.add("nav-menu","d-flex"),e.appendChild(r);var i=document.createElement("span");i.classList.add("nav-menu-item"),i.innerHTML="HOME",r.appendChild(i);var c=document.createElement("span");c.classList.add("nav-menu-item"),c.innerHTML="MENU",r.appendChild(c);var d=document.createElement("span");d.classList.add("nav-menu-item"),d.innerHTML="CONTACT",r.appendChild(d)}()})();