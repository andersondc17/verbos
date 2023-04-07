$(document).ready(function () {

  var verbos = ['Arise', 'Awake', 'Be', 'Beat', 'Become', 'Begin', 'Bet', 'Bite', 'Blow', 'Break', 'Bring', 'Build', 'Buy', 'Catch', 'Choose', 'Come', 'Cost', 'Cut', 'Dig', 'Do', 'Draw', 'Dream', 'Drink', 'Drive', 'Eat', 'Fall', 'Feed', 'Feel', 'Fight', 'Find', 'Fly', 'Forget', 'Forgive', 'Freeze', 'Get', 'Give', 'Go', 'Grow', 'Have', 'Hear', 'Hide', 'Hit', 'Hurt', 'Keep', 'Kneel', 'Know', 'Lean', 'Learn', 'Leave', 'Lend', 'Let', 'Lie', 'Light', 'Lose', 'Make', 'Mean', 'Meet', 'Pay', 'Plead', 'Put', 'Quit', 'Read', 'Ride', 'Rise', 'Run', 'Say', 'See', 'Seek', 'Sell', 'Send', 'Set', 'Shake', 'Shine', 'Shoot', 'Shut', 'Sing', 'Sleep', 'Smell', 'Speak', 'Spell', 'Spend', 'Spin', 'Spit', 'Steal', 'Stink', 'Swear', 'Sweat', 'Sweep', 'Swim', 'Take', 'Teach', 'Tell', 'Think', 'Throw', 'Tread', 'Understand', 'Wear', 'Wet', 'Win', 'Write'];
  var verbosPasadoSimple = ['Arose', 'Awoke', 'Was', 'Beat', 'Became', 'Began', 'Bet', 'Bit', 'Blew', 'Broke', 'Brought', 'Built', 'Bought', 'Caught', 'Chose', 'Came', 'Cost', 'Cut', 'Dug', 'Did', 'Drew', 'Dreamt', 'Drank', 'Drove', 'Ate', 'Fell', 'Fed', 'Felt', 'Fought', 'Found', 'Flew', 'Forgot', 'Forgave', 'Froze', 'Got', 'Gave', 'Went', 'Grew', 'Had', 'Heard', 'Hid', 'Hit', 'Hurt', 'Kept', 'Knelt', 'Knew', 'Leant', 'Learnt', 'Left', 'Lent', 'Let', 'Lay', 'Lit', 'Lost', 'Made', 'Meant', 'Met', 'Paid', 'Pled', 'Put', 'Quit', 'Read', 'Rode', 'Rose', 'Ran', 'Said', 'Saw', 'Sought', 'Sold', 'Sent', 'Set', 'Shook', 'Shone', 'Shot', 'Shut', 'Sang', 'Slept', 'Smelt', 'Spoke', 'Spelt', 'Spent', 'Spun', 'Spat', 'Stole', 'Stank', 'Swore', 'Sweat', 'Swept', 'Swam', 'Took', 'Taught', 'Told', 'Thought', 'Threw', 'Trod', 'Understood', 'Wore', 'Wet', 'Won', 'Wrote'];
  var verbosPasadoParticipio = ['Arisen', 'Awoken', 'Been', 'Beaten', 'Become', 'Begun', 'Bet', 'Bitten', 'Blown', 'Broken', 'Brought', 'Built', 'Bought', 'Caught', 'Chosen', 'Come', 'Cost', 'Cut', 'Dug', 'Done', 'Drawn', 'Dreamt', 'Drunk', 'Driven', 'Eaten', 'Fallen', 'Fed', 'Felt', 'Fought', 'Found', 'Flown', 'Forgotten', 'Forgiven', 'Frozen', 'Gotten', 'Given', 'Gone', 'Grown', 'Had', 'Heard', 'Hidden', 'Hit', 'Hurt', 'Kept', 'Knelt', 'Known', 'Leant', 'Learnt', 'Left', 'Lent', 'Let', 'Lain', 'Lit', 'Lost', 'Made', 'Meant', 'Met', 'Paid', 'Pled', 'Put', 'Quit', 'Read', 'Ridden', 'Risen', 'Run', 'Said', 'Seen', 'Sought', 'Sold', 'Sent', 'Set', 'Shaken', 'Shone', 'Shot', 'Shut', 'Sung', 'Slept', 'Smelt', 'Spoken', 'Spelt', 'Spent', 'Spun', 'Spat', 'Stolen', 'Stunk', 'Sworn', 'Sweat', 'Swept', 'Swum', 'Taken', 'Taught', 'Told', 'Thought', 'Thrown', 'Trodden', 'Understood', 'Worn', 'Wet', 'Won', 'Written'];
  var verbosTraduccionBackup = ['Surgir', 'Despertar', 'Ser', 'Golpear', 'Convertir', 'Empezar', 'Apostar', 'Morder', 'Soplar', 'Romper', 'Traer', 'Construir', 'Comprar', 'Agarrar', 'Elegir', 'Venir', 'Costar', 'Cortar', 'Cavar', 'Hacer', 'Dibujar', 'Soñar', 'Beber', 'Conducir', 'Comer', 'Caer', 'Alimentar', 'Sentir', 'Pelear', 'Encontrar', 'Volar', 'Olvidar', 'Perdonar', 'Congelar', 'Conseguir', 'Dar', 'Ir', 'Crecer', 'Tener', 'Escuchar', 'Esconder', 'Golpear', 'Lastimar', 'Mantener', 'Arrodillar', 'Saber', 'Apoyar', 'Aprender', 'Abandonar', 'Prestar', 'Dejar', 'Estar acostado', 'Encender', 'Perder', 'Hacer', 'Significar', 'Conocer', 'Pagar', 'Alegar', 'Poner', 'Abandonar', 'Leer', 'Montar', 'Levantar', 'Correr', 'Decir', 'Ver', 'Buscar', 'Vender', 'Enviar', 'Colocar', 'Sacudir', 'Brillar', 'Disparar', 'Cerrar', 'Cantar', 'Dormir', 'Oler', 'Hablar', 'Deletrear', 'Gastar', 'Girar', 'Escupir', 'Robar', 'Apestar', 'Jurar', 'Sudar', 'Barrer', 'Nadar', 'Tomar', 'Enseñar', 'Decir', 'Pensar', 'Tirar', 'Pisar', 'Comprender', 'Vestir', 'Mojar', 'Ganar', 'Escribir'];
  var verbosTraduccion = ['Surgir', 'Despertar', 'Ser', 'Golpear', 'Convertir', 'Empezar', 'Apostar', 'Morder', 'Soplar', 'Romper', 'Traer', 'Construir', 'Comprar', 'Agarrar', ['Elegir', 'Escoger'], 'Venir', 'Costar', 'Cortar', 'Cavar', 'Hacer', 'Dibujar', 'Soñar', 'Beber', 'Conducir', 'Comer', 'Caer', 'Alimentar', 'Sentir', 'Pelear', 'Encontrar', 'Volar', 'Olvidar', 'Perdonar', 'Congelar', 'Conseguir', 'Dar', 'Ir', 'Crecer', 'Tener', 'Escuchar', ['Esconder', 'Ocultar'], 'Golpear', 'Lastimar', 'Mantener', 'Arrodillar', 'Saber', 'Apoyar', 'Aprender', 'Abandonar', 'Prestar', 'Dejar', 'Estar acostado', 'Encender', 'Perder', 'Hacer', 'Significar', 'Conocer', 'Pagar', 'Alegar', 'Poner', 'Abandonar', 'Leer', 'Montar', 'Levantar', 'Correr', 'Decir', 'Ver', 'Buscar', 'Vender', 'Enviar', 'Colocar', 'Sacudir', 'Brillar', 'Disparar', 'Cerrar', 'Cantar', 'Dormir', 'Oler', 'Hablar', 'Deletrear', 'Gastar', 'Girar', 'Escupir', 'Robar', 'Apestar', 'Jurar', 'Sudar', 'Barrer', 'Nadar', 'Tomar', 'Enseñar', 'Decir', 'Pensar', 'Tirar', 'Pisar', 'Comprender', 'Vestir', 'Mojar', 'Ganar', 'Escribir'];

  var verificarVerboPasado = 'vacio';
  var verificarVerboParticipio = 'vacio';
  var verificarVerboTraduccion = 'vacio';

  var verificarVerboPasadoM = 'vacio';
  var verificarVerboParticipioM = 'vacio';
  var verificarVerboTraduccionM = 'vacio';

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

  $('.btn-comprobar').focus();

  $('.btn-comprobar').click(function () {

    $(this).hide();
    $('.btn-siguiente').show();
    verbosfunction();
  });

  $('.btn-siguiente').click(function () {
    info()
  })

  var contandorInput = 1;
  $(".form-control").keypress(function (e) {
    inputval1 = $('.input');
    inputval2 = $('.input2');
    inputval3 = $('.input3');

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
      if (inputval1.val() == '') {
        contandorInput = 1;
        inputval1.focus();
      } else if (inputval2.val() == '') {
        contandorInput = 2;
        inputval2.focus();
      } else if (inputval3.val() == '') {
        contandorInput = 3;
        inputval3.focus();
      } else {
        info();
      }
    }

  });

  $(".form-control").keydown(function (e) {
    switch (e.which) {
      case 38:
        contandorInput--;
        if (contandorInput < 1) {
          contandorInput = 3;
        }
        $('#vinput' + contandorInput).focus();
        break;
      case 40: // down
        contandorInput++;
        if (contandorInput > 3) {
          contandorInput = 1;
        }
        $('#vinput' + contandorInput).focus();
        break;
      default: return; // exit this handler for other keys
    }
  });

  function info() {

    valorv = $('.valor-input-verbo').val();
    valorescrito = $('.input').val();
    valorescrito2 = $('.input2').val();
    valorescrito3 = $('.input3').val();

    if (valorescrito == '') {
      alert('llenar campo 1');
      $('.input').focus();
      return;
    } else if (valorescrito2 == '') {
      alert('llenar campo 2');
      $('.input2').focus();
      return;
    } else if (valorescrito3 == '') {
      alert('llenar campo 3');
      $('.input3').focus();
      return;
    }
    else {
      verbosfunction();
    }

    $('.caja-contar').show();
    $('.i-verbo').text(valorv);
    //$('.i-verbo-pasado-simple').text(valorescrito);
    //$('.i-verbo-pasado-participio').text(valorescrito2);
    //$('.i-verbo-traduccion').text(valorescrito3);
  }

  var estado = true;

  function verbosfunction() {

    valorescrito = $.trim($('.input').val());
    valorescrito2 = $.trim($('.input2').val());
    valorescrito3 = $.trim($('.input3').val());

    if (valorescrito == 'vacio') {
      $('.alerta').hide();
    } else {
      $('.alerta').show();
    }

    //validar(numero, valorescrito, valorescrito2, valorescrito3);
    if (verificarVerboPasado.includes(valorescrito.toUpperCase()) &&
      verificarVerboParticipio.includes(valorescrito2.toUpperCase()) &&
      verificarVerboTraduccion.includes(valorescrito3.toUpperCase())) {
      $('.alerta').text('Correcto');
      $('.alerta').addClass('alert-success');
      $('.alerta').removeClass('alert-danger');
      if (valorescrito != 'vacio') {
        estado = true;
      }

    } else if (valorescrito != verificarVerboPasado || valorescrito2 != verificarVerboParticipio || valorescrito3 != verificarVerboTraduccion) {
      $('.alerta').text('Incorrecto');
      $('.alerta').addClass('alert-danger');
      $('.alerta').removeClass('alert-success');
      estado = false;
    }

    if (verificarVerboPasado.includes(valorescrito.toUpperCase())) {
      $('.i-verbo-pasado-simple').text(valorescrito);
    } else if (!verificarVerboPasado.includes(valorescrito.toUpperCase())) {
      $('.i-verbo-pasado-simple').text(valorescrito + `/ ${verificarVerboPasadoM}`);
    }

    if (verificarVerboParticipio.includes(valorescrito2.toUpperCase())) {
      $('.i-verbo-pasado-participio').text(valorescrito2);
    } else if (!verificarVerboParticipio.includes(valorescrito2.toUpperCase())) {
      $('.i-verbo-pasado-participio').text(valorescrito2 + `/ ${verificarVerboParticipioM}`);
    }

    if (verificarVerboTraduccion.includes(valorescrito3.toUpperCase())) {
      $('.i-verbo-traduccion').text(valorescrito3);
    } else if (!verificarVerboTraduccion.includes(valorescrito3.toUpperCase())) {
      $('.i-verbo-traduccion').text(valorescrito3 + `/ ${verificarVerboTraduccionM}`);
    }

    /*
    if(Array.isArray(verificarVerboTraduccion)){
      console.log("es array")
    }else{
      console.log("no es array")
    }
    */

    if (estado == true) {
      contar = contar + 1;
      numeroaleatorio = aleatorio(0, verbos.length - 1);

      $('.numero-contar').text(contar);
      //$('.btn-comprobar').text('Siguiente')

      valor = verbos[numeroaleatorio];
      valorVerboSimple = verbosPasadoSimple[numeroaleatorio];

      verificar = verbosnuevos.includes(verbos[numeroaleatorio]);

      if (verificar == false) {
        verbosnuevos.push(verbos[numeroaleatorio])
        verbosPasadosSimplesnuevos.push(verbosPasadoSimple[numeroaleatorio])
        verbosPasadosParticipionuevos.push(verbosPasadoParticipio[numeroaleatorio])
        verbosTraduccionnuevos.push(verbosTraduccion[numeroaleatorio])
      }

      verificarVerboPasado = [verbosPasadoSimple[numeroaleatorio]];
      verificarVerboParticipio = [verbosPasadoParticipio[numeroaleatorio]];
      //verificarVerboTraduccion = verbosTraduccion[numeroaleatorio];

      if (Array.isArray(verbosTraduccion[numeroaleatorio])) {
        verificarVerboTraduccion = verbosTraduccion[numeroaleatorio];
      } else {
        verificarVerboTraduccion = [verbosTraduccion[numeroaleatorio]];
      }

      verificarVerboPasado = verificarVerboPasado.map(function (e) {
        return e.toUpperCase()
      });

      verificarVerboParticipio = verificarVerboParticipio.map(function (e) {
        return e.toUpperCase()
      });

      verificarVerboTraduccion = verificarVerboTraduccion.map(function (e) {
        return e.toUpperCase()
      });

      verificarVerboPasadoM = verificarVerboPasado.map(function (e) {
        return e.toLowerCase()
      });

      verificarVerboParticipioM = verificarVerboParticipio.map(function (e) {
        return e.toLowerCase()
      });

      verificarVerboTraduccionM = verificarVerboTraduccion.map(function (e) {
        return e.toLowerCase()
      });


      verbos.splice(numeroaleatorio, 1);
      verbosPasadoSimple.splice(numeroaleatorio, 1);
      verbosPasadoParticipio.splice(numeroaleatorio, 1);
      verbosTraduccion.splice(numeroaleatorio, 1);


      $('.input').val('');
      $('.input2').val('');
      $('.input3').val('');
    }

    $('.input').show();
    $('.input2').show();
    $('.input3').show();

    $('.input').focus();

    if (verbos == '') {
      $('.texto').text('Completado');
      $('.input').hide();
      $('.input2').hide();
      $('.input3').hide();
      $('.btn-siguiente').hide();
    } else {
      $('.texto').text(valor);
      $('.valor-input-verbo').val(valor);
    }



  }

  /*------------------------------------------------------------------------------------------*/

  /*
  var palabraUno = 'hola';
  var arreglos = ['dos', 'tres', ['piso', 'hola'], 'tela']


  console.log('holaaaa', arreglos.join())

  arreglos.forEach(x => {
    if (x.includes('piso')) {
      console.log(x, 'true')
    } else if (!x.includes('piso')) {
      console.log(x, 'false')
    }
  })


  var arreglos = ['dos', 'tres', ['piso', 'hola'], 'tela']
  arreglos.toUpper();
  console.log(arreglos)
  */


});


