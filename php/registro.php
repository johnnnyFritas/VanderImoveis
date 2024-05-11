<?php
include("conexao.php");
session_start();
postForm();

// Verificar se o usuário já está logado
function confirmUser($username, $email, $password) {
    global $mysqli;

    $passwordCript = password_hash($password, PASSWORD_DEFAULT);

    $usernameQueryCheck = "SELECT id FROM user WHERE username = '$username' OR email = '$email'";

    $usernameSelect = $mysqli->query($usernameQueryCheck);

    if ($usernameSelect->num_rows > 0) {
        return false;
    } else {
        $sql_User = "INSERT INTO user (username, email, senha) VALUES ('$username', '$email', '$passwordCript')";
        $mysqli->query($sql_User);
        return true;
    }
}

function postForm() {
    if ($_SERVER["REQUEST_METHOD"] == 'POST') {
        if (isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password'])) {
            $username = $_POST['username'];
            $email = $_POST['email'];
            $password = $_POST['password'];

            $result = confirmUser($username, $email, $password);
            if ($result == true) {
                echo '<script>
                
                alert("Registrado!");
                
                </script>';
            } else {
                echo '<script>alert("Usuário já registrado!");</script>';
            }
        }
    }
    if (isset($_SESSION['usuario_logado']) && $_SESSION['usuario_logado'] === true) {
        echo '<script>alert("Você já está logado.");</script>';
    }
}