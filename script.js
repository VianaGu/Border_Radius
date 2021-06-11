const text = document.getElementById("text");
const button = document.getElementById("button");

text.addEventListener('keyup',setRadius);
button.addEventListener("click", myFunction)

/* Funções */
function setRadius(){
    /* Variaveis locais */
    const valor = document.getElementById("text").value;
    document.getElementById("mid").style.borderRadius = valor + "px";
}
function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("text");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("border-radius: " + copyText.value+"px;");
  }