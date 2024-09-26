!function(){function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function e(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}}function r(r){return function(e){if(Array.isArray(e))return t(e)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||e(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}var i=document.querySelector("button"),o=document.querySelector(".game-score"),a=document.querySelector("tbody"),l=0,s=new(function(){var t;function e(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e),this.field=c(),this.state="idle",this.score=0,this.currnetBigestNumber=0}return t=[{key:"getStatus",value:function(){"lose"===this.state&&f("message-lose"),"playing"===this.state&&this.restart()}},{key:"start",value:function(){return this.state="wait",o.textContent=0,"wait"===this.state&&(l=0),this.field=c(),f("message-rule"),h(this.field,this.state),h(this.field,this.state),this.state="playing",v(this.field,this.state),this.field}},{key:"restart",value:function(){i.removeAttribute("style"),i.classList.remove("start"),i.classList.add("restart"),i.textContent="Restart"}},{key:"moveRight",value:function(){b(this.field,"right")&&(y(this.field,"right"),h(this.field)),this.moveEngine()}},{key:"moveLeft",value:function(){b(this.field,"left")&&(y(this.field,"left"),h(this.field)),this.moveEngine()}},{key:"moveUp",value:function(){p(this.field,"up")&&(m(this.field,"up"),h(this.field)),this.moveEngine()}},{key:"moveDown",value:function(){p(this.field,"down")&&(m(this.field,"down"),h(this.field)),this.moveEngine()}},{key:"moveEngine",value:function(){v(this.field),!1===d(this.field)&&!1===b(this.field,"right")&&!1===b(this.field,"left")&&!1===p(this.field,"up")&&!1===p(this.field,"down")&&(this.state="lose"),this.getStatus()}}],function(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(e.prototype,t),e}());i.addEventListener("click",function(){s.start()});var u=document.querySelector(".message-rule");function f(t){var e=r(document.querySelector(".message-container").children),n=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var s=a.value;if(s.classList.contains(t)){s.classList.toggle("hidden",!1);continue}s.classList.add("hidden")}}catch(t){i=!0,o=t}finally{try{n||null==l.return||l.return()}finally{if(i)throw o}}}function c(){for(var t=r(a.querySelectorAll("tr")),e=t[0].children.length,n=[],i=0;i<t.length;i++)n.push(Array(e).fill(0));return n}function h(t,e){if(d(t)){var r=.9>Math.random()?2:4,n=[Math.floor(0+4*Math.random()),Math.floor(0+4*Math.random())],i=t[n[0]];"wait"===e&&(r=2),0===i[n[1]]?i[n[1]]=r:h(t)}else f("message-lose");return t}function d(t){var e=!0,r=!1,n=void 0;try{for(var i,o=t[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var a=i.value.some(function(t){return 0===t});if(!0===a)return!0}}catch(t){r=!0,n=t}finally{try{e||null==o.return||o.return()}finally{if(r)throw n}}return!1}function v(t){for(var e=0;e<t.length;e++)for(var r=t[e],n=0;n<r.length;n++){var i=a.rows[e].cells[n];if(0===r[n])i.removeAttribute("class"),i.classList.add("field-cell"),i.textContent="";else{i.removeAttribute("class"),i.classList.add("field-cell");var o="field-cell--".concat(r[n]);i.classList.add(o),i.textContent=r[n],2048===r[n]&&f("message-win")}}}function y(t,e){for(var r=0;r<t.length;r++)t[r]=g(t[r],e);return t}function m(t,r){for(var n=0;n<t.length;n++){var i,o=[],a=t[0][n],l=t[1][n],s=t[2][n],u=t[3][n];o.push(a,l,s,u);var f=function(t){if(Array.isArray(t))return t}(i=o=g(o,r))||function(t,e){var r,n,i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var o=[],a=!0,l=!1;try{for(i=i.call(t);!(a=(r=i.next()).done)&&(o.push(r.value),4!==o.length);a=!0);}catch(t){l=!0,n=t}finally{try{a||null==i.return||i.return()}finally{if(l)throw n}}return o}}(i,4)||e(i,4)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=f[0],h=f[1],d=f[2],v=f[3];t[0][n]=c,t[1][n]=h,t[2][n]=d,t[3][n]=v}}function g(t,e){var r=t.filter(function(t){return t>0});if(r.length>1){for(var n=0;n<r.length-1;n++)r[n]===r[n+1]&&(r[n]=2*r[n],r[n+1]=0,l+=r[n]);o.textContent=l}for(var i=r.filter(function(t){return t>0});i.length<4;)switch(e){case"right":case"down":i.unshift(0);break;case"left":case"up":i.push(0)}return i}function b(t,e){var r=!0,i=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var s=function(){var t=a.value,r=t.find(function(t){return t>0});if(void 0===r)return"continue";var n=t.indexOf(r);switch("left"===e&&(r=t.findLast(function(t){return t>0}),n=t.lastIndexOf(r)),e){case"right":if(0===t[n+1])return{v:!0};for(var i=n;i<t.length-1;i++)if(t[i]===t[i+1]||0===t[i+1])return{v:!0};break;case"left":if(0===t[n-1])return{v:!0};for(var o=n;o>0;o--)if(t[o]===t[o-1]||0===t[o-1])return{v:!0}}}();if("object"===n(s))return s.v}}catch(t){i=!0,o=t}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return!1}function p(t,e){for(var r=0;r<t.length;r++){var i=function(r){var n=[];n.push(t[0][r],t[1][r],t[2][r],t[3][r]);var i=n.find(function(t){return t>0});if(void 0===i)return"continue";var o=n.indexOf(i);switch("up"===e&&(i=n.findLast(function(t){return t>0}),o=n.lastIndexOf(i)),e){case"down":if(0===n[o+1])return{v:!0};for(var a=o;a<n.length-1;a++)if(n[a]===n[a+1]||0===n[a+1])return{v:!0};break;case"up":if(0===n[o-1])return{v:!0};for(var l=o;l>0;l--)if(n[l]===n[l-1]||0===n[l-1])return{v:!0}}}(r);if("object"===n(i))return i.v}return!1}document.addEventListener("keyup",function(t){if("playing"!==s.state||u.classList.contains("hidden"))return!1;switch(t.code){case"ArrowRight":s.moveRight();break;case"ArrowLeft":s.moveLeft();break;case"ArrowUp":s.moveUp();break;case"ArrowDown":s.moveDown()}})}();
//# sourceMappingURL=index.0f2ebf7e.js.map
