let form = $('div');

// empty to background color
$('#paint').click(function (event){
    form.addClass('painted');
});

$('#clear').click(function (event){
    form.removeClass('painted');
});

