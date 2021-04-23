import infinityImg from '../assets/images/infinity.png';
import visibilityEye from '../assets/images/visibility.png';
import birdImg from '../assets/images/Union.png';

const birdItemContainer = document.querySelector('.bird-card-item');

birdItemContainer.insertAdjacentHTML('afterbegin',
 `<div>
    <img class="card__img-bird" src="${birdImg}" alt="bird">
    <img class="card__img" src="${infinityImg}" alt="infinity">
    <img class="card__img-bird" src="${birdImg}" alt="bird">
 </div>
  <h3>Интерактивная карточка</h3>
  <p>Должна вращаться за мышкой</p>
  <div class="bird-card-item__buttom">
    <img src="${visibilityEye}" alt="visibility">
    <p>Кнопка</p>
  </div>`
 );

(function() {

  var container = document.querySelector(".bird-card-container"),
      inner = birdItemContainer;

  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function(event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function() {
      return "(" + this.x + ", " + this.y + ")";
    }
  };

  mouse.setOrigin(container);

  var counter = 0;
  var refreshRate = 10;
  var isTimeToUpdate = function() {
    return counter++ % refreshRate === 0;
  };

  var onMouseEnterHandler = function(event) {
    update(event);
  };

  var onMouseLeaveHandler = function() {
    inner.style = "";
  };

  var onMouseMoveHandler = function(event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  var update = function(event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inner.offsetHeight / 2).toFixed(2),
      (mouse.x / inner.offsetWidth / 2).toFixed(2),
    );
  };

  var updateTransformStyle = function(x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTranform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };

  container.onmousemove = onMouseMoveHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmouseenter = onMouseEnterHandler;
})();