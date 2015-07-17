/**
 * Created by gguzmics01 on 2015.07.07..
 */
var success = true;

/*
function validateEmail(email) {
 var regex = "/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i";
    return re.test(email);
 }*/

$(function(){
    //beincludeolas
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    //carousel diavetiteshez
    var slideqty = $('#featured .item').length;
    for(var i = 0; i < slideqty; i++){
        var insertText='<li data-target="#featured" data-slide-to="' + i+ '"></li>';
        $('#featured ol').append(insertText);
    }
    $('.carousel').carousel({
        interval:"7000",
        pause:"false",
    });

});

function onbtnclick() {
    //alert($("#message").val());
    var name = $("#name").val();
    var email = $("#email").val();
    var text = $("#message").val();


    if (name == "") {
        $("#namebox").attr("class", "glyphicon glyphicon-remove form-control-feedback");
        $("#namediv").attr("class", "form-group has-error has-feedback");
        success = false;
    } else {
        $("#namebox").attr("class", "glyphicon glyphicon-ok form-control-feedback");
        $("#namediv").attr("class", "form-group has-success has-feedback");
    }
    if (email == "") {
        $("#emailbox").attr("class", "glyphicon glyphicon-remove form-control-feedback");
        $("#emaildiv").attr("class", "form-group has-error has-feedback");
        success = false
    } else {
        $("#emailbox").attr("class", "glyphicon glyphicon-ok form-control-feedback");
        $("#emaildiv").attr("class", "form-group has-success has-feedback");
    }
    if (text == "" || text == "Ide írd az üzeneted...") {
        $("#textbox").attr("class", "glyphicon glyphicon-remove form-control-feedback");
        $("#textdiv").attr("class", "form-group has-error has-feedback");
        success = false;
    } else {
        $("#textbox").attr("class", "glyphicon glyphicon-ok form-control-feedback");
        $("#textdiv").attr("class", "form-group has-success has-feedback");
    }

    $('form').on('submit', function () {
        return success;
        alert(success);
    });
}

function checkVisible(elm, eval) {
    eval = eval || "visible";
    var vpH = $(window).height(), // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (eval == "above") return ((y < (vpH + st)));
}

var reftomb;

$(document).ready(function () {
    reftomb = [$('#ref1'), $('#ref2'), $('#ref3'), $('#ref4'), $('#ref5'), $('#ref6')];
    for (var i = 0; i < reftomb.length; i++) {
        if (checkVisible(reftomb[i])) {
            reftomb[i].css("webkitAnimationName", "megjelenes");
            reftomb[i].css("webkitAnimationDuration", "4s");
            reftomb[i].css("webkitanimationFillMode", "forwards");
            //TODO többi böngészőre is....

            reftomb[i].css("animationName", "megjelenes");
            reftomb[i].css("animationDuration", "4s");
            reftomb[i].css("animationFillMode", "forwards");
        }
    }
});

$(window).scroll(function () {
    for (var i = 0; i < reftomb.length; i++) {
        if (checkVisible(reftomb[i])) {
            reftomb[i].show();
            reftomb[i].css("webkitAnimationName", "megjelenes");
            reftomb[i].css("webkitAnimationDuration", "4s");
            reftomb[i].css("webkitanimationFillMode", "forwards");
            //TODO itt is

            reftomb[i].css("animationName", "megjelenes");
            reftomb[i].css("animationDuration", "4s");
            reftomb[i].css("animationFillMode", "forwards");
        }
    }
});

