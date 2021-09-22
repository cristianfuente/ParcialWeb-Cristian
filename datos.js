
    
$(document).ready(function(){
    const valorurl = window.location.search;
    const urlparametros = new URLSearchParams(valorurl);
    var nombre = urlparametros.get("nombre");
    var email = urlparametros.get("email");
    var telefono =urlparametros.get("telefono");
    var porcentaje =urlparametros.get("porc");
    var gustos=urlparametros.get("gusto");
    $("#nombre").html(nombre);
    $("#email").html(email);
    $("#tel").html(telefono);
    $("#porc").html(porcentaje);
    $("#gusto").html(gustos);
});