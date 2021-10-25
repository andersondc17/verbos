$(document).ready(function () {

    function verificar(valor) {


        $('.input-verbo' + valor).change(function () {


            verbo = $.trim($('.input-audio' + valor).val());
            verbotraduccion = $.trim($('.input-traduccion' + valor).val());
            verborespuesta = $('.input-resuelto-audio' + valor).val()
            verborespuestatraduccion = $('.input-resuelto-traduccion' + valor).val()

            console.log('respuesta =' + verborespuestatraduccion)
            console.log('escrito =' + verbotraduccion)


            if (verbo.toUpperCase().trim() == verborespuesta.toUpperCase() &&
                verbotraduccion.toUpperCase() == verborespuestatraduccion.toUpperCase()) {
                $('#icono-check-' + valor).show();
                $('#icono-wrong-' + valor).hide();
            } else if (verbo == '' || verbotraduccion == '') {
                $('#icono-wrong-' + valor).hide();
                $('#icono-check-' + valor).hide();
            } else {
                $('#icono-wrong-' + valor).show();
                $('#icono-check-' + valor).hide();
            }
        })
    }


    for (var i = 1; i <= 24; i++) {
        verificar(i);
    }

    var btnnumero = 1;
    $('.boton-siguiente').click(function () {
        $('.contenedor-' + btnnumero).hide();
        btnnumero++
        $('.contenedor-' + btnnumero).show();
    })


})
