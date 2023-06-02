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

// Подготовка SQL-запроса для проверки наличия данных
$sql = "SELECT * FROM `words` WHERE (`word on UA` = '$wordUA' AND `word on ENG` = '$wordENG') OR (`definition on UA` = '$definitionUA' AND `definition on ENG` = '$definitionENG')";

// Выполнение SQL-запроса
$result = $conn->query($sql);

// Проверка наличия записей
$response = array();
$response['exists'] = ($result->num_rows > 0);

// Возвращение результата в формате JSON
header('Content-Type: application/json');
echo json_encode($response);

// Закрытие соединения с базой данных
$conn->close();
?>