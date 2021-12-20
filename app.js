let form = $('div');

// empty to background color
$('#paint').click(function (event){
    form.addClass('painted');
});

$('#clear').click(function (event){
    form.removeClass('painted');
});

form.click(function (){
    $(this).toggleClass('painted');
});

$('.square').click(function (){
    if($(this).is('.painted')){
        $(this).siblings().addClass('painted');
    }
    else {
        $(this).siblings().removeClass('painted');
    }
});

