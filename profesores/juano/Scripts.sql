-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `aplicacion`
--

-- --------------------------------------------------------

CREATE USER 'admin'@'%' IDENTIFIED BY 'admin';
GRANT USAGE 
ON *.* TO 'admin'@'%' IDENTIFIED BY 'admin' WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;

CREATE DATABASE IF NOT EXISTS aplicacion;

GRANT ALL PRIVILEGES ON `aplicacion`.* TO 'admin'@'%'WITH GRANT OPTION;

USE aplicacion;

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE IF NOT EXISTS `alumnos` (
  `usuario` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `pass` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(35) COLLATE utf8_spanish_ci NOT NULL,
  `apellido` varchar(35) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `codCurso` int(5) NOT NULL,
  `delegado` tinyint(1) NOT NULL,
  PRIMARY KEY (`usuario`),
  KEY `FK_CURSO` (`codCurso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`usuario`, `pass`, `nombre`, `apellido`, `email`, `codCurso`, `delegado`) VALUES
('admin', 'admin', '', '', '', 1, 0),
('fernando', '12345', 'Fernando', 'Solis', 'fsolis@gmail.com', 2, 1),
('sergio', '12345', 'Sergio', 'Aguado', 'saguado@gmail.com', 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignaturas`
--

CREATE TABLE IF NOT EXISTS `asignaturas` (
  `codCurso` int(5) NOT NULL,
  `codAsig` int(5) NOT NULL,
  `nombre` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`codAsig`),
  KEY `FK_CURSOS` (`codCurso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `asignaturas`
--

INSERT INTO `asignaturas` (`codCurso`, `codAsig`, `nombre`) VALUES
(1, 10001, 'Bases de datos'),
(1, 10002, 'Entornos de desarrollo'),
(2, 20001, 'Programación multimedia y dispositivos móviles'),
(2, 20002, 'Sistemas de gestión empresarial');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clasesimpartir`
--

CREATE TABLE IF NOT EXISTS `clasesimpartir` (
  `usuario` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `codAsig` int(5) NOT NULL,
  PRIMARY KEY (`usuario`,`codAsig`),
  KEY `FK_usuario` (`usuario`),
  KEY `FK_codAsig` (`codAsig`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `clasesimpartir`
--

INSERT INTO `clasesimpartir` (`usuario`, `codAsig`) VALUES
('juano', 10001),
('ramon', 10002),
('juano', 20001),
('ramon', 20002);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE IF NOT EXISTS `cursos` (
  `codCurso` int(5) NOT NULL,
  `nombre` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`codCurso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`codCurso`, `nombre`) VALUES
(1, 'Desarrollo de Aplicaciones Web'),
(2, 'Desarrollo de Aplicaciones Multiplataforma');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notas`
--

CREATE TABLE IF NOT EXISTS `notas` (
  `usuario` varchar(25) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `codAsig` int(5) NOT NULL,
  `nota` double(4,2) NOT NULL,
  `trimestre` int(1) NOT NULL,
  PRIMARY KEY (`usuario`,`codAsig`),
  KEY `FK_ALUMNO` (`usuario`),
  KEY `FK_ASIGN` (`codAsig`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `notas`
--

INSERT INTO `notas` (`usuario`, `codAsig`, `nota`, `trimestre`) VALUES
('sergio', 10001, 7.72, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE IF NOT EXISTS `profesores` (
  `usuario` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `pass` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(35) COLLATE utf8_spanish_ci NOT NULL,
  `apellido` varchar(35) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`usuario`, `pass`, `nombre`, `apellido`, `email`) VALUES
('admin', 'admin', '', '', ''),
('juano', '12345', 'juano', 'Perez', 'jperez@gmail.com'),
('ramon', '12345', 'Ramon', 'Garcia', 'rgarcia@gmail.com');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD CONSTRAINT `alumnos_ibfk_1` FOREIGN KEY (`codCurso`) REFERENCES `cursos` (`codCurso`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `asignaturas`
--
ALTER TABLE `asignaturas`
  ADD CONSTRAINT `asignaturas_ibfk_1` FOREIGN KEY (`codCurso`) REFERENCES `cursos` (`codCurso`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `clasesimpartir`
--
ALTER TABLE `clasesimpartir`
  ADD CONSTRAINT `clasesimpartir_ibfk_1` FOREIGN KEY (`usuario`) REFERENCES `profesores` (`usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `clasesimpartir_ibfk_2` FOREIGN KEY (`codAsig`) REFERENCES `asignaturas` (`codAsig`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `notas`
--
ALTER TABLE `notas`
  ADD CONSTRAINT `notas_ibfk_1` FOREIGN KEY (`usuario`) REFERENCES `alumnos` (`usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `notas_ibfk_2` FOREIGN KEY (`codAsig`) REFERENCES `asignaturas` (`codAsig`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
