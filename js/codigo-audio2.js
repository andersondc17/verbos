$(document).ready(function () {

    function verificar(valor) {
       

        $('.input-audio' + valor).change(function () {


            verbo = $('.input-audio' + valor).val();
            verborespuesta = $('.input-resuelto-audio' + valor).val()


            if (verbo == verborespuesta) {
                $('#icono-check-' + valor).show();
                $('#icono-wrong-' + valor).hide();
            } else {
                $('#icono-wrong-' + valor).show();
                $('#icono-check-' + valor).hide();
            }
        })
    }


    for (var i = 1; i <= 10; i++) {
        verificar(i);
    }

    var btnnumero = 1;
    $('.boton-siguiente').click(function(){
        $('.contenedor-'+btnnumero).hide();
        btnnumero++
        $('.contenedor-'+btnnumero).show();
    })


})
