$(document).ready(function () {

  var verbos = ['Arise', 'Awake', 'Be', 'Beat','Become','Begin','Bet','Bite','Blow','Break','Bring','Build','Buy','Catch','Choose','Come','Cost','Cut','Dig','Do','Draw','Dream','Drink','Drive','Eat','Fall','Feed','Feel','Fight','Find','Fly','Forget','Forgive','Freeze','Get','Give','Go','Grow','Have','Hear','Hide','Hit','Hurt','Keep','Kneel','Know','Lean','Learn','Leave','Lend','Let','Lie','Light','Lose','Make','Mean','Meet','Pay','Plead','Put','Quit','Read','Ride','Rise','Run','Say','See','Seek','Sell','Send','Set','Shake','Shine','Shoot','Shut','Sing','Sleep','Smell','Speak','Spell','Spend','Spin','Spit','Steal','Stink','Swear','Sweat','Sweep','Swim','Take','Teach','Tell','Think','Throw','Tread','Understand','Wear','Wet','Win','Write'];
  var verbosPasadoSimple = ['Arose', 'Awoke', 'Was', 'Beat','Became','Began','Bet','Bit','Blew','Broke','Brought','Built','Bought','Caught','Chose','Came','Cost','Cut','Dug','Did','Drew','Dreamt','Drank','Drove','Ate','Fell','Fed','Felt','Fought','Found','Flew','Forgot','Forgave','Froze','Got','Gave','Went','Grew','Had','Heard','Hid','Hit','Hurt','Kept','Knelt','Knew','Leant','Learnt','Left','Lent','Let','Lay','Lit','Lost','Made','Meant','Met','Paid','Pled','Put','Quit','Read','Rode','Rose','Ran','Said','Saw','Sought','Sold','Sent','Set','Shook','Shone','Shot','Shut','Sang','Slept','Smelt','Spoke','Spelt','Spent','Spun','Spat','Stole','Stank','Swore','Sweat','Swept','Swam','Took','Taught','Told','Thought','Threw','Trod','Understood','Wore','Wet','Won','Wrote'];
  var verbosPasadoParticipio = ['Arisen','Awoken','Been','Beaten','Become','Begun','Bet','Bitten','Blown','Broken','Brought','Built','Bought','Caught','Chosen','Come','Cost','Cut','Dug','Done','Drawn','Dreamt','Drunk','Driven','Eaten','Fallen','Fed','Felt','Fought','Found','Flown','Forgotten','Forgiven','Frozen','Gotten','Given','Gone','Grown','Had','Heard','Hidden','Hit','Hurt','Kept','Knelt','Known','Leant','Learnt','Left','Lent','Let','Lain','Lit','Lost','Made','Meant','Met','Paid','Pled','Put','Quit','Read','Ridden','Risen','Run','Said','Seen','Sought','Sold','Sent','Set','Shaken','Shone','Shot','Shut','Sung','Slept','Smelt','Spoken','Spelt','Spent','Spun','Spat','Stolen','Stunk','Sworn','Sweat','Swept','Swum','Taken','Taught','Told','Thought','Thrown','Trodden','Understood','Worn','Wet','Won','Written'];
  var verbosTraduccion = ['Surgir','Despertar','Ser','Golpear','Convertir','Empezar','Apostar','Morder','Soplar','Romper','Traer','Construir','Comprar','Agarrar','Elegir','Venir','Costar','Cortar','Cavar','Hacer','Dibujar','Soñar','Beber','Conducir','Comer','Caer','Alimentar','Sentir','Pelear','Encontrar','Volar','Olvidar','Perdonar','Congelar','Conseguir','Dar','Ir','Crecer','Tener','Escuchar','Esconder','Golpear','Lastimar','Mantener','Arrodillar','Saber','Apoyar','Aprender','Abandonar','Prestar','Dejar','Mentir','Encender','Perder','Hacer','Significar','Conocer','Pagar','Alegar','Poner','Abandonar','Leer','Montar','Levantar','Correr','Decir','Ver','Buscar','Vender','Enviar','Colocar','Sacudir','Brillar','Disparar','Cerrar','Cantar','Dormir','Oler','Hablar','Deletrear','Gastar','Girar','Escupir','Robar','Apestar','Jurar','Sudar','Barrer','Nadar','Tomar','Enseñar','Decir','Pensar','Tirar','Pisar','Comprender','Vestir','Mojar','Ganar','Escribir'];

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


