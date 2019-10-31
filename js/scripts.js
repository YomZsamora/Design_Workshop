$(document).ready(function(){

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
            
    $('#showSuccess').hide();
    $('#showError').hide();
    $('#batteryButton').click(function(){
        $('#col1').removeClass('col-4');
        $('#col2').removeClass('col-4');
        $('#col3').removeClass('col-4');
        $('#col1').addClass('col-2');
        $('#col2').addClass('col-8');
        $('#col3').addClass('col-2');
    });

    $('#leftButton').click(function(){
        $('#col2').hide();
        $('#col3').hide();
        $('#col1').removeClass('col-4');
        $('#col1').addClass('col-12');

    });

    $('#rightButton').on('click', function(){
        $('p#para1').addClass('far-left-paragraph');
    });

    $("#password_input").on('focus', function(){
        $('input').css('background-color', 'green');
        $('input').css('color', 'white');
    });

    $("#password_input").on('keyup', function(){
        // document.getElementById().value;

        if($(this).val().length < 6){
            $('#showError').show();
        }
        else if($(this).val().length > 6) {
            $('#showSuccess').show();
            $('#showError').hide();
        } 
        else {

        }
    });

});