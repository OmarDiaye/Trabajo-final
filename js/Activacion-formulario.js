$(document).ready(function(){

	$('.btnClose').click(function(){
     //validado Nombre//
     	if($('Nombre').val() == '') {
     		errores += '<p>ingrese un nombre</p>';
     		alert(errores);
     	}

	});
}):