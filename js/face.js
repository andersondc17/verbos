$(document).ready(function () {

    var palabra = ['Cara', 'Ceja', 'Ojo', 'Nariz', 'Labios', 'Boca','Mentón','Oreja'];
    var word = ['Face', 'Eyebrow', 'Eye', 'Nose', 'Lips', 'Mouth','Chin','Ear'];
    

    var verificarVerboPasado = 'vacio';

  
    var verbosnuevos = [];
    var verbosPasadosSimplesnuevos = [];

  
    var contar = -1;
  
    function aleatorio(min, max) {
      var num = Math.floor(Math.random() * (max - min + 1)) + min;
      return num;
    }
  
    //console.log(palabra.length);
  
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
      numeroaleatorio = aleatorio(0, palabra.length - 1);
  
  
      valor = palabra[numeroaleatorio];
      valorVerboSimple = word[numeroaleatorio];
  
      $('.input').show();

  
      if (palabra == '') {
        $('.texto').text('Completado');
        $('.input').hide();
        $('.btn-siguiente').hide();
        let regresar = $('.btn-regresar').css('display','block');
        regresar.focus();
      } else {
        $('.texto').text(valor);
        $('.valor-input-verbo').val(valor);
      }
  
  
      verificar = verbosnuevos.includes(palabra[numeroaleatorio]);
  
      if (verificar == false) {
        verbosnuevos.push(palabra[numeroaleatorio])
        verbosPasadosSimplesnuevos.push(word[numeroaleatorio])
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
        $('.alerta').removeClass('alert-warning');
      } else if (valorescrito != verificarVerboPasado) {
        $('.alerta').text(`Incorrecto - Solución: ${verificarVerboPasado}`);
        $('.alerta').addClass('alert-warning');
        $('.alerta').removeClass('alert-success');
      }
  
  
  
      verificarVerboPasado = word[numeroaleatorio];

  
  
      palabra.splice(numeroaleatorio, 1);
      word.splice(numeroaleatorio, 1);

  
      $('.input').val('');
      $('.input').focus();
  

    }
  
  
  });
  
  
  