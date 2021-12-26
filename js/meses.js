$(document).ready(function () {

    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
    

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
      numeroaleatorio = aleatorio(0, meses.length - 1);
  
  
      valor = meses[numeroaleatorio];
      valorVerboSimple = months[numeroaleatorio];
  
      $('.input').show();

  
      if (meses == '') {
        $('.texto').text('Completado');
        $('.input').hide();
        $('.btn-siguiente').hide();
      } else {
        $('.texto').text(valor);
        $('.valor-input-verbo').val(valor);
      }
  
  
      verificar = verbosnuevos.includes(meses[numeroaleatorio]);
  
      if (verificar == false) {
        verbosnuevos.push(meses[numeroaleatorio])
        verbosPasadosSimplesnuevos.push(months[numeroaleatorio])
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
  
  
  
      verificarVerboPasado = months[numeroaleatorio];

  
  
      meses.splice(numeroaleatorio, 1);
      months.splice(numeroaleatorio, 1);

  
      $('.input').val('');
      $('.input').focus();
  

    }
  
  
  });
  
  
  