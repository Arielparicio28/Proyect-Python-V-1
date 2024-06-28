-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-06-2024 a las 12:00:10
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectogrupal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bancos`
--

CREATE TABLE `bancos` (
  `por_defecto` varchar(1) NOT NULL,
  `codigo_banco` int(11) NOT NULL,
  `iban` varchar(34) NOT NULL,
  `nombre_banco` varchar(50) NOT NULL,
  `swift_bci` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `bancos`
--

INSERT INTO `bancos` (`por_defecto`, `codigo_banco`, `iban`, `nombre_banco`, `swift_bci`) VALUES
('1', 49, '21000418450200051332', 'SANTANDER', 'BSCHESMMXXX'),
('', 91, '21000418450200051332', 'BBVA', 'BBVAESMMXXX');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cabecera`
--

CREATE TABLE `cabecera` (
  `numero_factura` int(11) NOT NULL,
  `codigo_cliente` int(11) DEFAULT NULL,
  `codigo_postal` varchar(10) NOT NULL,
  `nombre_cliente` varchar(100) NOT NULL,
  `poblacion_cliente` varchar(50) NOT NULL,
  `provincia_cliente` varchar(50) NOT NULL,
  `fecha` date NOT NULL,
  `importe_producto` decimal(10,2) NOT NULL,
  `total_factura` decimal(10,2) NOT NULL,
  `iban` varchar(35) NOT NULL,
  `nombre_banco` varchar(50) NOT NULL,
  `nombre_vendedor` varchar(50) NOT NULL,
  `apellidos_vendedor` varchar(50) NOT NULL,
  `poblacion_empresa` varchar(50) NOT NULL,
  `provincia_empresa` varchar(50) NOT NULL,
  `cif_nie_vendedor` varchar(20) NOT NULL,
  `codigo_postal_empresa` varchar(5) NOT NULL,
  `codigo_banco` int(11) NOT NULL,
  `swift_bci` varchar(11) NOT NULL,
  `direccion_envio` varchar(255) NOT NULL,
  `codigo_postal_envio` varchar(20) NOT NULL,
  `nombre_cliente_envio` varchar(100) NOT NULL,
  `poblacion_envio` varchar(20) NOT NULL,
  `provincia_envio` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cabecera`
--

INSERT INTO `cabecera` (`numero_factura`, `codigo_cliente`, `codigo_postal`, `nombre_cliente`, `poblacion_cliente`, `provincia_cliente`, `fecha`, `importe_producto`, `total_factura`, `iban`, `nombre_banco`, `nombre_vendedor`, `apellidos_vendedor`, `poblacion_empresa`, `provincia_empresa`, `cif_nie_vendedor`, `codigo_postal_empresa`, `codigo_banco`, `swift_bci`, `direccion_envio`, `codigo_postal_envio`, `nombre_cliente_envio`, `poblacion_envio`, `provincia_envio`) VALUES
(1, 1, 'Castelldef', 'Ariel', 'Castelldefels', 'Castelldefels', '2024-06-21', 285.00, 344.85, 'IBAN123456789', 'Banco de Ejemplo', 'Audi', 'S.A', 'Aragon', 'Madrid', '12345678P', '09876', 0, '', '', '', '', '', ''),
(2, 3, 'Sta Coloma', 'Jhon', 'Sta Coloma de Cervello', 'Sta Coloma de Cervello', '2024-06-21', 255.00, 308.55, 'IBAN123456789', 'Banco de Ejemplo', 'Audi', 'S.A', 'Aragon', 'Madrid', '12345678P', '09876', 0, '', '', '', '', '', ''),
(3, 3, 'Sta Coloma', 'Jhon', 'Sta Coloma de Cervello', 'Sta Coloma de Cervello', '2024-06-25', 240.00, 290.40, 'IBAN123456789', 'Banco de Ejemplo', 'Audi', 'S.A', 'Aragon', 'Madrid', '12345678P', '09876', 0, '', '', '', '', '', ''),
(4, 1, 'Castelldef', 'Ariel', 'Castelldefels', 'Castelldefels', '2024-06-25', 385.00, 465.85, 'IBAN123456789', 'Banco de Ejemplo', 'Audi', 'S.A', 'Aragon', 'Madrid', '12345678P', '09876', 0, '', '', '', '', '', ''),
(5, 4, 'Abadia de ', 'Robert', 'Abadia de San Nicolas', 'Abadia de San Nicolas', '2024-06-25', 545.00, 659.45, 'IBAN123456789', 'Banco de Ejemplo', 'Audi', 'S.A', 'Aragon', 'Madrid', '12345678P', '09876', 0, '', '', '', '', '', ''),
(6, 3, 'Sta Coloma', 'Jhon', 'Sta Coloma de Cervello', 'Sta Coloma de Cervello', '2024-06-25', 4250.00, 5142.50, 'IBAN123456789', 'Banco de Ejemplo', 'Audi', 'S.A', 'Aragon', 'Madrid', '12345678P', '09876', 0, '', '', '', '', '', ''),
(7, 1, 'Castelldef', 'Ariel', 'Castelldefels', 'Castelldefels', '2024-06-25', 19750.00, 23897.50, 'IBAN123456789', 'Banco de Ejemplo', 'Audi', 'S.A', 'Aragon', 'Madrid', '12345678P', '09876', 91, '', '', '', '', '', ''),
(8, 5, 'Fallas', 'Santiago', 'Fallas', 'Fallas', '2024-06-25', 3850.00, 4658.50, '21000418450200051332', 'SANTANDER', 'Audi', 'S.A', 'Aragon', 'Madrid', '12345678P', '09876', 49, 'BSCHESMMXXX', '', '', '', '', ''),
(9, 5, 'Fallas', 'Santiago', 'Fallas', 'Fallas', '2024-06-25', 5065.00, 6128.65, '21000418450200051332', 'SANTANDER', 'Audi', 'S.A', 'Aragon', 'Madrid', '12345678P', '09876', 49, 'BSCHESMMXXX', 'Abadia 15', '46001', 'Ariel ', '46001', '46'),
(10, 5, 'Fallas', 'Santiago', 'Fallas', 'Fallas', '2024-06-25', 225.00, 272.25, '21000418450200051332', 'SANTANDER', 'Audi', 'S.A', 'Aragon', 'Madrid', '12345678P', '09876', 49, 'BSCHESMMXXX', 'Abadia 15', '46001', 'Ariel ', '46001', '46'),
(11, 5, 'Fallas', 'Santiago', 'Fallas', 'Fallas', '2024-06-25', 225.00, 272.25, '21000418450200051332', 'SANTANDER', 'Audi', 'S.A', 'Aragon', 'Madrid', '12345678P', '09876', 49, 'BSCHESMMXXX', 'Abadia 15', '46001', 'Ariel ', '46001', '46'),
(12, 5, 'Fallas', 'Santiago', 'Fallas', 'Fallas', '2024-06-25', 250.00, 302.50, '21000418450200051332', 'SANTANDER', 'Audi', 'S.A', 'Aragon', 'Madrid', '12345678P', '09876', 49, 'BSCHESMMXXX', 'Abadia 15', '46001', 'Ariel ', '46001', '46'),
(13, 5, 'Fallas', 'Santiago', 'Fallas', 'Fallas', '2024-06-25', 330.00, 399.30, '21000418450200051332', 'SANTANDER', 'Audi', 'S.A', 'Aragon', 'Madrid', '12345678P', '09876', 49, 'BSCHESMMXXX', 'Abadia 15', '46001', 'Ariel ', '46001', '46'),
(14, 5, 'Fallas', 'Santiago', 'Fallas', 'Fallas', '2024-06-25', 225.00, 272.25, '21000418450200051332', 'SANTANDER', 'Audi', 'S.A', 'Aragon', 'Madrid', '12345678P', '09876', 49, 'BSCHESMMXXX', 'Abadia 15', '46001', 'Ariel ', '46001', '46'),
(15, 5, 'Fallas', 'Santiago', 'Fallas', 'Fallas', '2024-06-25', 325.00, 393.25, '21000418450200051332', 'SANTANDER', 'Audi', 'S.A', 'Aragon', 'Madrid', '12345678P', '09876', 49, 'BSCHESMMXXX', 'Abadia 15', '46001', 'Ariel ', '46001', '46'),
(16, 5, 'Fallas', 'Santiago', 'Fallas', 'Fallas', '2024-06-25', 375.00, 453.75, '21000418450200051332', 'SANTANDER', 'Audi', 'S.A', 'Aragon', 'Madrid', '12345678P', '09876', 49, 'BSCHESMMXXX', 'Fallas 56', '46002', 'Santiago', '46002', '46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `codigo_cliente` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `codigo_postal` varchar(5) NOT NULL,
  `cif_nie` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`codigo_cliente`, `nombre`, `apellido`, `codigo_postal`, `cif_nie`) VALUES
(1, 'Ariel', 'Aparicio', '08860', 'Z0709875P'),
(3, 'Jhon', 'Herrera', '08690', '07298328A'),
(4, 'Robert', 'Rodriguez', '46001', '098765432R'),
(5, 'Santiago', 'Gomez', '46002', '09876543R');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `codigo_postal`
--

CREATE TABLE `codigo_postal` (
  `codigo` varchar(5) NOT NULL,
  `descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `codigo_postal`
--

INSERT INTO `codigo_postal` (`codigo`, `descripcion`) VALUES
('08690', 'Barcelona'),
('08860', 'Barcelona'),
('28004', 'Madrid'),
('46001', 'Valencia'),
('46002', 'Valencia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direccion_envio`
--

CREATE TABLE `direccion_envio` (
  `por_defecto` varchar(1) NOT NULL,
  `codigo_cliente` int(11) DEFAULT NULL,
  `direccion_envio` varchar(255) NOT NULL,
  `codigo_postal` varchar(10) NOT NULL,
  `nombre_cliente` varchar(100) NOT NULL,
  `poblacion` varchar(10) NOT NULL,
  `provincia` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `direccion_envio`
--

INSERT INTO `direccion_envio` (`por_defecto`, `codigo_cliente`, `direccion_envio`, `codigo_postal`, `nombre_cliente`, `poblacion`, `provincia`) VALUES
('', 3, 'Carrer Espigol 35', '08690', 'Jhon', '08690', '08'),
('1', 1, 'Abadia 15', '46001', 'Ariel ', '46001', '46'),
('1', 5, 'Fallas 56', '46002', 'Santiago', '46002', '46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `nombre_vendedor` varchar(50) NOT NULL,
  `apellidos_vendedor` varchar(50) NOT NULL,
  `codigo_poblacion` varchar(5) NOT NULL,
  `codigo_provincia` varchar(2) NOT NULL,
  `cif_nie_vendedor` varchar(20) NOT NULL,
  `codigo_postal_empresa` varchar(5) NOT NULL,
  `codigo_banco` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`nombre_vendedor`, `apellidos_vendedor`, `codigo_poblacion`, `codigo_provincia`, `cif_nie_vendedor`, `codigo_postal_empresa`, `codigo_banco`) VALUES
('Audi', 'S.A', '09876', '09', '12345678P', '09876', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `numero_factura` int(11) NOT NULL,
  `codigo_cliente` int(11) DEFAULT NULL,
  `fecha` date NOT NULL,
  `importe_total` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`numero_factura`, `codigo_cliente`, `fecha`, `importe_total`) VALUES
(2, 1, '0000-00-00', 169.40),
(3, 1, '0000-00-00', 332.75),
(4, 1, '0000-00-00', 199.65),
(5, 1, '0000-00-00', 199.65),
(6, 1, '0000-00-00', 242.00),
(7, 1, '0000-00-00', 211.75),
(8, 1, '0000-00-00', 151.25),
(9, 1, '0000-00-00', 139.15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lineas`
--

CREATE TABLE `lineas` (
  `id` int(11) NOT NULL,
  `numero_factura_lineas` int(11) NOT NULL,
  `codigo_producto` int(11) DEFAULT NULL,
  `cantidad` int(11) NOT NULL,
  `nombre_producto_lineas` varchar(100) NOT NULL,
  `valor_producto_lineas` decimal(10,2) NOT NULL,
  `total_producto` decimal(10,2) NOT NULL,
  `iva` decimal(4,2) NOT NULL DEFAULT 21.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lineas`
--

INSERT INTO `lineas` (`id`, `numero_factura_lineas`, `codigo_producto`, `cantidad`, `nombre_producto_lineas`, `valor_producto_lineas`, `total_producto`, `iva`) VALUES
(1, 0, 2, 3, 'PANTALONES', 25.00, 75.00, 21.00),
(2, 0, 3, 6, 'ZAPATOS', 35.00, 210.00, 21.00),
(3, 0, 3, 5, 'ZAPATOS', 35.00, 175.00, 21.00),
(4, 0, 1, 8, 'CAMISETAS', 10.00, 80.00, 21.00),
(5, 0, 2, 6, 'PANTALONES', 25.00, 150.00, 21.00),
(6, 0, 1, 9, 'CAMISETAS', 10.00, 90.00, 21.00),
(7, 4, 3, 6, 'ZAPATOS', 35.00, 210.00, 21.00),
(8, 4, 2, 7, 'PANTALONES', 25.00, 175.00, 21.00),
(9, 5, 3, 7, 'ZAPATOS', 35.00, 245.00, 21.00),
(10, 5, 2, 12, 'PANTALONES', 25.00, 300.00, 21.00),
(11, 6, 3, 50, 'ZAPATOS', 35.00, 1750.00, 21.00),
(12, 6, 2, 100, 'PANTALONES', 25.00, 2500.00, 21.00),
(13, 7, 2, 90, 'PANTALONES', 25.00, 2250.00, 21.00),
(14, 7, 3, 500, 'ZAPATOS', 35.00, 17500.00, 21.00),
(15, 8, 3, 60, 'ZAPATOS', 35.00, 2100.00, 21.00),
(16, 8, 2, 70, 'PANTALONES', 25.00, 1750.00, 21.00),
(17, 9, 2, 78, 'PANTALONES', 25.00, 1950.00, 21.00),
(18, 9, 3, 89, 'ZAPATOS', 35.00, 3115.00, 21.00),
(19, 10, 1, 5, 'CAMISETAS', 10.00, 50.00, 21.00),
(20, 10, 2, 7, 'PANTALONES', 25.00, 175.00, 21.00),
(21, 11, 1, 5, 'CAMISETAS', 10.00, 50.00, 21.00),
(22, 11, 2, 7, 'PANTALONES', 25.00, 175.00, 21.00),
(23, 12, 1, 4, 'CAMISETAS', 10.00, 40.00, 21.00),
(24, 12, 3, 6, 'ZAPATOS', 35.00, 210.00, 21.00),
(25, 13, 1, 5, 'CAMISETAS', 10.00, 50.00, 21.00),
(26, 13, 3, 8, 'ZAPATOS', 35.00, 280.00, 21.00),
(27, 14, 1, 5, 'CAMISETAS', 10.00, 50.00, 21.00),
(28, 14, 2, 7, 'PANTALONES', 25.00, 175.00, 21.00),
(29, 15, 3, 5, 'ZAPATOS', 35.00, 175.00, 21.00),
(30, 15, 2, 6, 'PANTALONES', 25.00, 150.00, 21.00),
(31, 16, 2, 7, 'PANTALONES', 25.00, 175.00, 21.00),
(32, 16, 2, 8, 'PANTALONES', 25.00, 200.00, 21.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `poblaciones`
--

CREATE TABLE `poblaciones` (
  `codigo` varchar(5) NOT NULL,
  `descripcion` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `poblaciones`
--

INSERT INTO `poblaciones` (`codigo`, `descripcion`) VALUES
('	\r\n09', 'Aragon'),
('08690', 'Sta Coloma de Cervello'),
('08860', 'Castelldefels'),
('09876', 'Aragon'),
('46001', 'Abadia de San Nicolas'),
('46002', 'Fallas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `codigo_producto` int(11) NOT NULL,
  `nombre_producto` varchar(100) NOT NULL,
  `valor_producto` decimal(10,2) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`codigo_producto`, `nombre_producto`, `valor_producto`, `cantidad`, `precio_unitario`) VALUES
(1, 'CAMISETAS', 10.00, 0, 0.00),
(2, 'PANTALONES', 25.00, 0, 0.00),
(3, 'ZAPATOS', 35.00, 0, 0.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

CREATE TABLE `provincias` (
  `codigo` varchar(2) NOT NULL,
  `descripcion` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`codigo`, `descripcion`) VALUES
('08', 'Barcelona'),
('09', 'Madrid'),
('46', 'Valencia');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bancos`
--
ALTER TABLE `bancos`
  ADD PRIMARY KEY (`codigo_banco`);

--
-- Indices de la tabla `cabecera`
--
ALTER TABLE `cabecera`
  ADD PRIMARY KEY (`numero_factura`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`codigo_cliente`),
  ADD KEY `codigo_postal` (`codigo_postal`);

--
-- Indices de la tabla `codigo_postal`
--
ALTER TABLE `codigo_postal`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `direccion_envio`
--
ALTER TABLE `direccion_envio`
  ADD KEY `codigo_cliente` (`codigo_cliente`),
  ADD KEY `codigo_postal` (`codigo_postal`),
  ADD KEY `poblacion` (`poblacion`),
  ADD KEY `provincia` (`provincia`);

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD KEY `codigo_poblacion` (`codigo_poblacion`),
  ADD KEY `codigo_provincia` (`codigo_provincia`),
  ADD KEY `relacion_banco` (`codigo_banco`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`numero_factura`),
  ADD KEY `codigo_cliente` (`codigo_cliente`);

--
-- Indices de la tabla `lineas`
--
ALTER TABLE `lineas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `poblaciones`
--
ALTER TABLE `poblaciones`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`codigo_producto`);

--
-- Indices de la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD PRIMARY KEY (`codigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `codigo_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `numero_factura` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `lineas`
--
ALTER TABLE `lineas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`codigo_postal`) REFERENCES `codigo_postal` (`codigo`);

--
-- Filtros para la tabla `direccion_envio`
--
ALTER TABLE `direccion_envio`
  ADD CONSTRAINT `direccion_envio_ibfk_1` FOREIGN KEY (`codigo_cliente`) REFERENCES `clientes` (`codigo_cliente`),
  ADD CONSTRAINT `direccion_envio_ibfk_2` FOREIGN KEY (`codigo_postal`) REFERENCES `codigo_postal` (`codigo`),
  ADD CONSTRAINT `direccion_envio_ibfk_3` FOREIGN KEY (`poblacion`) REFERENCES `poblaciones` (`codigo`),
  ADD CONSTRAINT `direccion_envio_ibfk_4` FOREIGN KEY (`provincia`) REFERENCES `provincias` (`codigo`);

--
-- Filtros para la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD CONSTRAINT `empresa_ibfk_1` FOREIGN KEY (`codigo_poblacion`) REFERENCES `poblaciones` (`codigo`),
  ADD CONSTRAINT `empresa_ibfk_2` FOREIGN KEY (`codigo_provincia`) REFERENCES `provincias` (`codigo`);

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `factura_ibfk_1` FOREIGN KEY (`codigo_cliente`) REFERENCES `clientes` (`codigo_cliente`);

--
-- Filtros para la tabla `lineas`
--
ALTER TABLE `lineas`
  ADD CONSTRAINT `lineas_ibfk_1` FOREIGN KEY (`codigo_producto`) REFERENCES `productos` (`codigo_producto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
