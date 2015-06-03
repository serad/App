 <?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header('Location: login.html');
}
else {

    include 'dbCon.php';
    $db = new dbCon();

    $emisor = $_SESSION['usuario'];
    $receptor = $_POST['receptor'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $enc = false;

    $consulta = "SELECT usuario FROM alumnos WHERE usuario = '$receptor'";
    $resul = $db->consulta($consulta);

    if ($resul->num_rows == 1) {
        $enc = true;
    }
    $consulta = "SELECT usuario FROM profesores WHERE usuario = '$receptor'";

    $resul = $db->consulta($consulta);

    if ($resul->num_rows == 1) {
        $enc = true;
    }

    if ($enc) {
        $consulta = "INSERT INTO mensajes values('','$emisor','$receptor','$asunto','$mensaje')";
        $result = $db->consulta($consulta);
        echo $result;
    }
}
?>