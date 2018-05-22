
var inicioApp = fuction()
{
	var Aceptar = function()
	{
		event.preventDefault();
		var usuario=$("#txtUsuario").val();
		var clave=$("txtClave").val();
		var parametros="opc=validaentrada"+
						"&usuario="+usuario+
						"&clave="+clave+
						"&numero="+Math.random();

		$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/validaentrada.php",
			data:parametros,
			success:fuction(response){
				if(response.respuesta == true){
					alert("Bienvenido");
				}else{
					alert("usuario o clave incorrecta")}

			},
			error:fuction(xhr,ajaxOptions,thrownError){
			}
	
		});
	}
	$("#btnAceptar").on("click",Aceptar);

}
$(document).ready(inicioApp);