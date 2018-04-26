var marvel = function()
{
	var Buscar = function()
	{
		var personaje=$("#txtPersonaje").val();
		var url="http://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith="
		var cantidadComics=0;
		var cantidadSeries=0;
		var cantidadHistorias=0;
		var comics ="";
		url = url + personaje;
		$.ajax({
			url:url,
			dataType:"json",
			success:function(response){
				if(response.code == 200){
					$("#foto").attr("src",response.data.results[0].thumbnail.path+"."+response.data.results[0].thumbnail.extension);
					$("#nombre").html(response.data.results[0].name);
					cantidadComics=response.data.results[0].comics.returned;
					for(var i=0; i<cantidadComics; i++)
					{
						comics+=response.data.results[0].comics.items[i].name+"<br>";
					}
					$("#comics").html(comics);
					cantidadSeries=response.data.results[0].comics.returned;
					for(var a=0; a<cantidadSeries; a++)
					{
						series+=response.data.results[0].series.items[a].name+"<br>";
					}
					$("#series").html(series);
					cantidadHistorias=response.data.results[0].stories.returned;
					for(var c=0; c<cantidadHistorias; c++)
					{
						stories+=response.data.results[0].stories.items[c].name+"<br>";
					}
					$("#historias").html(stories);
				}	
			}
		});

	}
	var teclaPersonaje = function(tecla)
	{
		if(tecla.which ==13) // enter //13 + 10
			//retorno de carro y salto de linea
		{
			Buscar();
		}
	}

	$("#btnBuscar").on("click",Buscar);
	$("#txtPersonaje").on("keypress",teclaPersonaje);


}
$(document).ready(marvel);