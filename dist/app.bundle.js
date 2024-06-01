(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>l});var i=t(601),o=t.n(i),a=t(314),r=t.n(a),s=t(417),c=t.n(s),p=new URL(t(607),t.b),u=r()(o()),d=c()(p);u.push([n.id,`@font-face {\n    font-family: "DM-Sans";\n    src: url(${d}) format("truetype");\n}\n\nhtml, body {\n    margin: 0;\n    height: 100%;\n    font-family: "DM-Sans";\n}\n\n.home {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    margin: 0;\n    height: 80%;\n}\n\n.menu {\n    text-align: center;\n}\n\n.menu-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 30px;\n    height: 80%;\n}\n\n.menu-container > div {\n    display: flex;\n    flex-direction: column;\n    border: solid 10px #517d64;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px 20px 0px 20px;\n}\n\nnav {\n    display: flex;\n    gap: 25px;\n}\n\nnav button {\n    border: none;\n    background-color: white;\n    font-size: 20px;\n    font-weight: 500;\n    cursor: pointer;\n}\n\nnav button:hover {\n    border-bottom: 1px solid black;\n    padding-bottom: 1px;\n}\n\n.account-options {\n    display: flex;\n    font-size: 20px;\n    gap: 30px;\n}\n\n.home-info {\n    grid-column: 1 / 2;\n    padding: 40px 100px;\n}\n\n.home-image {\n    grid-column: 2 / 3;\n    display: flex;\n    justify-content: center;\n    position: relative;\n}\n\n.home-image img {\n    width: 70%;\n    border-radius: 64px;\n    margin: 0;\n    align-self: start;\n    margin-top: 30px;\n}\n\n.icon {\n    width: 35px;\n    height: 35px;\n    cursor: pointer;\n}\n\n.home h2 {\n    font-size: 48px;\n    letter-spacing: 2px;\n}\n\n.block {\n    letter-spacing: 0px;\n    font-size: 24px;\n    display: block;\n}\n\n.home-info p {\n    font-size: 18px;\n    line-height: 1.5;\n}\n\n.home-info button {\n    margin-top: 50px;\n    font-size: 20px;\n    padding: 15px 20px;\n    border-radius: 32px;\n    background-color: #517d64;\n    border: none;\n    color: white;\n    font-family: "DM-Sans";\n    cursor: pointer;\n    display: block;\n}\n\n.home-info h3 {\n    margin-top: 50px;\n    margin-bottom: 20px;\n    font-size: 24px;\n    border-bottom: solid 1px black;\n    display: inline-block;\n}\n\n.home-info ul {\n    list-style: none;\n    font-size: 18px;\n    line-height: 2;\n    padding: 0;\n    margin: 0;\n}\n\n.home-info li span {\n    font-weight: 580;\n}\n\n.colored {\n    color: #517d64;\n}\n\na {\n    text-decoration: none;\n}\n\n.menu {\n    padding: 0 20px;\n}\n\n.menu h1 {\n    margin-bottom: 75px;\n}\n\n.menu h2 {\n    font-size: 28px;\n}\n\n.menu h1 {\n    margin-bottom: 40px;\n    border-bottom: solid 1px black;\n    display: inline-block;\n}\n\n.meal-card {\n    padding: 0 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.menu h3 {\n    font-weight: 500;\n    font-size: 20px;\n}\n\n.meal-card img {\n    border-radius: 16px;\n    width: 300px;\n    height: 225px;\n    border: solid 2px black;\n    position: relative;\n}\n\n.title {\n    cursor: pointer;\n}\n\n.menu p {\n    padding: 0 40px;\n    font-weight: 450;\n    font-size: 16px;\n}\n\n.attribution {\n    position: absolute;\n    bottom: 20px;\n    background-color: rgba(0,0,0,0.5);\n    color: white;\n    padding: 10px;\n    border-radius: 64px;\n}\n\n.attribution p {\n    margin: 0;\n}\n\n.attribution a {\n    color: white;\n    text-decoration: underline;\n    padding: 0;\n}\n\n.menu .meal-img-attribution {\n    padding: 0 40px;\n    margin: 0;\n}\n\n.menu a {\n    color: #517d64;\n}\n\n.about {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 80%;\n}\n\n.about-container {\n    margin-top: 80px;\n    width: 80%;\n    border: solid 10px #517d64;\n    display: grid;\n    grid-template-columns: 1fr 0.8fr;\n    padding: 40px;\n}\n\n.about-container h2 {\n    text-align: center;\n    font-size: 32px;\n}\n\n.about-container > div {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    position: relative;\n}\n\n.about-container img:not(.icon) {\n    width: 90%;\n    border: solid black 2px;\n}\n\n.about ul {\n    line-height: 2;\n    margin: 0;\n}\n\n.about .icon {\n    width: 25px;\n    height: 25px;\n}\n\n.about li {\n    display: flex;\n    align-items: center;\n    font-size: 18px;\n}\n\n.about li span {\n    font-weight: 525;\n}`,""]);const l=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var p=0;p<n.length;p++){var u=[].concat(n[p]);i&&r[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var a={},r=[],s=0;s<n.length;s++){var c=n[s],p=i.base?c[0]+i.base:c[0],u=a[p]||0,d="".concat(p," ").concat(u);a[p]=u+1;var l=t(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)e[l].references++,e[l].updater(m);else{var h=o(m,i);i.byIndex=s,e.splice(s,0,{identifier:d,updater:h,references:1})}r.push(d)}return r}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=i(n=n||[],o=o||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var s=t(a[r]);e[s].references--}for(var c=i(n,o),p=0;p<a.length;p++){var u=t(a[p]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},607:(n,e,t)=>{n.exports=t.p+"b230ddb7eabb4b25e123.ttf"}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var a=e[i]={id:i,exports:{}};return n[i](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=i[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),i=t(825),o=t.n(i),a=t(659),r=t.n(a),s=t(56),c=t.n(s),p=t(540),u=t.n(p),d=t(113),l=t.n(d),m=t(208),h={};h.styleTagTransform=l(),h.setAttributes=c(),h.insert=r().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),e()(m.A,h),m.A&&m.A.locals&&m.A.locals;const f=t.p+"b314197b6f2f325f9ee5.jpg",g=t.p+"936ec6b4bcf469493113.jpg",b=t.p+"87de6b508a823fb97d77.jpg",v=t.p+"e58fb45f4b7875f84488.jpg";function x(n,e){const t=document.createElement("div"),i=document.createElement("div");i.classList.add("meal-card"),i.innerHTML=`<h3>${e}</h3>`;const o=new Image;return o.src=n,i.appendChild(o),t.appendChild(i),t}function y(){content.classList.contains("menu")||(content.className="menu",content.innerHTML=`<h1>Our Menu</h1>\n  <div class = menu-container>\n    <div>\n      <h2>Lunch</h2>\n      <div>\n      ${x(g,"Steak with Truffle Fries").innerHTML}\n      </div>\n      <p class = "meal-img-attribution">Photo by <a href="https://unsplash.com/@covertnine?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tim Toomey</a> on <a href="https://unsplash.com/photos/grilled-meat-on-white-ceramic-plate-pe9dvM1rQkM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>\n    </p>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. \n      Inventore commodi repellendus accusantium consequuntur nobis! \n      Explicabo commodi nemo quod, quis magnam dolore neque expedita \n      et eveniet sed tempore pariatur veritatis.</p>\n    </div>\n    <div>\n      <h2>Dinner</h2>\n      ${x(b,"Fettuccine Alfredo").innerHTML}\n      <p class = "meal-img-attribution">Photo by <a href="https://unsplash.com/@eaterscollective?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Eaters Collective</a> on <a href="https://unsplash.com/photos/pasta-dish-on-white-plate-ddZYOtZUnBk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>\n    </p>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. \n      Inventore commodi repellendus accusantium consequuntur nobis! \n      Explicabo commodi nemo quod, quis magnam dolore neque expedita \n      et eveniet sed tempore pariatur veritatis.</p>\n    </div>\n    <div>\n      <h2>Dessert</h2>\n      ${x(v,"Red Velvet Cake").innerHTML}\n      <p class = "meal-img-attribution">Photo by <a href="https://unsplash.com/@amir_v_ali?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">amirali mirhashemian</a> on <a href="https://unsplash.com/photos/sliced-cake-on-white-ceramic-plate-EfkMkUXs0fU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>\n    </p>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. \n      Inventore commodi repellendus accusantium consequuntur nobis! \n      Explicabo commodi nemo quod, quis magnam dolore neque expedita \n      et eveniet sed tempore pariatur veritatis.</p>\n    </div>\n    </div>`)}function w(){if(content.classList.contains("home"))return;content.className="home",content.innerHTML='<div class="home-info">\n      <h2>\n          <span class="block">Welcome to</span>\n          <span class="colored">Thyme Garden</span>\n      </h2>\n      <p>\n          Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n          Reprehenderit, fugit sit id asperiores animi provident. Maxime\n          consectetur, qui ipsa neque quas, atque commodi hic, quia quaerat quod\n          perspiciatis doloribus consequuntur? Lorem ipsum, dolor sit amet\n          consectetur adipisicing elit. \n      </p>\n      <button class = "home-menu-btn">View Menu</button>\n      <h3>Restaurant Hours</h3>\n      <ul>\n          <li><span>Monday - Friday:</span> 12:00 PM - 10:30 PM</li>\n          <li><span>Saturday - Sunday:</span> 12:00 PM - 12:00 AM</li>\n          <li>\n          <span>Holiday Hours:</span> Please call for holiday hours, as they\n          may vary.\n          </li>\n      </ul>\n      </div>';const n=document.createElement("div");n.classList.add("home-image");const e=new Image;e.src=f,n.appendChild(e),n.innerHTML+='<div class = "attribution">\n    <p>Photo by \n      <a href="https://unsplash.com/@kayleighharrington?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"> kayleigh harrington</a> \n      on <a href="https://unsplash.com/photos/group-of-people-inside-the-restaurant-yhn4okt6ci0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">\n      Unsplash\n      </a>\n    </p>\n  </div>',content.appendChild(n),document.querySelector(".home-menu-btn").addEventListener("click",y)}const q=t.p+"7cc8e78d9e91bfa75202.jpg",L=t.p+"0b454d6aeda1578fa2ba.svg",M=t.p+"c7a364af28c1fc7cbb30.svg",T=t.p+"8ed820373498e050ba48.svg",C=t.p+"54ff7732bb1a5ff166c6.svg",_=t.p+"dda40cce0d021517f966.svg",k=t.p+"a97e6118fdc6331ef39d.svg";document.querySelector("#content"),document.querySelector(".home-btn").addEventListener("click",w),document.querySelector(".title").addEventListener("click",w),document.querySelector(".menu-btn").addEventListener("click",y),document.querySelector(".about-btn").addEventListener("click",(function(){if(content.classList.contains("about"))return;content.innerHTML="",content.className="about";const n=document.createElement("div"),e=document.createElement("div");n.classList.add("about-container"),e.innerHTML+="\n    <h2>About Us</h2>\n    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n    Reprehenderit, fugit sit id asperiores animi provident. Maxime\n    consectetur, qui ipsa neque quas, atque commodi hic, quia quaerat quod\n    perspiciatis doloribus consequuntur? Lorem ipsum, dolor sit amet\n    consectetur adipisicing elit.</p>\n    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n    Reprehenderit, fugit sit id asperiores animi provident. Maxime\n    consectetur, qui ipsa neque quas, atque commodi hic, quia quaerat quod\n    perspiciatis doloribus consequuntur? Lorem ipsum, dolor sit amet\n    consectetur adipisicing elit.</p>\n    <h2>Contact Us</h2>";const t=document.createElement("ul"),i=document.createElement("li"),o=document.createElement("li"),a=document.createElement("li"),r=new Image;r.src=M,r.classList.add("icon");const s=new Image;s.src=L,s.classList.add("icon");const c=new Image;c.src=T,c.classList.add("icon"),i.appendChild(r),i.innerHTML+="&nbsp&nbsp<span>email: </span>&nbspexampleemail@gmail.com",t.appendChild(i),o.appendChild(s),o.innerHTML+="&nbsp&nbsp<span>phone number: </span>&nbsp999-999-9999",t.appendChild(o),a.appendChild(c),a.innerHTML+="&nbsp&nbsp<span>address: </span>&nbsp123 Main Ave. Vancouver, BC VXX XXX",t.appendChild(a),e.appendChild(t);const p=document.createElement("div"),u=new Image;u.src=q,p.appendChild(u),p.innerHTML+='<div class = "attribution">Photo by <a href="https://unsplash.com/@sebastiancoman?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sebastian Coman Photography</a> on <a href="https://unsplash.com/photos/man-in-black-t-shirt-holding-stainless-steel-bowl-eBmyH7oO5wY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>\n  </div>',n.appendChild(e),n.appendChild(p),content.appendChild(n)})),function(){const n=new Image;n.src=C,n.classList.add("icon");const e=new Image;e.src=k,e.classList.add("icon");const t=new Image;t.src=_,t.classList.add("icon");const i=document.querySelector(".account-options");i.append(n),i.append(e),i.append(t)}(),w()})()})();