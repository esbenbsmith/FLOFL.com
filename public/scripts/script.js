$(function(){

var baseUrl = "https://flofl.herokuapp.com"

$suggestion = _.template( $("#suggestiontemplate").html())

$.get(baseUrl + "/api/suggestion", function(data){
    var suggestions = data

    _.each(suggestions, function(suggestion){
        console.log(suggestion)
        $("#suggestionlist").append($suggestion(suggestion))
    })
})

$("#new-suggestion").submit(function(event){
    event.preventdefault();
    console.log("form submit")
    var suggestion = {
        text: $("#posting").val()
    }
    $post("/api/suggestion", suggestion, function(data){
        console.log(data)
        $("#suggestionlist").prepend($suggestion(data))

        })
    })
})

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
  $('#house').find('a').trigger('click');
});

$(document).ready(function() {
  $('#aboutbutton').find('a').trigger('click');
});

$(document).ready(function() {
  $('#home').find('a').trigger('click');
});

