$(function() {

    //Funcionalidad tooltips
    $('[data-bs-toggle ="tooltip"]').tooltip();

    //Esconder texto de las cartas con titulo
    $('.card-title').click(function() {
        $('.card-text').toggle();
    });


});