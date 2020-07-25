-- MySQL dump 10.13  Distrib 8.0.17, for Linux (x86_64)
--
-- Host: localhost    Database: lital
-- ------------------------------------------------------
-- Server version	8.0.17-0ubuntu2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Product`
--

DROP TABLE IF EXISTS `Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Product` (
  `id` int(11) NOT NULL,
  `task` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product`
--

LOCK TABLES `Product` WRITE;
/*!40000 ALTER TABLE `Product` DISABLE KEYS */;
INSERT INTO `Product` VALUES (1,'Find bugs',1,'2016-04-10 23:50:40'),(2,'Review code',1,'2016-04-10 23:50:40'),(3,'Fix bugs',1,'2016-04-10 23:50:40'),(4,'Refactor Code',1,'2016-04-10 23:50:40'),(5,'Push to prod',1,'2016-04-10 23:50:50'),(4,'a',4,'2020-07-08 18:09:26'),(4,'a',4,'2020-07-08 18:09:31'),(4,'a',4,'2020-07-08 18:10:10'),(4,'a',4,'2020-07-08 18:10:12'),(4,'eeeeeee',4,'2020-07-08 18:10:23'),(4,'eeeeeee',4,'2020-07-08 18:10:23'),(4,'eeeeeee',4,'2020-07-08 18:11:26'),(4,'eeeeeee',4,'2020-07-08 18:11:28'),(4,'eeeeeee',4,'2020-07-08 18:11:34'),(4,'eeeeeee',4,'2020-07-08 18:11:35'),(4,'eeeeeee',4,'2020-07-09 10:09:27'),(4,'eeeeeee',4,'2020-07-09 10:09:27');
/*!40000 ALTER TABLE `Product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Mohamed ali','Othmen','othmen@gmail.com','dali','admin','admin'),(2,'Marwa','Azzabi','azzabi@gmail.com','Mar','admin','admin'),(3,'Amira','Chaabane','chaabane@gmail.com','Ami','admin','admin'),(4,'Marwa','Azzabi','azzabi@gmail.com','Mar','admin','admin'),(6,'aaaaaaaaaaaaaaaaaaa','aaaaaaaaaaaaaaaaaaaaaaa','aaaaaaaaaaaaa@ee','aaaaaaaaaaaaaaaaaf','laaaaaaaaaaaaaaaooo','aaaaaaaaaaaaaaaaaaaaadmin'),(7,'aeeeee','oth','dee@ee','daliiiiiiiiiii','looo','admin'),(8,'aaaaaaaaaaaaaaaaaaa','aaaaaaaaaaaaaaaaaaaaaaa','aaaaaaaaaaaaa@ee','aaaaaaaaaaaaaaaaaf','laaaaaaaaaaaaaaaooo','aaaaaaaaaaaaaaaaaaaaadmin'),(10,'saief','oth','dee@ee','rf','looo','admin'),(11,'e','aaaaaaaaaaaaaaaaaaaaaaa','aaaaaaaaaaaaa@ee','aaaaaaaaaaaaaaaaaf','laaaaaaaaaaaaaaaooo','aaaaaaaaaaaaaaaaaaaaadmin'),(12,'aaaaaaaaaaaaaaaaaaa','aaaaaaaaaaaaaaaaaaaaaaa','aaaaaaaaaaaaa@ee','aaaaaaaaaaaaaaaaaf','laaaaaaaaaaaaaaaooo','aaaaaaaaaaaaaaaaaaaaadmin'),(13,'e','aaaaaaaaaaaaaaaaaaaaaaa','aaaaaaaaaaaaa@ee','aaaaaaaaaaaaaaaaaf','laaaaaaaaaaaaaaaooo','aaaaaaaaaaaaaaaaaaaaadmin'),(14,'a','oth','dee@ee','rf','looo','admin'),(15,'aaaaaaaaaaaaaaaaaaa','aaaaaaaaaaaaaaaaaaaaaaa','aaaaaaaaaaaaa@ee','aaaaaaaaaaaaaaaaaf','laaaaaaaaaaaaaaaooo','aaaaaaaaaaaaaaaaaaaaadmin'),(16,'e','aaaaaaaaaaaaaaaaaaaaaaa','aaaaaaaaaaaaa@ee','aaaaaaaaaaaaaaaaaf','laaaaaaaaaaaaaaaooo','aaaaaaaaaaaaaaaaaaaaadmin'),(17,'nesrine','chamakhi','nesrine@gmail.com','CH','1234','admin'),(18,'nesrine','chamakhi','nesrine@gmail.com','CH','1234','admin');
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

-- Dump completed on 2020-07-09 12:33:41
