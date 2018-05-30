<?php
include 'conexiones.php';
function listado()
{
	$respuesta = false;
	//Conectarnos al servidor de BD.
	$con = conecta();
	//$consulta = "select * from usuarios where usuario= '".$usuario."' limit 1";
	//echo $consulta;
	$consulta= sprintf ("select * from usuarios order by nombre");
	$resConsulta = mysqli_query($con,$consulta);
	$tabla="";
	//preguntamos si se hizo la actualizacion o inserccion
	if(mysqli_num_rows($resConsulta)>0){//insert o update
		$respuesta	= true; 
		$tabla.="<thead>";
		$tabla.="<tr>";
		$tabla.="<th>No</th>";
		$tabla.="<th>Usuario</th>";
		$tabla.="<th>Nombre</th>";
		$tabla.="</tr>";
		$tabla.="</thead>";
		$tabla.="<tbody>";
		$cuenta = 0;
		while($registro=mysqli_fetch_array($resConsulta)){
			$cuenta = $cuenta + 1;
			$tabla.="<tr>";
			$tabla.="<td>".$cuenta."</td>";
			$tabla.="<td>".$registro["usuario"]."</td>";
			$tabla.="<td>".$registro["nombre"]."</td>";
			$tabla.="</tr>";
		}
		$tabla.="</tbody>";
	}
	$salidaJSON = array('respuesta' => $respuesta,"tabla" => $tabla);
						
	//var_dump(salidaJSON);
	print json_encode($salidaJSON);
}
$opc = $_POST["opc"];
switch ($opc) {
	case 'listado':
		listado();
		break;
	
	default:
		# code...
		break;
}
?>