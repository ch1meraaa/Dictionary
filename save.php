<?php
// Подключение к базе данных
$servername = 'localhost';
$username = 'root';
$password = 'root';
$dbname = 'worddictionary';
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die('Помилка підключення до БД' . $conn->connect_error);
}

// Получение данных из POST-запроса
$data = json_decode(file_get_contents('php://input'), true);

// Извлечение необходимых данных
$wordUA = $data['word on UA'];
$wordENG = $data['word on ENG'];
$definitionUA = $data['definition on UA'];
$definitionENG = $data['definition on ENG'];

// Подготовка SQL-запроса для сохранения данных
$sql = "INSERT INTO `words` (`word on UA`, `word on ENG`, `definition on UA`, `definition on ENG`) 
        VALUES ('$wordUA', '$wordENG', '$definitionUA', '$definitionENG')";

// Выполнение SQL-запроса
if ($conn->query($sql) === TRUE) {
    echo 'Дані успшіно записані';
} else {
    echo 'Помилка при записі' . $conn->error;
}

// Закрытие соединения с базой данных
$conn->close();
?>