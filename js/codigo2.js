$(document).ready(function () {

  var verbos = ['Bear', 'Bend', 'Bleed', 'Breed', 'Burst', 'Deal', 'Forbid', 'Hang', 'Hold', 'Lay', 'Lead', 'Let', 'Ring', 'Sew', 'Show', 'Sink', 'Sit', 'Stand', 'Stick', 'Tear', 'Bind', 'Burn', 'Creep', 'Find out', 'Leap', 'Sling', 'Sow', 'Wind', 'Thrust', 'Strive', 'Mistake', 'Broadcast', 'Bid', 'Cast', 'Flee', 'Grind', 'Knit', 'Overcome', 'Speed', 'Spring', 'Cling', 'Shear', 'Shrink', 'Slide', 'Spill', 'Split', 'Spoil', 'Spread', 'Sting', 'Stride', 'Strike', 'Swell', 'Swing', 'Undergo', 'Undertake', 'Weave', 'Weep', 'Withdraw', 'Wring'];
  var verbosPasadoSimple = ['Bore', 'Bent', 'Bled', 'Bred', 'Burst', 'Dealt', 'Forbade', 'Hung', 'Held', 'Laid', 'Led', 'Let', 'Rang', 'Sewed', 'Showed', 'Sank', 'Sat', 'Stood', 'Stuck', 'Tore', 'Bound', 'Burnt', 'Crept', 'Found out', 'Leapt', 'Slung', 'Sowed', 'Wound', 'Thrust', 'Strove', 'Mistook', 'Broadcast', 'Bid', 'Cast', 'Fled', 'Ground', 'knit', 'Overcame', 'Sped', 'Sprang', 'Clung', 'Shore', 'Shrank', 'Slid', 'Spilt', 'Split', 'Spoilt', 'Spread', 'Stung', 'Strode', 'Struck', 'Swelled', 'Swung', 'Underwent', 'Undertook', 'Wove', 'Wept', 'Withdrew', 'Wrung'];
  var verbosPasadoParticipio = ['Borne', 'Bent', 'Bled', 'Bred', 'Burst', 'Dealt', 'Forbidden', 'Hung', 'Held', 'Laid', 'Led', 'Let', 'Rung', 'Sewn', 'Shown', 'Sunk', 'Sat', 'Stood', 'Stuck', 'Torn', 'Bound', 'Burnt', 'Crept', 'Found out', 'Leapt', 'Slung', 'Sown', 'Wound', 'Thrust', 'Striven', 'Mistaken', 'Broadcast', 'Bid', 'Cast', 'Fled', 'Ground', 'knit', 'Overcome', 'Sped', 'Sprung', 'Clung', 'Shorn', 'Shrunk', 'Slid', 'Spilt', 'Split', 'Spoilt', 'Spread', 'Stung', 'Stridden', 'Struck', 'Swollen', 'Swung', 'Undergone', 'Undertaken', 'Woven', 'Wept', 'Withdrawn', 'Wrung'];
  var verbosTraduccion = ['Soportar', 'Doblar', 'Sangrar', 'Criar', 'Estallar', 'Tratar', 'Prohibir', 'Colgar', 'Sostener', 'Poner', 'Conducir', 'Dejar', 'Llamar', 'Coser', 'Mostrar', 'Hundir', 'Sentarse', 'Estar de pie', 'Pegar', 'Rasgar', 'Atar', 'Quemar', 'Arrastrarse', 'Averiguar', 'Saltar', 'Tirar', 'Sembrar', 'Enrollar', 'Empujar', 'Esforzarse', 'Equivocarse', 'Transmitir', 'Pujar', 'Arrojar', 'Huir', 'Moler', 'Tejer', 'Vencer', 'Acelerar', 'Saltar', 'Agarrarse', 'Esquilar', 'Encogerse', 'Resbalar', 'Derramar', 'Partir', 'Estropear', 'Extender', 'Picar', 'Dar zancadas', 'Golpear', 'Hinchar', 'Columpiarse', 'Sufrir', 'Emprender', 'tejer', 'Llorar', 'Retirarse', 'Torcer'];

  var verificarVerboPasado = 'vacio';
  var verificarVerboParticipio = 'vacio';
  var verificarVerboTraduccion = 'vacio';

  var verbosnuevos = [];
  var verbosPasadosSimplesnuevos = [];
  var verbosPasadosParticipionuevos = [];
  var verbosTraduccionnuevos = [];


  var contar = -1;

  function aleatorio(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

  //console.log(verbosTraduccion.length);



  $('.btn-comprobar').click(function () {

    $(this).hide();
    $('.btn-siguiente').show();
    verbosfunction();

  });


  $('.btn-siguiente').click(function () {
    info();
  })

  $(".form-control").keypress(function (e) {

    inputval1 = $('.input');
    inputval2 = $('.input2');
    inputval3 = $('.input3');

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
      if (inputval1.val() == '') {
        inputval1.focus();
      } else if (inputval2.val() == '') {
        inputval2.focus();
      } else if (inputval3.val() == '') {
        inputval3.focus();
      } else {
        info();
      }
    }
  });


  function info() {
    valorv = $('.valor-input-verbo').val();
    valorescrito = $('.input').val();
    valorescrito2 = $('.input2').val();
    valorescrito3 = $('.input3').val();

    if (valorescrito == '') {
      alert('llenar campo 1');
    } else if (valorescrito2 == '') {
      alert('llenar campo 2');
    } else if (valorescrito3 == '') {
      alert('llenar campo 3');
    }
    else {
      verbosfunction();
    }

    $('.caja-contar').show();
    $('.i-verbo').text(valorv);
    $('.i-verbo-pasado-simple').text(valorescrito);
    $('.i-verbo-pasado-participio').text(valorescrito2);
    $('.i-verbo-traduccion').text(valorescrito3);

  }

  function verbosfunction() {
    contar = contar + 1;
    $('.numero-contar').text(contar);
    //$('.btn-comprobar').text('Siguiente')
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
      $('.valor-input-verbo').val(valor);
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
  }

});


