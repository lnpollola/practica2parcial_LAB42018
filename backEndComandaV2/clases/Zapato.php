<?php
 class Zapato
{
    // public $idusuario;
    // public $nombre;
    // public $megas;
    public $id;
    public $codigozapato; 
    public $nombre;
    public $fIngreso;
    public $localVenta;
    public $precio;
    public $sexoZapato;
     
    public function GuardarWeb(){
    
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("INSERT into servicios (idUsuario, nombre_servicio, contratado)values(:idusuario, :nombre, :megas)");
        $consulta->bindValue(':idusuario', $this->idusuario, PDO::PARAM_STR);
        $consulta->bindValue(':nombre', $this->nombre, PDO::PARAM_STR);
        $consulta->bindValue(':megas', $this->megas, PDO::PARAM_INT);
        $consulta->execute();
        
        return $objetoAccesoDato->RetornarUltimoIdInsertado();
    }

    public function GuardarZapato(){
    
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("INSERT into zapatos (codigozapato, nombre, fingreso, localVenta, precio, sexoZapato)values(:codigozapato, :nombre, :fingreso, :localventa, :precio, :sexozapato)");
      
      
        $consulta->bindValue(':codigozapato', $this->codigozapato, PDO::PARAM_INT);
        $consulta->bindValue(':nombre', $this->nombre, PDO::PARAM_STR);
        $consulta->bindValue(':fingreso', $this->fIngreso, PDO::PARAM_INT);
        $consulta->bindValue(':localventa', $this->localVenta, PDO::PARAM_STR);
        $consulta->bindValue(':precio', $this->precio, PDO::PARAM_INT);
        $consulta->bindValue(':sexozapato', $this->sexoZapato, PDO::PARAM_STR);


        $consulta->execute();
        
        return $objetoAccesoDato->RetornarUltimoIdInsertado();
    }

    public static function TraerTodosLosZapatos() {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from zapatos");  
        $consulta->execute();
        $webs= $consulta->fetchAll(PDO::FETCH_CLASS, "Zapato");
                
        return $webs;									
    }
 // public static function TraerTodosLosProductos() 
// {
//     $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
// 	$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from productos ");  
// 	$consulta->execute();
// 	$producto= $consulta->fetchAll(PDO::FETCH_CLASS, "Productos");
            
//     return $producto;
									
// }
 // public static function TraerProducto($nombre) 
// {
//     $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
//     $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from productos WHERE nombre= :nombre ");  
//     $consulta->bindValue(':nombre', $nombre, PDO::PARAM_STR);
// 	$consulta->execute();
// 	$producto= $consulta->fetchObject('Producto');
            
//     return $producto;
									
// }
 // public function BorrarProducto()
// {
//     $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
//     $consulta =$objetoAccesoDato->RetornarConsulta("
//         delete 
//         from productos 				
//         WHERE nombre=:nombre");	
//     $consulta->bindValue(':nombre',$this->nombre, PDO::PARAM_STR);		
//     $consulta->execute();
//     return $consulta->rowCount();
// }
 // public function ModificarProducto()
// {
 //     $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
//     $consulta =$objetoAccesoDato->RetornarConsulta("
//            update productos 
//            set precio='$this->precio'
//            WHERE nombre='$this->nombre'");
           
//     return $consulta->execute();
 // }
 }
 ?> 