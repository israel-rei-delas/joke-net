var active ="active"
var botao = document.querySelector(".rambarger")
var lista = document.querySelector(".menuul")

function myFunction(x) {
    x.classList.toggle("change");
}

function sim(){
    lista.classList.toggle(active)
}



botao.addEventListener("click", sim)