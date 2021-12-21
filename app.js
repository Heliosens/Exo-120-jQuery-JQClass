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

$('.losange').click(function (){
    let test = $(this).parent('section').siblings();
    if ($(this).is('.painted')){
        test.children().eq(2).addClass('painted');
        test.children().eq(7).addClass('painted');
        test.children().eq(12).addClass('painted');
        test.children().eq(17).addClass('painted');
    }
    else{
        test.children().eq(2).removeClass('painted');
        test.children().eq(7).removeClass('painted');
        test.children().eq(12).removeClass('painted');
        test.children().eq(17).removeClass('painted');
    }
})

