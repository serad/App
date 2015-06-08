<?php
header('Content-Type: text/html; charset=utf-8');
class dbCon
{
    private $con;
    private $usr = "admin";
    private $pass = "admin";
    private $db = "localhost";
    private $dbName = "aplicacion";

    public function __construct() {
        $this->con = new mysqli($this->db, $this->usr, $this->pass, $this->dbName);
         $this->con->query("SET character_set_results = 'utf8', character_set_client = 'utf8',character_set_connection = 'utf8'");
    }

    function consulta($query) {
        $query = sprintf($query);
        $resul = $this->con->query($query);
        return $resul;
    }
}
?>