(function() {
  var b, btn, msg, toggleClass, _i, _len;

  btn = document.querySelectorAll('button');

  msg = document.querySelector('.message');

  toggleClass = function() {
    return msg.classList.toggle('on');
  };

  for (_i = 0, _len = btn.length; _i < _len; _i++) {
    b = btn[_i];
    b.addEventListener('click', toggleClass);
  }

}).call(this);
