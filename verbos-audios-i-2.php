<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="css/estilos.css">
    <link rel="icon" type="image/png" href="img/favicon.png">
</head>

<body>

    <div class="container col-4 pt-5">

        <h1 class="text-center p-5">Verbos Inglés</h1>

        <div>

            <?php

            $verbos = ['0', 'Bear', 'Bend', 'Bleed', 'Breed', 'Burst', 'Deal', 'Forbid', 'Hang', 'Hold', 'Lay', 'Lead', 'Let', 'Ring', 'Sew', 'Show', 'Sink', 'Sit', 'Stand', 'Stick', 'Tear', 'Bind', 'Burn', 'Creep', 'Find out', 'Leap', 'Sling', 'Sow', 'Wind', 'Thrust', 'Strive', 'Mistake', 'Broadcast', 'Bid', 'Cast', 'Flee', 'Grind', 'Knit', 'Overcome', 'Speed', 'Spring', 'Cling', 'Shear', 'Shrink', 'Slide', 'Spill', 'Split', 'Spoil', 'Spread', 'Sting', 'Stride', 'Strike', 'Swell', 'Swing', 'Undergo', 'Undertake', 'Weave', 'Weep', 'Withdraw', 'Wring'];
            $verbosTraduccion = ['0', 'Soportar', 'Doblar', 'Sangrar', 'Criar', 'Estallar', 'Tratar', 'Prohibir', 'Colgar', 'Sostener', 'Poner', 'Conducir', 'Dejar', 'Llamar', 'Coser', 'Mostrar', 'Hundir', 'Sentarse', 'Estar de pie', 'Pegar', 'Rasgar', 'Atar', 'Quemar', 'Arrastrarse', 'Averiguar', 'Saltar', 'Tirar', 'Sembrar', 'Enrollar', 'Empujar', 'Esforzarse', 'Equivocarse', 'Transmitir', 'Pujar', 'Arrojar', 'Huir', 'Moler', 'Tejer', 'Vencer', 'Acelerar', 'Saltar', 'Agarrarse', 'Esquilar', 'Encogerse', 'Resbalar', 'Derramar', 'Partir', 'Estropear', 'Extender', 'Picar', 'Dar zancadas', 'Golpear', 'Hinchar', 'Columpiarse', 'Sufrir', 'Emprender', 'tejer', 'Llorar', 'Retirarse', 'Torcer'];

            $audios = range(1, 10);
            $audiosazar = shuffle($audios);
            $valor = 0;
            $contar = 1;

            foreach ($audios as $audio) :  ?>
                <?php $valor++ ?>

                <?php if ($valor == 1) : ?>
                    <div class="caja-contenedor contenedor-<?php echo $contar ?>">
                    <?php endif ?>

                    <div class="caja-audio">

                        <audio controls src="audios/ingles-2/Track<?php echo $audio ?>.mp3"></audio>
                        <input type="text" class="input-audio<?php echo $audio ?>">
                        <input type="hidden" class="input-resuelto-audio<?php echo $audio ?>" value="<?php echo $verbos[$audio] ?>">
                        <!--
                      <label><?php echo $verbos[$audio] ?></label> |
                      <label><?php echo $verbosTraduccion[$audio] ?></label> 
                -->
                        <i class="fas fa-check icono-check" id="icono-check-<?php echo $audio ?>"></i>
                        <i class="fas fa-times icono-wrong" id="icono-wrong-<?php echo $audio ?>"></i>

                    </div>

                    <?php if ($valor % 4 == 0) : ?>
                    </div>
                    <?php $contar++ ?>
                    <div class="caja-contenedor contenedor-<?php echo $contar ?>">
                    <?php endif ?>

                    <?php if ($valor == count($audios)) : ?>
                    </div>
                <?php endif ?>


            <?php endforeach ?>

        </div>


        <div class="text-center">
            <button class="btn btn-success boton-siguiente">Siguiente</button>
        </div>


    </div>


</body>
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
<script src="js/codigo-audio2.js"></script>

</html>