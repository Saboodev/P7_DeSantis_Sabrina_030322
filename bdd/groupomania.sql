-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 20 avr. 2022 à 14:49
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `commentId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT current_timestamp(),
  `content` text NOT NULL,
  `userName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`commentId`, `postId`, `timestamp`, `content`, `userName`) VALUES
(7, 20, '0000-00-00 00:00:00', 'je suis le com du post 20', '');

-- --------------------------------------------------------

--
-- Structure de la table `likes`
--

CREATE TABLE `likes` (
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

CREATE TABLE `posts` (
  `postId` int(100) NOT NULL,
  `contenu` text NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `imageUrl` varchar(128) NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `posts`
--

INSERT INTO `posts` (`postId`, `contenu`, `created`, `imageUrl`, `userId`) VALUES
(20, 'je suis le post 20 ', '2022-04-05 09:39:23', 'undefined', NULL),
(22, 'je suis un post qui pourrait aussi contenir une image', '2022-04-06 15:31:27', 'http://localhost:3000/images/ ', NULL),
(24, 'je suis un nouveau post', '2022-04-07 20:28:53', 'http://localhost:3000/images/ ', NULL),
(25, 'je suis encore un nouveau post', '2022-04-07 20:32:52', 'http://localhost:3000/images/ ', 85);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `pseudo` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `bio` text DEFAULT NULL,
  `isadmin` tinyint(1) DEFAULT 0,
  `timestamp` datetime NOT NULL DEFAULT current_timestamp(),
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`userId`, `nom`, `prenom`, `pseudo`, `email`, `bio`, `isadmin`, `timestamp`, `password`) VALUES
(76, 'Nom', 'Prénom', 'pseudo', 'test44@test.com', 'Je vérifie ordre des choses', 0, '2022-04-05 14:07:00', 'azertyAZ123'),
(78, 'Prénom', 'pseudo', 'Nom', 'test42@test.com', 'Je vérifie ordre des choses', 0, '2022-04-05 14:21:06', '$2b$10$nngfMFlUP7VWw3zJKi3c/u/dQ6vsAPr6w.kiceVv6gyQao1j1YrbK'),
(83, 'Dernier', 'Prénom', 'pasdepseudo', 'test35@test.com', 'Je vérifie mon login', 0, '2022-04-06 21:46:18', '$2b$10$hPR9CiBmREeAwy.6k6Aux.kR447OJH6fu8x8Ksu5/W/dWrG2kFYhG'),
(85, 'Nom', 'Prénom', 'pseudo', 'test38@test.com', 'Je vérifie ordre des choses', 1, '2022-04-07 17:24:53', '$2b$10$utDQYsrD.44176TxXhxWXOaCFATpVVn1lZ0AG3quvSp9JQzxUWByK'),
(88, 'Dev', 'Sabrina', 'Saboodev', 'test1@test.fr', 'Je suis Saboodev, une nouvelle utilisatrice de Groupomania !', 0, '2022-04-18 18:39:13', 'azertyAZ123');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`commentId`),
  ADD KEY `post_id_fk3` (`postId`);

--
-- Index pour la table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`userId`,`postId`),
  ADD KEY `post_id_fk4` (`postId`);

--
-- Index pour la table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`postId`),
  ADD KEY `user_id_fk` (`userId`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `commentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `posts`
--
ALTER TABLE `posts`
  MODIFY `postId` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `post_id_fk3` FOREIGN KEY (`postId`) REFERENCES `posts` (`postId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `post_id_fk4` FOREIGN KEY (`postId`) REFERENCES `posts` (`postId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_id_fk5` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `user_id_fk` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
