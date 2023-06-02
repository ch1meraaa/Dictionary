<?php
$servername = 'localhost';
$username = 'root';
$password = 'root';
$dbname = 'worddictionary';
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die('Помилка підключення до БД' . $conn->connect_error);
}
$keyword = $_GET['keyword'];

// Запрос до бази даних для отримання информації по ключевому слову
$sql = "SELECT * FROM words WHERE `word on ENG` = '$keyword'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Выводим информацию, если она найдена
    $row = $result->fetch_assoc();
    echo $row['definition on ENG'];
} else {
    $sql = "SELECT * FROM words WHERE `word on UA` = '$keyword'";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        // Выводим информацию, если она найдена
        $row = $result->fetch_assoc();
        echo $row['definition on UA'];
    } else {
        // Якщо информація не знайдена
        if (preg_match('/[а-яА-ЯЁё]/u', $keyword)) {
            echo 'Нажаль, цього слова не знаю :(';
        } else {
            echo 'Unfortunately I don\'t know this word.';
        }
    }
}

