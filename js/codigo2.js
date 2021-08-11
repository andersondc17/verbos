$(document).ready(function () {

    var verbos = ['Bear', 'Bend', 'Bleed', 'Breed','Burst','Deal','Forbid','Hang','Hold','Lay','Lead','Let','Ring','Sew','Show','Sink','Sit','Stand','Stick','Tear'];
    var verbosPasadoSimple = ['Bore', 'Bent', 'Bled', 'Bred','Burst','Dealt','Forbade','Hung','Held','Laid','Led','Let','Rang','Sewed','Showed','Sank','Sat','Stood','Stuck','Tore'];
    var verbosPasadoParticipio = ['Borne','Bent','Bled','Bred','Burst','Dealt','Forbidden','Hung','Held','Laid','Led','Let','Rang','Sewn','Shown','Sunk','Sat','Stood','Stuck','Torn'];
    var verbosTraduccion = ['Soportar','Doblar','Sangrar','Criar','Estallar','Tratar','Prohibir','Colgar','Sostener','Poner','Conducir','Dejar','Llamar','Coser','Mostrar','Hundir','Sentarse','Estar de pie','Pegar','Rasgar'];
  
    var verificarVerboPasado = 'vacio';
    var verificarVerboParticipio = 'vacio';
    var verificarVerboTraduccion = 'vacio';
  
    var verbosnuevos = [];
    var verbosPasadosSimplesnuevos = [];
    var verbosPasadosParticipionuevos = [];
    var verbosTraduccionnuevos = [];
  
    var contar = 0;
  
    function aleatorio(min, max) {
      var num = Math.floor(Math.random() * (max - min + 1)) + min;
      return num;
    }
  
    //console.log(verbosTraduccion.length);
  
    $('.btn-comprobar').click(function () {
  
      contar = contar+1;
      $('.numero-contar').text(contar);
      $('.btn-comprobar').text('Siguiente')
      numeroaleatorio = aleatorio(0, verbos.length - 1);
  
  
      valor = verbos[numeroaleatorio];
      valorVerboSimple = verbosPasadoSimple[numeroaleatorio];
  
      $('.input').show();
      $('.input2').show();
      $('.input3').show();
     
      if (verbos == '') {
        $('.texto').text('No hay');
        $('.input').hide();
        $('.btn-comprobar').text('Finalizar')
      } else {
        $('.texto').text(valor);
      }
  
  
      verificar = verbosnuevos.includes(verbos[numeroaleatorio]);
  
      if (verificar == false) {
        verbosnuevos.push(verbos[numeroaleatorio])
        verbosPasadosSimplesnuevos.push(verbosPasadoSimple[numeroaleatorio])
        verbosPasadosParticipionuevos.push(verbosPasadoParticipio[numeroaleatorio])
        verbosTraduccionnuevos.push(verbosTraduccion[numeroaleatorio])
      }
  
  
      valorescrito = $('.input').val();
      valorescrito2 = $('.input2').val();
      valorescrito3 = $('.input3').val();
  
  
      if (valorescrito == 'vacio') {
        $('alerta').hide();
      } else {
        $('.alerta').show();
      }
  
  
      if (valorescrito.toUpperCase() == verificarVerboPasado.toUpperCase() && valorescrito2.toUpperCase() == verificarVerboParticipio.toUpperCase() && valorescrito3.toUpperCase() == verificarVerboTraduccion.toUpperCase()) {
        $('.alerta').text('Correcto');
        $('.alerta').addClass('alert-success');
        $('.alerta').removeClass('alert-danger');
      } else if (valorescrito != verificarVerboPasado || valorescrito2 != verificarVerboParticipio || valorescrito3 != verificarVerboTraduccion) {
        $('.alerta').text('Incorrecto');
        $('.alerta').addClass('alert-danger');
        $('.alerta').removeClass('alert-success');
      }
  
  
  
      verificarVerboPasado = verbosPasadoSimple[numeroaleatorio];
      verificarVerboParticipio = verbosPasadoParticipio[numeroaleatorio];
      verificarVerboTraduccion = verbosTraduccion[numeroaleatorio];
  
  
      verbos.splice(numeroaleatorio, 1);
      verbosPasadoSimple.splice(numeroaleatorio, 1);
      verbosPasadoParticipio.splice(numeroaleatorio, 1);
      verbosTraduccion.splice(numeroaleatorio, 1);
  
      $('.input').val('');
      $('.input').focus();
  
      $('.input2').val('');
      $('.input3').val('');
  
  
  
    });
  
  
  });
  
  
  