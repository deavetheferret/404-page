window.onload=function(){var t=document.querySelector(".scene"),e=document.querySelector(".cube"),o={_x:0,_y:0,x:0,y:0,updatePosition:function(t){var e=t||window.event;this.x=e.clientX-this._x,this.y=-1*(e.clientY-this._y)},setOrigin:function(t){this._x=t.offsetLeft+Math.floor(t.offsetWidth/2),this._y=t.offsetTop+Math.floor(t.offsetHeight/2)},show:function(){return"("+this.x+", "+this.y+")"}};o.setOrigin(t);var s=0,n=function(e){o.updatePosition(e),i((o.y/t.offsetHeight*2).toFixed(2),(o.x/t.offsetWidth*2).toFixed(2))},i=function(t,o){var s="translateZ("+-.5*e.offsetWidth+"px) rotateX("+90*t+"deg) rotateY("+90*o+"deg)";e.style.transform=s,e.style.webkitTransform=s,e.style.mozTransform=s,e.style.msTransform=s,e.style.oTransform=s};t.onmouseleave=function(t){let o="scale(0.5)";e.style.transform=o,e.style.webkitTransform=o,e.style.mozTransform=o,e.style.msTransform=o,e.style.oTransform=o},t.onmousemove=function(t){s++%4==0&&n(t)}};
//# sourceMappingURL=index.js.map