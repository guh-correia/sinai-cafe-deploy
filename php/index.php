<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    session_start();
    $_SESSION["leite"] = $_GET["tipo-leite"];
    $_SESSION["adicional"] = $_GET["tipo-adicional"];
    $_SESSION["cafe"] =  $_GET["cafe"];

    header("Location: /sinai-cafe/php/confirmacaoPedido.php");
    exit;
};

?>