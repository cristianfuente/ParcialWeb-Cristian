    var opciones=$("#opciones");
    var ingustos=$("#in-gustos");
    var pila=$("#pila-gustos");
    var comprobador=true;
    var nombre=$("#nombre");
    var email=$("#email");
    var tel=$("#tel");

$(document).ready(function(){
    
 
    opciones.hide();
    var btncancel=$("#btn-cancelar");
    btncancel.click(function(){
        comprobador=true;
        pila.html("");
        opciones.hide();
        nombre.val("");
        email.val("");
        tel.val("");
    });
    
    $("#btn-gustos").click(agregarElementos);


});

function agregarElementos(){
    var msgusto=ingustos.val();
        if(msgusto!=""){
            var stringhtml='<tr><td>'+msgusto+'</td><td>0</td><td class="editar boton-editar">Editar</td></tr>';
            var htmlAnt=pila.html();
            pila.html(htmlAnt+stringhtml);
            ingustos.val("");
            agregarEdicion();
        }else{
            alert("no puede estar vacio")
        }
}  

function agregarEdicion(){
    var botones=$(".boton-editar");
            var i;
            for(i=0; i<botones.length ; i++){
                $(botones[i]).click(function(){
                    if(comprobador){
                        var herm=$(this).siblings();
                        $(this).removeClass("editar");
                        this.innerHTML="en edicion";
                        $(this).addClass("edicion");
                        $(this).unbind("click");
                        opciones.show();
                        
                        
                       herm[0].innerHTML='<input type="text" name="gusto" value="'+herm[0].innerHTML+'" class="input-edit">';
                        herm[1].innerHTML='<input type="text" name="porc" value="'+herm[1].innerHTML+'" class="input-edit">';
                       comprobador=false;
                
                    }else{
                        alert("solo se puede editar una linea a la vez");
                    }
                    
                });
            };
}