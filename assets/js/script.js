$(function () {
//Boton Tooltip
    $('[data-toggle="tooltip"]').tooltip()
  })

//Tarjetas
  $(".card").click(function () {	 
    $('.card-text').toggle("fast");
    });

//Receta
  $(".receta").dblclick(function () {	 
    $(this).css ({
      "color": "#DC3545"
    });
    });

//Email
$("#email").click(function(){
  alert("El correo fue enviado correctamente.");
});