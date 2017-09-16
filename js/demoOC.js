$(function () {



    var $list, $newItemForm;

    $list = $('ul');

    $newItemForm = $('#newItemForm');


    $newItemForm.on('submit', function (e) {

        e.preventDefault();

        var text = $('input:text').val();

        $list.append('<li>' + text + '</li>');

        $('input:text').val('');

    });


    $list.on('click', 'li', function () {

        var $this = $(this);

        $this.remove();

    });

    $('body').on('keypress', function (e) {
        var code = e.which;
        console.log(code);
        if (code == 97) {
            $('body').css('background-color', 'bisque');
        }
    });



});
