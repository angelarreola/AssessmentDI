CREATE DATABASE  IF NOT EXISTS `library` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `library`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: library
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `isbn` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `publicationDate` date NOT NULL,
  `userId` int(11) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `isbn` (`isbn`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,' 978-0-439-02348-1','The Hunger Games','Suzanne Collins','2009-09-14',1,'Angel Arreola','2024-07-07 19:51:47','2024-07-07 19:51:47'),(2,'978-0-7432-7356-5','Angels & Demons','Dan Brown','2000-05-01',1,'Angel Arreola','2024-07-07 19:51:47','2024-07-07 19:51:47'),(3,'978-0-316-76994-0','The Catcher in the Rye','J.D. Salinger','1951-07-16',1,'Angel Arreola','2024-07-07 19:51:47','2024-07-07 19:51:47'),(4,'978-0-670-81302-8','The Great Gatsby','F. Scott Fitzgerald','1925-04-10',1,'Angel Arreola','2024-07-07 19:51:47','2024-07-07 19:51:47'),(5,'978-1-5011-4684-8','The Silent Patient','Alex Michaelides','2019-02-05',1,'Angel Arreola','2024-07-07 19:51:47','2024-07-07 19:51:47');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` enum('active','inactive') DEFAULT 'active',
  `role` enum('admin','user') DEFAULT 'user',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin@admin.com','$2a$10$docY73u98UhO4N0xjfchPe937hi4TFWHlVv2ko7wIRtd5AW6fVul.','active','admin','2024-07-07 19:51:47','2024-07-07 19:51:47'),(2,'admin2','admin2@admin2.com','$2a$10$pQuXcKJS2N0g2GHNIpk57.2V4v3F/fb/4qUrPwhEzIIYO/MhCi/jm','inactive','admin','2024-07-07 19:51:47','2024-07-07 19:51:47'),(3,'Ángel Arreola','angelarreolagg@gmail.com','$2a$10$ci42lqQ07OEUMtPGt79Re.ibCIK3/JWgwqMF9ZiRzx9MMgWXCle7y','active','user','2024-07-07 19:51:47','2024-07-07 19:51:47'),(4,'Carlos Martínez','carlosmartinez@example.com','$2a$10$3vV5GdKnWdsvUxB0zEyz6Ojr/XbOeqP4kVIlt5PGprT2cM1n73.yO','active','user','2024-07-07 19:51:47','2024-07-07 19:51:47'),(5,'Luis Hernández','luishernandez@example.com','$2a$10$DPuWN4P5rMXzFGLst5MT3OFVY6KzFiJq6nsW/qk90UPSFVHXBh9BG','active','user','2024-07-07 19:51:47','2024-07-07 19:51:47'),(6,'María García','mariagarcia@example.com','$2a$10$Ce/eEgSTf7Kn7cmCecDtZOSG3DDWie78XBk7DYM9..FDO3A6EFP7K','active','user','2024-07-07 19:51:47','2024-07-07 19:51:47'),(7,'Elena Fernández','elenafernandez@example.com','$2a$10$2OJq2kOJLOMJ7sM73st3F.423be1t9UY99xSYHF4J/azHbWtEUCv.','active','user','2024-07-07 19:51:47','2024-07-07 19:51:47'),(8,'Jorge Rodríguez','jorgerodriguez@example.com','$2a$10$S.7gsj0abd2LFCXTEBlyuuriflcH1NhAvoXYGkMB9NJGKJ9gSav5S','active','user','2024-07-07 19:51:47','2024-07-07 19:51:47');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-07 14:07:55
