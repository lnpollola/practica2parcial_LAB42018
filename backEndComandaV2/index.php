<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


require './composer/vendor/autoload.php';
require_once './clases/AccesoDatos.php';
require_once './clases/EmpleadoApi.php';
require_once './clases/PedidoApi.php';
require_once './clases/MesaApi.php';
require_once './clases/SesionApi.php';
require_once './clases/WebApi.php';
require_once './clases/ZapatoApi.php';

require_once './clases/ProductoApi.php';
require_once './clases/AutentificadorJWT.php';
require_once './clases/MWparaCORS.php';
require_once './clases/MWparaAutentificar.php';
require_once './clases/MWLaComanda.php';



$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;


$app = new \Slim\App(["settings" => $config]);


$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});

/*LLAMADA A METODOS DE INSTANCIA DE UNA CLASE*/
$app->group('/Servicios', function () { 

  $this->post('/AltaWeb',\WebApi::class . ':AltaWebSegundoParcial');
  $this->get('/TodasWebs',\WebApi::class . ':ListadoServicios');

  $this->post('/Carga', \WebApi::class . ':CargarUno');
  $this->post('/Borrar', \WebApi::class . ':BorrarUno');
  $this->post('/ModificarUsuario', \WebApi::class . ':ModificarUno');
  $this->post('/Suspender', \WebApi::class . ':Suspender');  
  $this->get('/Operaciones/{id}', \WebApi::class . ':CantidadDeOperaciones');
  $this->get('/Logueos', \WebApi::class . ':IngresosAlSistema');
  $this->get('/OperacionesUsuarios', \WebApi::class . ':OperacionesTodosUsuarios');
  $this->get('/OperacionesSector/{sector}', \WebApi::class . ':OperacionesPorSector');
  $this->get('/OperacionesUsuario/{idUsuario}', \WebApi::class . ':OperacionesUsuarioSeparado');
  $this->get('/OperacionesUsuarioSector/{sector}', \WebApi::class . ':OperacionesUsuariosSector');
  $this->get('/ListaUsuarios', \WebApi::class . ':traerTodos');//->add(\MWLaComanda::class . ':VerificarAdministrador');//->add(\MWparaAutentificar::class . ':VerificarUsuario');
  $this->get('/TraerUno/{id}', \WebApi::class . ':traerUno')->add(\MWparaCORS::class . ':HabilitarCORSTodos');
})/*->add(\MWparaAutentificar::class . ':VerificarUsuario')*/
->add(\MWparaCORS::class . ':HabilitarCORS8080')->add(\MWparaCORS::class . ':HabilitarCORSTodos');

$app->group('/Zapatos', function () { 

  $this->post('/AltaZapato',\ZapatoApi::class . ':AltaWebSegundoParcial');
  $this->get('/TodosZapatos',\ZapatoApi::class . ':ListadoZapatos');

  $this->post('/Carga', \WebApi::class . ':CargarUno');
  $this->post('/Borrar', \WebApi::class . ':BorrarUno');
  $this->post('/ModificarUsuario', \WebApi::class . ':ModificarUno');
  $this->post('/Suspender', \WebApi::class . ':Suspender');  
  $this->get('/Operaciones/{id}', \WebApi::class . ':CantidadDeOperaciones');
  $this->get('/Logueos', \WebApi::class . ':IngresosAlSistema');
  $this->get('/OperacionesUsuarios', \WebApi::class . ':OperacionesTodosUsuarios');
  $this->get('/OperacionesSector/{sector}', \WebApi::class . ':OperacionesPorSector');
  $this->get('/OperacionesUsuario/{idUsuario}', \WebApi::class . ':OperacionesUsuarioSeparado');
  $this->get('/OperacionesUsuarioSector/{sector}', \WebApi::class . ':OperacionesUsuariosSector');
  $this->get('/ListaUsuarios', \WebApi::class . ':traerTodos');//->add(\MWLaComanda::class . ':VerificarAdministrador');//->add(\MWparaAutentificar::class . ':VerificarUsuario');
  $this->get('/TraerUno/{id}', \WebApi::class . ':traerUno')->add(\MWparaCORS::class . ':HabilitarCORSTodos');
})/*->add(\MWparaAutentificar::class . ':VerificarUsuario')*/
->add(\MWparaCORS::class . ':HabilitarCORS8080')->add(\MWparaCORS::class . ':HabilitarCORSTodos');


