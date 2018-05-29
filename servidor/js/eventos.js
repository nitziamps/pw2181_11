var inicioApp = function()
{
	var Aceptar = function()
	{
		event.preventDefault();
		var usuario=$("#txtUsuario").val();
		var clave=$("#txtClave").val();
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
			success:function(response){
				if(response.respuesta == true)
				{
					//alert("Bienvenido");
					$("#secInicio").hide("slow");
					$("#frmUsuarios").show("slow");
					//posiciona el cursor en el cuadro de texto
					$("txtNombreUsuario").focus();
				}else{
				alert("usuario o clave incorrecta")
					}

			},
			error:function(xhr,ajaxOptions,thrownError){
			}
	
		});
	}
	var buscaUsuario = function(){
		var usuario = $("txtNombreUsuario").val();
		var parametros="opc=buscaUsuario"+
						"&usuario="+usuario+
						"&aleatorio"+Math.random();

		if(usuario != ""){
			$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/buscausuario.php",
			data:parametros,
			success:function(response){
				if(response.respuesta == true)
				{
					$("txtNombre").val(response.nombre);
					$("txtClaveUsuario").val(response.clave);
				
					}else{
						$("txtNombre").focus();
						$("txtNombre").val("");
					$("txtClaveUsuario").val("");
					}

			},
			error:function(xhr,ajaxOptions,thrownError){
			}
	
		});

		}
	}

	var Guardar = function(){
			var usuario =$("#txtUsuario").val();
			var nombre =$("#txtNombre").val();
			var clave =$("#txtClaveUsuario").val();
			var parametros = "opc=guardarUsuario"+"&usuario="+usuario+"&nombre="+nombre+"&clave="+clave+"&aleatorio="+Math.random();
			if(usuario!="" && nombre !="" && clave!=""){

			$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url:"php/guardarusuario.php",
			data: parametros,
			success: function(response)
			{
				if(response.respuesta == true){
					alert("cambios guardados con exito");
					$("#frmUsuarios > input").val("");
					$("#txtNombreUsuario").focus();
				}else{
					alert("Ocurrio un error, intente mas tarde");
				}
			},
			error: function(xhr,ajaxOptions,throenError)
			{

			}
		});
			}else{
				alert("Llene todos los datos");
			}

		}

	var teclaNombreUsuario = function(tecla){
		if(tecla.which == 13){
			//enter
			buscaUsuario();
		}
	var Borrar = function()
	{
		var usuario = $("txtNombreUsuario").val();
		var pregunta = prompt("Seguro de borrar a" +usuario+"? (si/no)","no");
		var parametros = "opc=borrarusuario"+
						"&usuario="+usuario+
						"&aleatorio="+Math.random();

		if (pregunta != null && pregunta == "si") {
    	$.ajax({
    		cache:false,
    		type:"POST",
    		dataType:"json",
    		url:"php/borrarusuario.php",
    		data: parametros,
    		success: function(response){
    			if (response.respuesta == true) {
    				alert("Usuario eliminado")
    				$("#frmUsuarios>input").val("");
    				$("#txtNombreUsuario").focus();
    			}else{
    				alert("Ocurrio un error,intente mas tarde ")
    			}
    		},
    		error:function(xhr,ajaxOptions,thrownError){
    		}

    	});
	}
}
	}


	$("#btnAceptar").on("click",Aceptar);
	$("#txtNombreUsuario").on("keypress",teclaNombreUsuario);
	$("#btnBorrar").on("click",Borrar);
	$("#btbGuardar").on("click",Guardar);
	$("#frmUsuarios").hide();

}
$(document).ready(inicioApp);