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
        playHadouken();
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show()
            .animate(
            {'left': '1020px'},
            500,
            function() {
                $(this).hide();
                $(this).css('left', '520px');
            }
            );
    })
    .mouseup(function() {
        $('.ryu-throwing').hide();
        //$('.hadouken').hide();
        $('.ryu-ready').show();
    })
    
    //.keydown(function (e) {
        //if (e.which === '88') {
            //$('.ryu-still').hide();
            //$('.ryu-ready').hide();
            //$('.ryu-posing').show();
            //console.log('xxxxx');
        //}
    //});

});

$(document).keydown(function(e){
	if(e.which == '88'){
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-posing').show();
           // console.log('you pressed x');
    }
    
	}).keyup(function(e){ //the sample has an x on this line
    if(e.which == '88'){
        $('.ryu-posing').hide();
        $('.ryu-still').show();
    }
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}