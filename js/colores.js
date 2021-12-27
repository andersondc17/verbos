$(document).ready(function () {

    var colores = ['Amarillo', 'Rosa', 'Morado', 'Azul', 'Naranja', 'Verde', 'Blanco','Gris','Rojo','Negro','Marrón','Violeta','Celeste','Dorado','Azul Marino','Plata','Fucsia'];
    var colors = ['Yellow', 'Pink', 'Purple', 'Blue', 'Orange', 'Green', 'White','Gray','Red','Black','Brown','Violet','Sky Blue','Golden','Navy Blue','Silver','Fuchsia'];
    

    var verificarVerboPasado = 'vacio';
    var verificarVerboParticipio = 'vacio';
    var verificarVerboTraduccion = 'vacio';
  
    var verbosnuevos = [];
    var verbosPasadosSimplesnuevos = [];

  
    var contar = -1;
  
    function aleatorio(min, max) {
      var num = Math.floor(Math.random() * (max - min + 1)) + min;
      return num;
    }
  
    //console.log(verbosTraduccion.length);
  
    $('.btn-comprobar').focus();
  
    $('.btn-comprobar').click(function () {
  
      $(this).hide();
      $('.btn-siguiente').show();
      verbosfunction();
  
    });
  
    $('.btn-siguiente').click(function () {
      info()
    })
  
    $(".form-control").keypress(function (e) {
  
      inputval1 = $('.input');
  
      var code = (e.keyCode ? e.keyCode : e.which);
      if (code == 13) {
        if (inputval1.val() == '') {
          inputval1.focus();
        }else {
          info();
        }
      }
  
    });
  
    function info() {
  
      valorv = $('.valor-input-verbo').val();
      valorescrito = $('.input').val();

  
      if (valorescrito == '') {
        alert('llenar campo 1');
      }
      else {
        verbosfunction();
      }
  
      $('.caja-contar').show();
      $('.i-verbo').text(valorv);
      $('.i-verbo-pasado-simple').text(valorescrito);
  
    }
  
    function verbosfunction() {
      contar = contar + 1;
      $('.numero-contar').text(contar);
      //$('.btn-comprobar').text('Siguiente')
      numeroaleatorio = aleatorio(0, colores.length - 1);
  
  
      valor = colores[numeroaleatorio];
      valorVerboSimple = colors[numeroaleatorio];
  
      $('.input').show();

  
      if (colores == '') {
        $('.texto').text('Completado');
        $('.input').hide();
        $('.btn-siguiente').hide();
      } else {
        $('.texto').text(valor);
        $('.valor-input-verbo').val(valor);
      }
  
  
      verificar = verbosnuevos.includes(colores[numeroaleatorio]);
  
      if (verificar == false) {
        verbosnuevos.push(colores[numeroaleatorio])
        verbosPasadosSimplesnuevos.push(colors[numeroaleatorio])
      }
  
  
      valorescrito = $('.input').val();

  
  
      if (valorescrito == 'vacio') {
        $('alerta').hide();
      } else {
        $('.alerta').show();
      }
  
  
      if ($.trim(valorescrito.toUpperCase()) == verificarVerboPasado.toUpperCase()) {
        $('.alerta').text('Correcto');
        $('.alerta').addClass('alert-success');
        $('.alerta').removeClass('alert-danger');
      } else if (valorescrito != verificarVerboPasado || valorescrito2 != verificarVerboParticipio || valorescrito3 != verificarVerboTraduccion) {
        $('.alerta').text('Incorrecto');
        $('.alerta').addClass('alert-danger');
        $('.alerta').removeClass('alert-success');
      }
  
  
  
      verificarVerboPasado = colors[numeroaleatorio];

  
  
      colores.splice(numeroaleatorio, 1);
      colors.splice(numeroaleatorio, 1);

  
      $('.input').val('');
      $('.input').focus();
  

    }
  
  
  });
  
  
  