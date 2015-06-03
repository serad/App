<?php
class dbCon
{
    private $con;
    private $usr = "admin";
    private $pass = "admin";
    private $db = "localhost";
    private $dbName = "aplicacion";

    public function __construct() {
        $this->con = new mysqli($this->db, $this->usr, $this->pass, $this->dbName);
    }

    function consulta($query) {
        $resul = $this->con->query($query);
        return $resul;
    }
}
?>