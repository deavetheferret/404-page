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

var buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  var underline = button.querySelector(".underline");

  button.addEventListener("mousemove", () => {
    underline.classList.add("underlining");
  });

  button.addEventListener("mouseleave", () => {
    underline.classList.remove("underlining");
  });
});

//-----------

var menu = document.querySelector(".menu");
var sidePanel = document.querySelector(".side-panel");

var openMenu = function () {
  sidePanel.classList.toggle("close-side-panel");
};

menu.addEventListener("click", openMenu);

//---------------
