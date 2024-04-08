<?php
    $hostname = "localhost";
    $usuario = "root";
    $senha = "";
    $bancodedados = "user";

    $mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);

    // $sql = "CREATE TABLE user(
    //     id INT AUTO_INCREMENT PRIMARY KEY,
    //     user VARCHAR(20) NOT NULL
    // )";

    // if($mysqli->query($sql)) {
    //     echo "Eba!";
    // }else {
    //     echo $mysqli->error;
    // }
