-- MySQL dump 10.13  Distrib 8.0.20, for Linux (x86_64)
--
-- Host: localhost    Database: lital3
-- ------------------------------------------------------
-- Server version	8.0.20-0ubuntu0.19.10.1

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
-- Table structure for table `history`
--

DROP TABLE IF EXISTS `history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` varchar(30) DEFAULT NULL,
  `action` varchar(30) DEFAULT NULL,
  `productid` int DEFAULT NULL,
  `userid` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productid` (`productid`),
  KEY `userid` (`userid`),
  CONSTRAINT `history_ibfk_1` FOREIGN KEY (`productid`) REFERENCES `products` (`id`),
  CONSTRAINT `history_ibfk_2` FOREIGN KEY (`userid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history`
--

LOCK TABLES `history` WRITE;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
/*!40000 ALTER TABLE `history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `n_carton` int DEFAULT NULL,
  `ref` varchar(30) DEFAULT NULL,
  `type` varchar(30) DEFAULT NULL,
  `couleur` varchar(30) DEFAULT NULL,
  `client` varchar(30) DEFAULT NULL,
  `prod_proto` varchar(30) DEFAULT NULL,
  `qte_stock` int DEFAULT NULL,
  `photo` varchar(200) DEFAULT NULL,
  `dimension` varchar(30) DEFAULT NULL,
  `qte_sortie` int DEFAULT NULL,
  `qte_restante` int DEFAULT NULL,
  `date` varchar(30) DEFAULT NULL,
  `beneficiaire` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,'RT3','sac','rouge','volker','prod',3,'http://localhost:3000/lital-images/1.jpg',NULL,NULL,NULL,NULL,NULL),(2,2,NULL,'pochette gm','camel','blach','prod',4,'http://localhost:3000/lital-images/2.jpg',NULL,NULL,NULL,NULL,NULL),(3,2,NULL,'pochette pm','camel','blach','prod',124,'http://localhost:3000/lital-images/2.jpg',NULL,NULL,NULL,NULL,NULL),(4,2,NULL,'pochette pm','noir','blach','prod',3,'http://localhost:3000/lital-images/3.jpg',NULL,NULL,NULL,NULL,NULL),(5,2,NULL,'pochette gm','noir','blach','prod',12,'http://localhost:3000/lital-images/3.jpg',NULL,NULL,NULL,NULL,NULL),(6,3,NULL,'trousse gm','noir','blach','prod',1,'http://localhost:3000/lital-images/4.jpg',NULL,NULL,NULL,NULL,NULL),(7,3,NULL,'trousse gm','camel','blach','prod',75,'http://localhost:3000/lital-images/5.jpg',NULL,NULL,NULL,NULL,NULL),(8,4,NULL,'sac pm','bleu','blach','prod',1,'http://localhost:3000/lital-images/6.jpg',NULL,NULL,NULL,NULL,NULL),(9,4,NULL,'sac pm','noir','blach','prod',9,'http://localhost:3000/lital-images/7.jpg',NULL,NULL,NULL,NULL,NULL),(10,5,NULL,'sac cabas lanier','noir','lital','prod',4,'http://localhost:3000/lital-images/8.jpg',NULL,NULL,NULL,NULL,NULL),(11,6,NULL,'pochette','marron brillant','catherine','prod',42,'http://localhost:3000/lital-images/9.jpg',NULL,NULL,NULL,NULL,NULL),(12,6,NULL,'pochette','rose brillant','catherine','prod',8,'http://localhost:3000/lital-images/13.jpg',NULL,NULL,NULL,NULL,NULL),(13,6,NULL,'pochette','marron foncée','catherine','prod',24,'http://localhost:3000/lital-images/14.jpg',NULL,NULL,NULL,NULL,NULL),(14,6,NULL,'pochette','marron clair','catherine','prod',26,'http://localhost:3000/lital-images/15.jpg',NULL,NULL,NULL,NULL,NULL),(15,6,NULL,'pochette','rouge bordeau','catherine','prod',1,'http://localhost:3000/lital-images/16.jpg',NULL,NULL,NULL,NULL,NULL),(16,7,NULL,'pochette pm','noir','blash','prod',61,'http://localhost:3000/lital-images/10.jpg',NULL,NULL,NULL,NULL,NULL),(17,7,NULL,'pochette gm','noir','blash','prod',80,'http://localhost:3000/lital-images/10.jpg',NULL,NULL,NULL,NULL,NULL),(18,8,NULL,'sac','noir','blash','prod',1,'http://localhost:3000/lital-images/11.jpg',NULL,NULL,NULL,NULL,NULL),(19,8,NULL,'sac','rouge','blash','prod',3,'http://localhost:3000/lital-images/11.jpg',NULL,NULL,NULL,NULL,NULL),(20,9,NULL,'cabas gm','bleu','cromoda','prod',1,'http://localhost:3000/lital-images/12.jpg',NULL,NULL,NULL,NULL,NULL),(21,9,NULL,'cabas pm','bleu','cromoda','prod',1,'http://localhost:3000/lital-images/12.jpg',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `post` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Marwa','Azzabi','azzabi@gmail.com','Mar','admin','admin'),(2,'MedAli','Othmen','othmen@gmail.com','dali','admin','admin'),(3,'Amira','Chaabane','chaabane@gmail.com','Ami','moderateur','moderateur');
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

-- Dump completed on 2020-07-09 12:53:52
