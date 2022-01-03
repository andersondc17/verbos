$(document).ready(function () {

    var adverbios = ['Aquí', 'Ahí', 'Cerca', 'Lejos', 'Adelante', 'Detrás', 'Opuesto','Alrededor','Más allá','Fuera','Fuera de','Encima','Algún lado','Ahí','Hacia','Debajo','Arriba','Dónde'];
    var adverbs = ['Here', 'There', 'Near', 'Far', 'Ahead', 'Behind', 'Opposite','Around','Beyond','Out','Outside','Over','Somewhere','There','Towards','Under','Up','Where'];
    

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
      numeroaleatorio = aleatorio(0, adverbios.length - 1);
  
  
      valor = adverbios[numeroaleatorio];
      valorVerboSimple = adverbs[numeroaleatorio];
  
      $('.input').show();

  
      if (adverbios == '') {
        $('.texto').text('Completado');
        $('.input').hide();
        $('.btn-siguiente').hide();
      } else {
        $('.texto').text(valor);
        $('.valor-input-verbo').val(valor);
      }
  
  
      verificar = verbosnuevos.includes(adverbios[numeroaleatorio]);
  
      if (verificar == false) {
        verbosnuevos.push(adverbios[numeroaleatorio])
        verbosPasadosSimplesnuevos.push(adverbs[numeroaleatorio])
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
  
  
  
      verificarVerboPasado = adverbs[numeroaleatorio];

  
  
      adverbios.splice(numeroaleatorio, 1);
      adverbs.splice(numeroaleatorio, 1);

  
      $('.input').val('');
      $('.input').focus();
  

    }
  
  
  });
  
  
  