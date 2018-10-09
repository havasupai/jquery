console.log("test");

$("body").css('background-color', 'bisque');

$("li:eq(2)").hide();
$("form").hide();

$("div:first").on( 'click', function () {

    $("form").show();
    $("li:eq(2)").show();
    $("li:eq(0)").replaceWith("texte remplacé");
    

});

$("button:eq(1)").on( 'click', function () {

    alert("ok");

});


$("button:eq(2)").on( 'mouseover', function () {

    $("body").css('background-color', 'pink');

});

$("button:eq(2)").on( 'mouseout', function () {

    $("body").css('background-color', 'bisque');

});



