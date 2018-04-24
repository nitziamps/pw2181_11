var inicia = function()
{
	var nuevo = function()
	{
	//JSON=JavaScript Objaect Notation
	$.ajax({
  	url: 'https://randomuser.me/api/',
  	dataType: 'json',
  	success: function(data){
    	$("#nombre").html(data.results[0].name.first+" "+data.results[0].name.last);
    	$("#foto").attr("src",data.results[0].picture.large);
 	 }
	});

	}

	$("#btnNuevo").on("click",nuevo);


}
$(document).ready(inicia);