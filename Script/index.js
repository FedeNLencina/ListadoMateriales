var botonAgregar = document.getElementById("btn-agregar");

function agregarElemento( nombre ){
    var caja = document.createElement("div");

    var herramienta = document.createElement("h3");

    var eliminar = document.createElement("button");

    caja.classList.add("contenedor");

    herramienta.innerText= nombre;

    eliminar.innerText="Retirar";
    eliminar.classList.add("btn-eliminar");
    retirarHerramienta(eliminar);

    caja.appendChild( herramienta );
    caja.appendChild( eliminar );
    

    var lista = document.getElementById("listaHerramientas");
    lista.appendChild(caja);
    
}


botonAgregar.addEventListener("click", function(){
    var input = document.getElementById("herramienta");

    if(input.value!="" && input.value!=null){
        agregarElemento ( input.value );
    }
    
    input.value = "";

})

function retirarHerramienta(boton){
    boton.addEventListener("click", function(){
        boton.parentElement.remove();
    })
}