const button = document.getElementById("button");

button.addEventListener('click',setRadius);
/* Funções */
function setRadius(value){
    /* Variaveis locais */
    const valor = document.getElementById("text").value;

    document.getElementById("mid").style.borderRadius = valor + "px";
    console.log(valor)
}