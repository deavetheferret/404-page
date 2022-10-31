window.onload = function () {
  var scene = document.querySelector(".scene");
  var cube = document.querySelector(".cube");

  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function (e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function () {
      return "(" + this.x + ", " + this.y + ")";
    },
  };

  // Track the mouse position relative to the center of the scene.
  mouse.setOrigin(scene);

  //------------

  var counter = 0;
  var refreshRate = 4;
  var isTimeToUpdate = function () {
    return counter++ % refreshRate === 0;
  };

  //------------

  var onMouseMoveHandler = function (event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  var onMouseLeaveHandler = function (event) {
    let style = "scale(0.75)";
    cube.style.transform = style;
    cube.style.webkitTransform = style;
    cube.style.mozTransform = style;
    cube.style.msTransform = style;
    cube.style.oTransform = style;
  };

  //------------

  var update = function (event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      ((mouse.y / scene.offsetHeight) * 2).toFixed(2),
      ((mouse.x / scene.offsetWidth) * 2).toFixed(2)
    );
  };

  //------------

  var updateTransformStyle = function (x, y) {
    var trans = (-1 / 2) * cube.offsetWidth;
    var style =
      "translateZ(" +
      trans +
      "px) rotateX(" +
      x * 90 +
      "deg) rotateY(" +
      y * 90 +
      "deg)";
    cube.style.transform = style;
    cube.style.webkitTransform = style;
    cube.style.mozTransform = style;
    cube.style.msTransform = style;
    cube.style.oTransform = style;
  };

  //------------

  scene.onmouseleave = onMouseLeaveHandler;
  scene.onmousemove = onMouseMoveHandler;
};

//-----------

var buttonFst = document.querySelector(".button-1");
var buttonScd = document.querySelector(".button-2");
var buttonThd = document.querySelector(".button-3");
var buttonFrt = document.querySelector(".button-4");
var buttonFth = document.querySelector(".button-5");
var buttonSxt = document.querySelector(".button-6");
var buttonSev = document.querySelector(".button-7");

var underlineFst = document.querySelector(".underline-1");
var underlineScd = document.querySelector(".underline-2");
var underlineThd = document.querySelector(".underline-3");
var underlineFrt = document.querySelector(".underline-4");
var underlineFth = document.querySelector(".underline-5");
var underlineSxt = document.querySelector(".underline-6");
var underlineSev = document.querySelector(".underline-7");

var underliningFst = function () {
  underlineFst.classList.add("underlining");
};
var stopUnderliningFst = function () {
  underlineFst.classList.remove("underlining");
};

var underliningScd = function () {
  underlineScd.classList.add("underlining");
};
var stopUnderliningScd = function () {
  underlineScd.classList.remove("underlining");
};

var underliningThd = function () {
  underlineThd.classList.add("underlining");
};
var stopUnderliningThd = function () {
  underlineThd.classList.remove("underlining");
};

var underliningFrt = function () {
  underlineFrt.classList.add("underlining");
};
var stopUnderliningFrt = function () {
  underlineFrt.classList.remove("underlining");
};

var underliningFth = function () {
  underlineFth.classList.add("underlining");
};
var stopUnderliningFth = function () {
  underlineFth.classList.remove("underlining");
};

var underliningSxt = function () {
  underlineSxt.classList.add("underlining");
};
var stopUnderliningSxt = function () {
  underlineSxt.classList.remove("underlining");
};

var underliningSev = function () {
  underlineSev.classList.add("underlining");
};
var stopUnderliningSev = function () {
  underlineSev.classList.remove("underlining");
};

buttonFst.addEventListener("mousemove", underliningFst);
buttonFst.addEventListener("mouseleave", stopUnderliningFst);
buttonScd.addEventListener("mousemove", underliningScd);
buttonScd.addEventListener("mouseleave", stopUnderliningScd);
buttonThd.addEventListener("mousemove", underliningThd);
buttonThd.addEventListener("mouseleave", stopUnderliningThd);
buttonFrt.addEventListener("mousemove", underliningFrt);
buttonFrt.addEventListener("mouseleave", stopUnderliningFrt);
buttonFth.addEventListener("mousemove", underliningFth);
buttonFth.addEventListener("mouseleave", stopUnderliningFth);
buttonSxt.addEventListener("mousemove", underliningSxt);
buttonSxt.addEventListener("mouseleave", stopUnderliningSxt);
buttonSev.addEventListener("mousemove", underliningSev);
buttonSev.addEventListener("mouseleave", stopUnderliningSev);

var menu = document.querySelector(".menu");
var sidePanel = document.querySelector(".side-panel");

var openMenu = function () {
  sidePanel.classList.toggle("close-side-panel");
};

menu.addEventListener("click", openMenu);
