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

    // $sql = "ALTER TABLE user ADD senha VARCHAR(255)";

    // if($mysqli->query($sql) === TRUE) {
    //     echo "Conexão feita";
    // }else {
    //     echo $mysqli->error;
    // }