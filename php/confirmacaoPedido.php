<?php
session_start();

$leite = (empty($_SESSION["leite"])) ? "Sem leite" : $_SESSION["leite"];
$adicional = (empty($_SESSION["adicional"])) ? "Sem adicional" : $_SESSION["adicional"];
$cafe = $_SESSION["cafe"];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmação pedido</title>

    <link rel="stylesheet" href="/sinai-cafe/css/reset.css">
    <link rel="stylesheet" href="/sinai-cafe/css/confirmacao-pedido.css">
</head>
<body>
    <img class="background-image" src="<blockquote class="imgur-embed-pub" lang="en" data-id="a/p85RPOW"  ><a href="//imgur.com/a/p85RPOW">background image</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>" alt="background image">
    <main class="card">
        <div class="precisamos-nome">
            <h3>Agora só precisamos do seu nome!</h3>

            <input pattern="[A-Za-zÀ-ÿ\s]+" type="text" name="nome-cliente" id="nome-cliente" placeholder="Seu nome">
        </div>
        <div class="pedidoCliente">
            <h1 class="title">Seu pedido:</h1>
            <div class="line"></div>
            <div class="drink">
                <h3 class="bebida">Bebida: <span><?php echo $cafe; ?></span></h3> 
                <div class="especificacao-pedido">
                    <span>Leite: </span>
                    <p><?php echo $leite; ?></p>
                </div>

                <div class="especificacao-pedido">
                    <span>Adicional: </span>
                    <p><?php echo $adicional; ?></p>
                </div>
            </div>
        </div>

        <input type="submit" value="Tudo certo!" name="lancar-pedido" id="lancar-pedido">
    </main>

    <div class="pedido-feito card">
        <h3>Tudo Certo, </h3>
        <p>Seu pedido está sendo preparado, chamaremos pelo seu nome ou número de comanda.</p>
        <span>Comanda: </span>
    </div>

    <script type="module" src="/pedidoFinalizadoScript/getOrder.js"></script>
</body>
</html>