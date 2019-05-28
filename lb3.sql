-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 28, 2019 at 08:52 PM
-- Server version: 5.6.35
-- PHP Version: 7.0.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lb3`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `id_task` int(11) NOT NULL,
  `task` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `id_task`, `task`) VALUES
(53, 77, 'Не надейся на это'),
(54, 25, 'Не делай этого'),
(55, 92, 'Это возможно'),
(56, 55, 'Не сейчас'),
(57, 29, 'Вперед!'),
(58, 45, 'Да, но позднее'),
(59, 69, 'Определенно - да'),
(60, 79, 'Не делай этого'),
(61, 16, 'Ни в коем случае'),
(62, 33, 'Даже не думай'),
(63, 41, 'Ты шутишь?'),
(64, 61, 'Конечно, да'),
(83, 32, 'Не делай этого'),
(84, 69, 'Вперед!'),
(85, 76, 'Думаю, не стоит'),
(86, 59, 'Слишком рано'),
(87, 67, 'Конечно, да'),
(88, 37, 'Не делай этого'),
(89, 15, 'Кто знает?'),
(90, 18, 'Да, но позднее'),
(91, 71, 'Туманный ответ, попробуй еще'),
(92, 9, 'Лучше Вам пока этого не знать'),
(93, 8, 'Определенно - да'),
(94, 99, 'Лучше Вам пока этого не знать'),
(95, 30, 'Конечно, да'),
(96, 75, 'Да, но позднее'),
(97, 73, 'Да'),
(98, 19, 'Определенно - да'),
(99, 90, 'Да'),
(100, 44, 'Слишком рано');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
