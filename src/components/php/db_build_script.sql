-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: fdb27.freehostingeu.com
-- Generation Time: Jul 14, 2021 at 09:48 AM
-- Server version: 5.7.20-log
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `3848398_newdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(32) NOT NULL,
  `question` varchar(100) NOT NULL,
  `answer` varchar(70) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `question`, `answer`) VALUES
(1, 'Who is Doron?', 'All answers are correct'),
(2, 'Who is Michael Winkler?', 'All answers are correct'),
(3, 'Who is Ido Nidbach?', 'Just an ordinary mensch'),
(4, 'How many pets does Doron have?', '2 pets (according to the zoom meetings)'),
(5, 'Beer or Pizza or both?', 'Both');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(32) NOT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `firstname` varchar(32) NOT NULL,
  `lastname` varchar(32) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `username`, `password`, `firstname`, `lastname`) VALUES
(12, '56daf002d328229cf4ef837e0b0ecbde', '25d55ad283aa400af464c76d713c07ad', 'michael', 'winkler');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(32) NOT NULL,
  `question` varchar(100) NOT NULL,
  `answer1` varchar(70) NOT NULL,
  `answer2` varchar(70) NOT NULL,
  `answer3` varchar(70) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `question`, `answer1`, `answer2`, `answer3`) VALUES
(1, 'Who is Doron?', 'A good man', 'All answers are correct', 'A good lecturer'),
(2, 'Who is Michael Winkler?', 'A good friend', 'A good Developer', 'All answers are correct'),
(3, 'Who is Ido Nidbach?', 'Just an ordinary mensch', 'A disguised octopus', 'A disguised cat'),
(4, 'How many pets does Doron have?', '2 pets (according to the zoom meetings)', '1', '0'),
(5, 'Beer or Pizza or both?', 'Beer', 'Both', 'Pizza');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;