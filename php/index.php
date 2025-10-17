<?php
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        session_start();
        $_SESSION["leite"] = $_GET["tipo-leite"];
        $_SESSION["adicional"] = $_GET["tipo-adicional"];
        $_SESSION["cafe"] =  $_GET["cafe"];

        echo $_SESSION["leite"], $_SESSION["adicional"], $_SESSION["cafe"];

        // header("Location: /confirmacaoPedido.php");
    // exit;
    } else {
        header("Location: https://sinai-cafe.vercel.app/");
        exit;
    };
?>