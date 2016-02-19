$(document).ready(function() {
    $('.ryu')
    .mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function(){
        //alert('mouse left');
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })
    .mousedown(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').show();
    })
    .mouseup(function() {
        $('.ryu-throwing').hide();
        //$('.hadouken').hide();
        $('.ryu-ready').show();
    });
});