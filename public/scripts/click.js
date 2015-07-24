$("#techno").on({
    mouseenter: function () {
        //stuff to do on mouse enter
        $(this).css({"background-color": "orange"});
    },
    mouseleave: function () {
        //stuff to do on mouse leave
        $(this).css({"background-color": "black"});
    }
});

$("#house").on({
    mouseenter: function () {
        //stuff to do on mouse enter
        $(this).css({"background-color": "orange"});
    },
    mouseleave: function () {
        //stuff to do on mouse leave
        $(this).css({"background-color": "#00CCFF"});
    }   
});

$(document).ready(function() {
  $("#house").find("a").trigger("click");
});

$(document).ready(function() {
  $("#aboutbutton").find("a").trigger("click");
});

$(document).ready(function() {
  $("#home").find("a").trigger("click");
});