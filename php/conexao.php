<?php
    $hostname = "localhost";
    $usuario = "root";
    $senha = "";
    $bancodedados = "user";

    $mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);

    // $sql = "CREATE TABLE user(
    //     id INT AUTO_INCREMENT PRIMARY KEY,
    //     username VARCHAR(20) NOT NULL,
    //     senha VARCHAR(225) NOT NULL,
    //     email VARCHAR(245) NOT NULL
    // )";

    // if($mysqli->query($sql) === TRUE) {
    //     echo "Conexão feita";
    // }else {
    //     echo $mysqli->error;
    // }