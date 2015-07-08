/**
 * Created by gguzmics01 on 2015.07.07..
 */
var success = true;

function validateEmail(email) {
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});

$(document).ready(function(){
    $("#send").click(function(){
        //alert($("#message").val());
        var name = $("#name").val();
        var email = $("#email").val();
        var text = $("#message").val();


        if (name == "") {
            $("#namebox").attr("class", "glyphicon glyphicon-remove form-control-feedback");
            $("#namediv").attr("class", "form-group has-error has-feedback");
            success = false;
        }else{
            $("#namebox").attr("class", "glyphicon glyphicon-ok form-control-feedback");
            $("#namediv").attr("class", "form-group has-success has-feedback");
        }
        if (email == ""){
            $("#emailbox").attr("class", "glyphicon glyphicon-remove form-control-feedback");
            $("#emaildiv").attr("class", "form-group has-error has-feedback");
            success = false
        }else{
            $("#emailbox").attr("class", "glyphicon glyphicon-ok form-control-feedback");
            $("#emaildiv").attr("class", "form-group has-success has-feedback");
        }
        if (text == "" || text == "Ide írd az üzeneted...") {
            $("#textbox").attr("class", "glyphicon glyphicon-remove form-control-feedback");
            $("#textdiv").attr("class", "form-group has-error has-feedback");
            success = false;
        }else{
            $("#textbox").attr("class", "glyphicon glyphicon-ok form-control-feedback");
            $("#textdiv").attr("class", "form-group has-success has-feedback");
        }

        $('form').on('submit', function() {
            return success;
            alert(success);
        });
    });
});