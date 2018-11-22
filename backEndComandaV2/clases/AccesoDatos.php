<?php
class AccesoDatos
{
    private static $ObjetoAccesoDatos;
    private $objetoPDO;
 
    private function __construct()
    {
        try { 
            /*000WEBHOST*/
            //$this->objetoPDO = new PDO('mysql:host=localhost;dbname=id7708865_lacomanda;charset=utf8', 'id7708865_root', '17811781', array(PDO::ATTR_EMULATE_PREPARES => false,PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
//FREEHOSTING// $this->objetoPDO = new PDO('mysql:host=localhost;dbname=dvlacoma_nda;charset=utf8', 'dvlacoma_root', '17811781', array(PDO::ATTR_EMULATE_PREPARES => false,PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
   $this->objetoPDO = new PDO('mysql:host=localhost;dbname=lacomanda;charset=utf8', 'root', '', array(PDO::ATTR_EMULATE_PREPARES => false,PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
            $this->objetoPDO->exec("SET CHARACTER SET utf8");
           
        } 
        catch (PDOException $e) { 
            print "Error!: " . $e->getMessage(); 
            die();
        }
    }
 
    public function RetornarConsulta($sql)
    { 
        return $this->objetoPDO->prepare($sql); 
    }
     public function RetornarUltimoIdInsertado()
    { 
        return $this->objetoPDO->lastInsertId(); 
    }
 
    public static function dameUnObjetoAcceso()
    { 
        if (!isset(self::$ObjetoAccesoDatos)) {          
            self::$ObjetoAccesoDatos = new AccesoDatos(); 
        } 
        return self::$ObjetoAccesoDatos;        
    }
 
 
     // Evita que el objeto se pueda clonar
    public function __clone()
    { 
        trigger_error('La clonación de este objeto no está permitida', E_USER_ERROR); 
    }
}
?>