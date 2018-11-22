<?php
 class Web
{
    public $idusuario;
    public $nombre;
    public $megas;
    
     
    public function GuardarWeb(){
    
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("INSERT into servicios (idUsuario, nombre_servicio, contratado)values(:idusuario, :nombre, :megas)");
        $consulta->bindValue(':idusuario', $this->idusuario, PDO::PARAM_STR);
        $consulta->bindValue(':nombre', $this->nombre, PDO::PARAM_STR);
        $consulta->bindValue(':megas', $this->megas, PDO::PARAM_INT);
        $consulta->execute();
        
        return $objetoAccesoDato->RetornarUltimoIdInsertado();
    }

    public static function TraerTodosLasWebs() {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from servicios");  
        $consulta->execute();
        $webs= $consulta->fetchAll(PDO::FETCH_CLASS, "Web");
                
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