/*LLAMADA A METODOS DE INSTANCIA DE UNA CLASE*/
$app->group('/Usuarios', function () { 
  $this->post('/Carga', \UsuarioApi::class . ':CargarUno');
  $this->post('/Borrar', \UsuarioApi::class . ':BorrarUno');
  $this->post('/ModificarUsuario', \UsuarioApi::class . ':ModificarUno');
  $this->post('/Suspender', \UsuarioApi::class . ':Suspender');  
  $this->get('/Operaciones/{id}', \UsuarioApi::class . ':CantidadDeOperaciones');
  $this->get('/Logueos', \UsuarioApi::class . ':IngresosAlSistema');
  $this->get('/OperacionesUsuarios', \UsuarioApi::class . ':OperacionesTodosUsuarios');
  $this->get('/OperacionesSector/{sector}', \UsuarioApi::class . ':OperacionesPorSector');
  $this->get('/OperacionesUsuario/{idUsuario}', \UsuarioApi::class . ':OperacionesUsuarioSeparado');
  $this->get('/OperacionesUsuarioSector/{sector}', \UsuarioApi::class . ':OperacionesUsuariosSector');
  $this->get('/ListaUsuarios', \UsuarioApi::class . ':traerTodos');//->add(\MWLaComanda::class . ':VerificarAdministrador');//->add(\MWparaAutentificar::class . ':VerificarUsuario');
  $this->get('/TraerUno/{id}', \UsuarioApi::class . ':traerUno')->add(\MWparaCORS::class . ':HabilitarCORSTodos');
})/*->add(\MWparaAutentificar::class . ':VerificarUsuario')*/->add(\MWparaCORS::class . ':HabilitarCORS8080')->add(\MWparaCORS::class . ':HabilitarCORSTodos');

/*LLAMADA A METODOS DE INSTANCIA DE UNA CLASE*/
$app->group('/Empleados', function () { 
  $this->post('/', \EmpleadoApi::class . ':CargarUno');
  $this->delete('/', \EmpleadoApi::class . ':BorrarUno');
  $this->put('/Suspender', \EmpleadoApi::class . ':Suspender');  
  $this->get('/Logueos', \EmpleadoApi::class . ':IngresosAlSistema');
  $this->post('/CambiarAvatar', \EmpleadoApi::class . ':CambiarAvatarApi');
  $this->post('/ModificarEmpleado', \EmpleadoApi::class . ':ModificarUno');
  $this->get('/Operaciones/{id}', \EmpleadoApi::class . ':CantidadDeOperaciones');
  $this->get('/OperacionesEmpleados', \EmpleadoApi::class . ':OperacionesTodosEmpleados');
  $this->get('/OperacionesSector/{sector}', \EmpleadoApi::class . ':OperacionesPorSector');
  $this->get('/OperacionesEmpleado/{idEmpleado}', \EmpleadoApi::class . ':OperacionesEmpleadoSeparado');
  $this->get('/OperacionesEmpleadoSector/{sector}', \EmpleadoApi::class . ':OperacionesEmpleadosSector');
  $this->get('/TraerUno/{id}', \EmpleadoApi::class . ':traerUno')->add(\MWparaCORS::class . ':HabilitarCORSTodos');
  $this->post('/ListaEmpleados', \EmpleadoApi::class . ':traerTodos')->add(\MWLaComanda::class . ':VerificarAdministrador');//->add(\MWparaAutentificar::class . ':VerificarUsuario');
  
})->add(\MWparaAutentificar::class . ':VerificarUsuario')->add(\MWparaCORS::class . ':HabilitarCORS8080')->add(\MWparaCORS::class . ':HabilitarCORSTodos');


$app->group('/Pedidos', function(){
  $this->post('/',\PedidoApi::class . ':IngresarPedido'); 
  $this->post('/PendientesEmpleado',\PedidoApi::class . ':TraerPendientesEmpleado');
  $this->post('/PrepararPedido',\PedidoApi::class . ':PrepararPedido');
  $this->post('/ServirPedido',\PedidoApi::class . ':ServirPedido');
  $this->post('/TiempoRestante',\PedidoApi::class . ':TiempoRestante');
  $this->post('/Cancelar',\PedidoApi::class . ':CancelarPedido');
  $this->get('/Cancelados',\PedidoApi::class . ':TraerCancelados');
  $this->get('/MasVendido',\PedidoApi::class . ':TraerMasVendido');
  $this->get('/MenosVendido',\PedidoApi::class . ':TraerMenosVendido');
  $this->get('/NoEntregadosATiempo',\PedidoApi::class . ':NoEntregadosATiempo');
  
});//->add(\MWLaComanda::class . ':VerificarSuspendido');

$app->group('/Productos', function(){
  $this->get('/{nombre}',\ProductoApi::class . ':TraerProducto'); 
});

$app->group('/Mesas', function(){
  $this->post('/Cobrar',\MesaApi::class . ':CobrarMesa'); 
  $this->post('/Cerrar',\MesaApi::class . ':CerrarMesa');
  $this->get('/MasUsada',\MesaApi::class . ':MasUtilizada');
  $this->get('/MenosUsada',\MesaApi::class . ':MenosUtilizada');
  $this->get('/NoSeUso',\MesaApi::class . ':NoSeUso');
  $this->get('/MasFacturo',\MesaApi::class . ':MasFacturo');
  $this->get('/MenosFacturo',\MesaApi::class . ':MenosFacturo');
  $this->get('/MenorFactura',\MesaApi::class . ':MenorFactura');
  $this->get('/MayorFactura',\MesaApi::class . ':MayorFactura');
  $this->post('/FacturadoEntreFechas',\MesaApi::class . ':FacturadoEntreFechas');
});



$app->group('/Sesion', function(){
  $this->post('/',\SesionApi::class . ':Login');
  $this->put('/Salir', \SesionApi::class . ':CerrarSesion');

});





$app->run();