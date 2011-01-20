$(document).ready(function() {
  var i = 0;
  var beaker = $('#beaker-background img');
  setInterval(function () {
    beaker.css('-webkit-transform', 'rotate(' + i++ % 360 + 'deg)');
  }, 50);
  
  $('#menu-propose').click(function () {
    $.get('/inquiries/new', function (data) {
      $('#content').prepend(data);
    });
  });
});