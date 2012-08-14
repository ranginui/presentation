function init_slide() {
  $(document).keypress(function(e) {
    var keychar = String.fromCharCode(e.which).toUpperCase();
    if(remove_blind()) {
      return false;
    }
    if(keychar == " " || e.keyCode == 34) {
      var next_href = $('#nav-next').get(0).href;
      location.href = next_href;
      e.preventDefault();
      return false;
    }
    else if(e.which == 8 || e.keyCode == 33) {
      history.back();
      return false;
    }
    else if(keychar == 'B') {
      if(remove_blind()) {
        return;
      }
      else {
        add_blind('black');
      }
    }
    else if(keychar == 'W') {
      if(remove_blind()) {
        return;
      }
      else {
        add_blind('white');
      }
    }
  });

}

function add_blind(bg_colour) {
  $(document.body).append('<div id="blind"></div>');
  $('#blind').css({
    "background-color": bg_colour,
    "position"        : "absolute",
    "top"             : "0",
    "left"            : "0",
    "width"           : "100%",
    "height"          : "100%",
    "display"         : "none",
    "z-index"         : "9999",
  }).fadeIn('fast');
}

function remove_blind() {
  if($('#blind').length == 1) {
    $('#blind').remove();
    return true;
  }
  else {
    return false;
  }
}

var e    = document.createElement("script");
e.type   = 'text/javascript';
e.src    = 'jquery.js';
e.onload = init_slide;
document.getElementsByTagName("head")[0].appendChild(e);
