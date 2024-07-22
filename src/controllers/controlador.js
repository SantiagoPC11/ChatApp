/*
function cambiarCaja(){
    let boton=document.getElementById("botonChat")
    let cajaChat=document.getElementById("cajaChat")

    if(cajaChat.style.display=='none'||cajaChat.style.display==''){
        cajaChat.style.display="block"
    }else{
    cajaChat.style.display="none"
        }
    
}    */

        let boton=document.getElementById("botonChat")
        let cajaChat=document.getElementById("cajaChat")
    boton.addEventListener("click",function(){
        
    
        if(cajaChat.style.display=='none'||cajaChat.style.display==''){
            cajaChat.style.display="block"
        }else{
        cajaChat.style.display="none"
            }
        
    }) 