-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 25 2023 г., 20:35
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `worddictionary`
--

-- --------------------------------------------------------

--
-- Структура таблицы `words`
--

CREATE TABLE `words` (
  `word on UA` varchar(15) NOT NULL,
  `word on ENG` varchar(15) NOT NULL,
  `definition on UA` text CHARACTER SET utf8 NOT NULL,
  `definition on ENG` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `words`
--

INSERT INTO `words` (`word on UA`, `word on ENG`, `definition on UA`, `definition on ENG`) VALUES
('Крінж', 'Cringe', '-почуття, близьке до \"іспанського сорому\", коли людина відчуває незручність і сором за свої або чужі дії.', '-to feel embarrassed and ashamed about something.'),
('Байтити', 'To bait', '-провокувати, змушувати до якоїсь дії, розводити на щось.', '-something that you use to persuade someone to do something.'),
('Криповий', 'Creepy', '-служить для позначення чогось страшного, моторошного.', '-strange and frightening.'),
('Чілити', 'To chill out', '-заспокоюватися, розслаблятися.', '-to relax completely, or not allow things to upset you.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
