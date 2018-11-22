-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-11-2018 a las 19:11:39
-- Versión del servidor: 10.1.22-MariaDB
-- Versión de PHP: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lacomanda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `clave` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `sector` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `estado` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `perfil` varchar(50) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `usuario`, `clave`, `sector`, `estado`, `perfil`) VALUES
(1, 'ADMIN', '1234', 'Dueño', 'Activo', 'admin'),
(9, 'BARMAN', '1234', 'barra', 'suspendido', 'empleado'),
(10, 'MOZO', '1234', 'candy bar', 'Activo', 'empleado'),
(11, 'CHEF', '1234', 'cocina', 'Activo', 'empleado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `numero` int(8) UNSIGNED ZEROFILL NOT NULL,
  `mesa` int(5) UNSIGNED ZEROFILL NOT NULL,
  `importe` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `facturas`
--

INSERT INTO `facturas` (`numero`, `mesa`, `importe`, `fecha`) VALUES
(00000001, 00001, 310, '2018-05-03'),
(00000002, 00002, 570, '2018-06-01'),
(00000003, 00002, 410, '2018-06-05'),
(00000004, 00003, 390, '2018-07-10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mesas`
--

CREATE TABLE `mesas` (
  `idMesa` int(5) UNSIGNED ZEROFILL NOT NULL,
  `estado` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `canUsos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `mesas`
--

INSERT INTO `mesas` (`idMesa`, `estado`, `canUsos`) VALUES
(00001, 'cliente pagando', 10),
(00002, 'cliente pagando', 5),
(00003, 'con cliente esperando pedido', 12),
(00004, 'con cliente esperando pedido', 2),
(00005, 'con cliente esperando pedido', 2),
(00006, 'cerrada', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidodetalle`
--

CREATE TABLE `pedidodetalle` (
  `idDetalle` int(11) NOT NULL,
  `idPedido` int(5) UNSIGNED ZEROFILL NOT NULL,
  `producto` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `idEmpleado` int(11) NOT NULL,
  `estado` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `tiempoPreparacion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `tiempoServido` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `sector` varchar(50) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `pedidodetalle`
--

INSERT INTO `pedidodetalle` (`idDetalle`, `idPedido`, `producto`, `idEmpleado`, `estado`, `tiempoPreparacion`, `tiempoServido`, `sector`) VALUES
(1, 00001, 'coca-cola', 3, 'en preparacion', '2018/07/10 18:10', '2018/07/10 17:55', 'barra'),
(2, 00001, 'cerveza', 4, 'en preparacion', '2018/07/10 18:01', '2018/07/10 17:56', 'chopera'),
(3, 00001, 'pizza', 6, 'en preparacion', '2018/07/10 18:03', '2018/07/10 17:54', 'cocina'),
(4, 00001, 'postre', 10, 'en preparacion', '2018/07/10 18:13', '2018/07/10 17:58', 'candy bar'),
(5, 00002, 'plato', 6, 'facturado', '2018/07/10 18:35', '2018/07/10 18:20', 'cocina'),
(6, 00002, 'vino', 3, 'facturado', '2018/07/10 18:35', '2018/07/10 18:20', 'barra'),
(7, 00002, 'vino', 3, 'facturado', '2018/07/10 18:30', '2018/07/10 18:20', 'barra'),
(8, 00002, 'postre', 6, 'facturado', '2018/07/10 18:35', '2018/07/10 18:19', 'candy bar'),
(9, 00002, 'trago', 3, 'facturado', '2018/07/10 18:31', '2018/07/10 18:21', 'barra'),
(10, 00003, 'pizza', 6, 'facturado', '2018/07/10 20:24', '2018/07/10 20:09', 'cocina'),
(11, 00003, 'empanadas', 6, 'facturado', '1970/01/01 1:00', '2018/07/10 20:09', 'cocina'),
(12, 00003, 'cerveza', 4, 'facturado', '2018/07/10 20:19', '2018/07/10 20:14', 'chopera'),
(13, 00003, 'trago', 9, 'facturado', '2018/07/10 20:25', '2018/07/10 20:10', 'barra'),
(14, 00004, 'plato', 0, 'listo para servir', '', '', 'cocina'),
(15, 00004, 'vino', 0, 'listo para servir', '', '', 'barra'),
(16, 00004, 'coca-cola', 0, 'listo para servir', '', '', 'barra'),
(17, 00004, 'postre', 10, 'listo para servir', '1970/01/01 1:00', '2018/07/10 18:19', 'candy bar'),
(18, 00005, 'empanadas', 0, 'listo para servir', '', '', 'cocina'),
(19, 00005, 'cerveza', 0, 'listo para servir', '', '', 'chopera'),
(20, 00005, 'postre', 0, 'listo para servir', '', '', 'candy bar'),
(21, 00006, 'cerveza', 4, 'facturado', '2018/07/10 19:37', '2018/07/10 19:22', 'chopera'),
(22, 00006, 'pizza', 6, 'facturado', '2018/07/10 19:31', '2018/07/10 19:22', 'cocina'),
(23, 00006, 'empanadas', 6, 'facturado', '1970/01/01 1:00', '2018/07/10 19:22', 'cocina'),
(24, 00006, 'vino', 3, 'facturado', '2018/07/10 19:32', '2018/07/10 19:22', 'barra'),
(25, 00007, 'cerveza', 0, 'pendiente', '', '', 'chopera'),
(26, 00008, 'cerveza', 0, 'pendiente', '', '', 'chopera'),
(27, 00009, 'cerveza', 0, 'pendiente', '', '', 'chopera'),
(28, 00010, 'cerveza', 0, 'pendiente', '', '', 'chopera'),
(29, 00011, 'cerveza', 0, 'pendiente', '', '', 'chopera'),
(30, 00012, 'cerveza', 0, 'pendiente', '', '', 'chopera'),
(31, 00013, 'cerveza', 0, 'pendiente', '', '', 'chopera'),
(32, 00014, 'cerveza', 0, 'pendiente', '', '', 'chopera'),
(33, 00015, 'cerveza', 0, 'pendiente', '', '', 'chopera');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(5) UNSIGNED ZEROFILL NOT NULL,
  `idMesa` int(5) UNSIGNED ZEROFILL NOT NULL,
  `tiempoInicio` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `fotoMesa` varchar(50) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `idMesa`, `tiempoInicio`, `fotoMesa`) VALUES
(00001, 00001, '2018/07/10 17:45,58', './fotos/00001.jpg'),
(00002, 00002, '2018/07/10 17:46,23', './fotos/00002.jpg'),
(00003, 00003, '2018/07/10 17:46,46', './fotos/00003.jpg'),
(00004, 00004, '2018/07/10 17:47,12', './fotos/00004.jpg'),
(00005, 00005, '2018/07/10 17:47,39', './fotos/00005.jpg'),
(00006, 00002, '2018/07/10 19:21,32', './fotos/00002.jpg'),
(00007, 00003, '2018/07/10 21:35,56', './fotos/00003.jpg'),
(00008, 00003, '2018/07/10 21:36,53', './fotos/00003.jpg'),
(00009, 00003, '2018/07/10 21:38,06', './fotos/00003.jpg'),
(00010, 00003, '2018/07/10 21:43,57', './fotos/00003.jpg'),
(00011, 00003, '2018/07/10 21:44,04', './fotos/00003.jpg'),
(00012, 00003, '2018/07/10 21:45,13', './fotos/00003.jpg'),
(00013, 00003, '2018/07/10 21:47,36', './fotos/00003.jpg'),
(00014, 00003, '2018/07/10 21:51,05', './fotos/00003.jpg'),
(00015, 00003, '2018/07/10 21:51,26', './fotos/00003.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`nombre`, `precio`) VALUES
('cerveza', 60),
('coca-cola', 30),
('empanadas', 30),
('pizza', 150),
('plato', 250),
('postre', 70),
('trago', 150),
('vino', 170);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sesiones`
--

CREATE TABLE `sesiones` (
  `id` int(11) NOT NULL,
  `idEmpleado` int(11) NOT NULL,
  `horaInicio` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `horaFinal` varchar(20) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `sesiones`
--

INSERT INTO `sesiones` (`id`, `idEmpleado`, `horaInicio`, `horaFinal`) VALUES
(1, 1, '2018', '2018'),
(2, 1, '2018', '2018/06/03 21:52,22'),
(3, 1, '2018/06/03 21:50,57', '2018/06/03 21:53,13'),
(4, 1, '2018/06/08 1:00,17', ''),
(5, 1, '2018/06/08 1:06,36', ''),
(6, 3, '2018/06/08 1:13,24', ''),
(7, 1, '2018/06/09 22:56,33', ''),
(8, 1, '2018/06/10 6:23,37', ''),
(9, 1, '2018/06/10 6:26,23', ''),
(10, 1, '2018/06/10 6:27,12', ''),
(11, 1, '2018/06/10 6:27,31', ''),
(12, 1, '2018/06/10 6:32,25', '2018/06/10 6:38,16'),
(13, 1, '2018/06/10 6:38,45', '2018/06/10 6:38,57'),
(14, 1, '2018/06/10 6:39,31', '2018/06/10 6:39,40'),
(15, 1, '2018/06/10 6:40,52', '2018/06/10 6:41,22'),
(16, 1, '2018/06/10 6:43,52', '2018/06/10 6:43,54'),
(17, 1, '2018/06/10 6:44,00', '2018/06/10 6:44,02'),
(18, 1, '2018/06/10 6:50,19', '2018/06/10 6:50,23'),
(19, 1, '2018/06/10 6:51,16', '2018/06/10 7:00,15'),
(20, 1, '2018/06/10 17:51,52', ''),
(21, 1, '2018/06/13 4:11,32', ''),
(22, 1, '2018/06/13 5:45,19', '2018/06/13 5:50,47'),
(23, 1, '2018/06/15 3:34,44', ''),
(24, 1, '2018/06/15 5:07,06', '2018/06/15 5:07,25'),
(25, 9, '2018/06/15 5:08,35', ''),
(26, 1, '2018/06/16 2:25,50', ''),
(27, 9, '2018/06/18 5:23,45', ''),
(28, 3, '2018/06/18 5:57,03', ''),
(29, 3, '2018/06/20 23:14,37', ''),
(30, 9, '2018/06/21 0:43,59', ''),
(31, 1, '2018/06/21 1:40,44', ''),
(32, 1, '2018/06/22 4:35,16', '2018/06/22 4:40,05'),
(33, 1, '2018/06/22 4:40,44', '2018/06/22 4:45,10'),
(34, 1, '2018/06/22 4:45,16', ''),
(35, 1, '2018/06/23 22:06,59', ''),
(36, 1, '2018/06/24 19:48,29', ''),
(37, 1, '2018/06/24 19:58,42', ''),
(38, 1, '2018/06/24 20:32,41', '2018/06/24 21:10,42'),
(39, 4, '2018/06/24 21:12,51', '2018/06/24 21:30,45'),
(40, 3, '2018/06/24 21:31,07', ''),
(41, 3, '2018/06/25 6:14,37', ''),
(42, 3, '2018/06/25 6:18,41', ''),
(43, 3, '2018/06/25 6:25,14', '2018/06/25 6:25,52'),
(44, 9, '2018/06/25 6:26,00', '2018/06/25 6:33,49'),
(45, 6, '2018/06/25 6:34,23', ''),
(46, 6, '2018/06/25 6:38,07', '2018/06/25 6:42,34'),
(47, 6, '2018/06/25 6:45,09', ''),
(48, 6, '2018/06/25 7:02,20', ''),
(49, 6, '2018/06/28 1:39,37', '2018/06/28 3:58,34'),
(50, 6, '2018/06/28 3:58,58', ''),
(51, 6, '2018/06/28 4:32,04', '2018/06/28 4:33,31'),
(52, 1, '2018/06/28 4:33,37', '2018/06/28 4:39,57'),
(53, 6, '2018/07/03 4:36,24', ''),
(54, 3, '2018/07/03 5:41,37', ''),
(55, 3, '2018/07/04 3:50,18', ''),
(56, 3, '2018/07/04 4:33,24', '2018/07/04 4:39,40'),
(57, 9, '2018/07/04 4:40,10', '2018/07/04 4:40,14'),
(58, 3, '2018/07/04 4:40,20', ''),
(59, 3, '2018/07/04 4:41,20', ''),
(60, 3, '2018/07/04 4:42,30', ''),
(61, 3, '2018/07/04 4:45,27', ''),
(62, 3, '2018/07/04 4:48,42', ''),
(63, 3, '2018/07/05 2:04,47', ''),
(64, 3, '2018/07/05 2:08,52', ''),
(65, 3, '2018/07/06 2:20,23', ''),
(66, 3, '2018/07/06 2:21,23', ''),
(67, 1, '2018/07/09 0:35,44', '2018/07/09 0:35,52'),
(68, 1, '2018/07/09 0:35,59', '2018/07/09 0:37,03'),
(69, 3, '2018/07/09 0:37,09', ''),
(70, 6, '2018/07/09 3:11,41', ''),
(71, 9, '2018/07/09 23:48,42', '2018/07/09 23:49,35'),
(72, 3, '2018/07/09 23:49,42', '2018/07/09 23:50,32'),
(73, 9, '2018/07/09 23:50,37', ''),
(74, 3, '2018/07/10 15:44,23', '2018/07/10 16:39,57'),
(75, 6, '2018/07/10 16:40,02', '2018/07/10 16:40,05'),
(76, 3, '2018/07/10 16:40,09', '2018/07/10 16:40,13'),
(77, 9, '2018/07/10 16:40,19', '2018/07/10 17:45,26'),
(78, 6, '2018/07/10 17:45,35', '2018/07/10 17:55,05'),
(79, 3, '2018/07/10 17:55,12', '2018/07/10 17:56,22'),
(80, 4, '2018/07/10 17:56,29', '2018/07/10 17:56,48'),
(81, 6, '2018/07/10 17:56,58', '2018/07/10 17:57,46'),
(82, 10, '2018/07/10 17:57,57', '2018/07/10 18:19,57'),
(83, 6, '2018/07/10 18:20,07', '2018/07/10 18:20,28'),
(84, 3, '2018/07/10 18:20,32', ''),
(85, 1, '2018/07/10 19:21,40', '2018/07/10 19:21,48'),
(86, 6, '2018/07/10 19:21,52', '2018/07/10 19:22,10'),
(87, 3, '2018/07/10 19:22,16', '2018/07/10 19:22,26'),
(88, 4, '2018/07/10 19:22,34', '2018/07/10 19:22,44'),
(89, 10, '2018/07/10 19:23,02', '2018/07/10 20:08,07'),
(90, 6, '2018/07/10 20:08,13', '2018/07/10 20:10,00'),
(91, 9, '2018/07/10 20:10,10', '2018/07/10 20:10,22'),
(92, 10, '2018/07/10 20:10,33', '2018/07/10 20:14,18'),
(93, 4, '2018/07/10 20:14,23', ''),
(94, 3, '2018/07/10 21:15,00', ''),
(95, 1, '2018/07/10 21:17,38', ''),
(96, 1, '2018/07/10 21:37,24', ''),
(97, 1, '2018/07/10 21:39,22', ''),
(98, 1, '2018/07/10 21:43,27', ''),
(99, 1, '2018/07/10 21:47,45', ''),
(100, 1, '2018/07/10 21:50,55', ''),
(101, 9, '2018/07/10 21:52,05', ''),
(102, 1, '2018/07/12 16:47,21', ''),
(103, 1, '2018/07/12 21:40,45', '2018/07/12 21:41,36'),
(104, 1, '2018/09/16 0:06,10', ''),
(105, 1, '2018/09/16 0:40,21', ''),
(106, 1, '2018/09/16 0:41,16', ''),
(107, 1, '2018/09/16 5:48,03', ''),
(108, 1, '2018/09/16 5:49,49', ''),
(109, 1, '2018/11/07 19:06,15', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `clave` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `perfil` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `sexo` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `clave`, `perfil`, `sexo`) VALUES
(1, 'admin@gmail.com', 'admin', 'admin', 'masculino');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`numero`);

--
-- Indices de la tabla `mesas`
--
ALTER TABLE `mesas`
  ADD PRIMARY KEY (`idMesa`);

--
-- Indices de la tabla `pedidodetalle`
--
ALTER TABLE `pedidodetalle`
  ADD PRIMARY KEY (`idDetalle`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`nombre`);

--
-- Indices de la tabla `sesiones`
--
ALTER TABLE `sesiones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `numero` int(8) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `mesas`
--
ALTER TABLE `mesas`
  MODIFY `idMesa` int(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `pedidodetalle`
--
ALTER TABLE `pedidodetalle`
  MODIFY `idDetalle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT de la tabla `sesiones`
--
ALTER TABLE `sesiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
