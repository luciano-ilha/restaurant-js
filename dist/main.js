(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var n=a.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"lph_logo.png",a=e.p+"instagram-icon.png",n=e.p+"facebook-icon.png",i=e.p+"twitter-icon.png",r=e.p+"email-icon.png";var s=document.getElementById("content"),d=document.createElement("div"),o=document.createElement("span"),c=document.createElement("span"),l=document.createElement("span");s.classList.add("d-flex"),function(){var e=document.createElement("div");e.classList.add("nav","d-flex"),s.appendChild(e);var a=new Image;a.src=t,e.appendChild(a),d.classList.add("nav-menu","d-flex"),e.appendChild(d),o.classList.add("nav-menu-item"),o.innerHTML="HOME",d.appendChild(o),c.classList.add("nav-menu-item"),c.innerHTML="MENU",d.appendChild(c),l.classList.add("nav-menu-item"),l.innerHTML="CONTACT",d.appendChild(l)}(),function(){var e=document.createElement("div");e.classList.add("home","d-flex"),e.style.backgroundImage="url('home-banner.png')",s.appendChild(e);var t=document.createElement("div");t.classList.add("mask","d-flex"),e.appendChild(t);var a=document.createElement("div");a.classList.add("mask-content","d-flex"),t.appendChild(a);var n=document.createElement("h1");n.innerHTML="Chicken at its best!",n.classList.add("mask-content-title"),a.appendChild(n);var i=document.createElement("p");i.innerHTML="In 1890, back in South Valley, Gus Frings was born. An ordinary boy, with an extraordinary future ahead of him. Gus, until the age of 40, lived a simple life: he worked as an insurance, tire and light seller, piloted tour boats and even delivered! Until, in 1930, he decided to buy a store at a gas station on the side of the road, which would change his path forever. It was there that he discovered the pleasure of serving travelers delicious and comforting food: he prepared, with all the affection, the same fried chicken that he ate in his childhood. For 10 years, the Hermano was perfecting the recipe until in 1940 he arrived at what he considered perfection. The chicken was so successful that it brought more and more people to the gas station restaurant. And the Hermano wanted to expand his business: he patented the name Los Pollos Hermanos and went around the country looking for franchisees. In 1952, he got his first one, in Albuquerque, New Mexico. In 1957, the idea came to serve the chicken in a bucket, a package that would become an icon of the brand. And the success was so great that, in 1964, the Hermano received the title and became known as the creator of the recipe for the Best Chicken in the World, which is successful worldwide and is served by millions and millions of people , every day. 10 years after the first restaurant, Los Pollos Hermanos already had 600 stores. And 60 years later, there are more than 5,000 stores in 120 countries, with 14 million customers per day. What was a meth secret recipe for a little dreamer has become one of the biggest secrets in the universe of brands. And from this secret, the most delicious chicken in the world emerged.",i.classList.add("mask-content-text"),a.appendChild(i)}(),function(){var e=document.createElement("div");e.classList.add("footer","d-flex"),s.appendChild(e);var t=document.createElement("div");t.classList.add("footer-box","d-flex"),e.appendChild(t);var d=new Image;d.src=a,d.classList.add("footer-box-item"),t.appendChild(d);var o=new Image;o.src=n,o.classList.add("footer-box-item2"),t.appendChild(o);var c=new Image;c.src=i,c.classList.add("footer-box-item2"),t.appendChild(c);var l=new Image;l.src=r,l.classList.add("footer-box-item"),t.appendChild(l)}()})();