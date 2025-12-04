<?php
session_start();

$leite = (empty($_SESSION["leite"])) ? "Sem leite" : $_SESSION["leite"];
$adicional = (empty($_SESSION["adicional"])) ? "Sem adicional" : $_SESSION["adicional"];
$cafe = $_SESSION["cafe"];

if (empty($cafe)) {
    header("Location: https://sinaicafe.com.br");
    exit;
};
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmação pedido</title>

    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/confirmacao-pedido.css">
</head>
<body>
    <main class="card">
        <div class="precisamos-nome">
            <h3>Agora só precisamos do seu nome!</h3>

            <input type="submit" value="Tudo certo!" name="lancar-pedido" id="lancar-pedido">

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
    </main>

    <div class="pedido-feito card">
        <h3>Tudo Certo, </h3>
        <p>Seu pedido está sendo preparado, chamaremos pelo seu nome ou número de comanda.</p>
        <span>Comanda: </span>
        <div style="display: flex; gap: 5px;" class="insta">
            <i class="fa-brands fa-instagram"></i>
            <span>Nos siga no Instagram: @sinaicafeoficial</span>
        </div>
    </div>

    <script src="https://kit.fontawesome.com/a6202c195c.js" crossorigin="anonymous"></script>
    <script type="module" src="script/pedidoFinalizadoScript/getOrder.js"></script>
</body>
</html>