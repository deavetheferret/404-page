window.onload=function(){var e=document.querySelector(".scene"),t=document.querySelector(".cube"),n={_x:0,_y:0,x:0,y:0,updatePosition:function(e){var t=e||window.event;this.x=t.clientX-this._x,this.y=-1*(t.clientY-this._y)},setOrigin:function(e){this._x=e.offsetLeft+Math.floor(e.offsetWidth/2),this._y=e.offsetTop+Math.floor(e.offsetHeight/2)},show:function(){return"("+this.x+", "+this.y+")"}};n.setOrigin(e);var o=0,s=function(t){n.updatePosition(t),i((n.y/e.offsetHeight*2).toFixed(2),(n.x/e.offsetWidth*2).toFixed(2))},i=function(e,n){var o="translateZ("+-.5*t.offsetWidth+"px) rotateX("+90*e+"deg) rotateY("+90*n+"deg)";t.style.transform=o,t.style.webkitTransform=o,t.style.mozTransform=o,t.style.msTransform=o,t.style.oTransform=o};e.onmouseleave=function(e){let n="scale(0.75)";t.style.transform=n,t.style.webkitTransform=n,t.style.mozTransform=n,t.style.msTransform=n,t.style.oTransform=n},e.onmousemove=function(e){o++%4==0&&s(e)}};var e=document.querySelector(".button-1"),t=document.querySelector(".button-2"),n=document.querySelector(".button-3"),o=document.querySelector(".button-4"),s=document.querySelector(".underline-1"),i=document.querySelector(".underline-2"),r=document.querySelector(".underline-3"),u=document.querySelector(".underline-4");e.addEventListener("mousemove",(function(){s.classList.add("underlining")})),e.addEventListener("mouseleave",(function(){s.classList.remove("underlining")})),t.addEventListener("mousemove",(function(){i.classList.add("underlining")})),t.addEventListener("mouseleave",(function(){i.classList.remove("underlining")})),n.addEventListener("mousemove",(function(){r.classList.add("underlining")})),n.addEventListener("mouseleave",(function(){r.classList.remove("underlining")})),o.addEventListener("mousemove",(function(){u.classList.add("underlining")})),o.addEventListener("mouseleave",(function(){u.classList.remove("underlining")}));var d=document.querySelector(".menu"),l=document.querySelector(".side-panel");d.addEventListener("click",(function(){l.classList.toggle("close-side-panel")}));
//# sourceMappingURL=index.d61bf6cc.js.map