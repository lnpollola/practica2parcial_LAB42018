<?php
include_once "Producto.php";

class ProductoApi{

    
    public function TraerProducto($request, $response, $args) {
        $nombre= $args['nombre'];
        $producto = new Producto();
       $producto= Producto::TraerProducto($nombre);
       $newresponse = $response->withJson($producto, 200);  
      return $newresponse;
    }
}
?>