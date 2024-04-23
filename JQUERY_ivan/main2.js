
$(".borrado").hide()
$(".hecho").hide()

$(document).ready(function(){
    $(".bt1").click(function(){

        let tarea = $(".input[type='text']").val();

        if(tarea === ""){
            //alertaVacio; 
            return;
        }
        
        $(".nuevasTareas").prepend("<li class='tareasAgregadas'>" + tarea + 
        " <button class = 'borrado'>borrar</button>" +
        " <button class = 'hecho'>Hecha</button>" + 
        "</li>");  
        $(".input[type='text']").val("");
    })

    $(".nuevasTareas").on("click",".borrado", function(){
        //Accedemos al elemeto padre para borrar el que corresponde
        $(this).parent().remove();
    })

    $(".nuevasTareas").on("click", ".hecho", function(){
        
        $(this).parent().css("background-color", "yellow");
    });
    
    // $(".nuevasTareas").on("click", ".hecho", function(){
    //     // Accedemos al elemento padre para ocultarlo y cambiar su color de fondo
    //     var $elementoPadre = $(this).parent();
    //     $elementoPadre.css("background-color", "yellow");
    //     $elementoPadre.find(".hecho").hide();
    // });
    

    
})