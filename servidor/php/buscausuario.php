<?php
include 'conexiones.php';
function buscaUsuario(){
	$respuesta = false;
	$usuario = $_POST["usuario"];
	$clave = md5($_POST["clave"]);

	//conectamos al servidor de BD
	$con=conecta();
	$consulta="select * from usuarios where usuario= '".$usuario."' limit 1";
	$resConsulta=mysqli_query($con,$consulta);
	$nombre = "";
	$clave = "";
	if(mysqli_num_rows($resConsulta)> 0){
		$respuesta = true;
		while($regConsulta = mysqli_fetch_array($resConsulta)){
			$nombre = $regConsulta["nombre"];
			$clave = $regConsulta["clave"];
		}
	}
	$salidaJSON = array('respuesta' => $respuesta 
						'nombre'	=> $respuesta
						'clave'  => $respuesta);
	print json_encode($salidaJSON);

}


$opc = $_POST["opc"];
switch ($opc) {
	case 'buscaUsuario':
		buscaUsuario();
		break;
	
	default:
		# code...
		break;
}
?>