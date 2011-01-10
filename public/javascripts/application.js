$(document).ready(function() {
  var i = 0;
  var beaker = $('#beaker-background img');
  setInterval(function () {
    console.log(i);
    beaker.css('-webkit-transform', 'rotate(' + i++ % 360 + 'deg)');
  }, 50);
});

rotate = function (i) {

};