/* variaveis Globais */
const text = document.getElementById("text");
const button = document.getElementById("button");
const v1=0;
const tela = document.getElementById("mid");
const opt = document.getElementById("test");
const SE = document.getElementById("SuperiorEsquerdo");
const SD = document.getElementById("SuperiorDireito");
const IE = document.getElementById("InferiorEsquerdo");
const ID = document.getElementById("InferiorDireito");

text.focus();

/* Eventos */
text.addEventListener('keyup',setRadius);
button.addEventListener("click", myFunction);
opt.addEventListener("click",zero);
window.addEventListener("click", checkedBox);
window.addEventListener("click", setRadius);
/* Funções */
function zero(){
    if(opt.checked == true){
        SE.checked=0;
        SD.checked=0;
        IE.checked=0;
        ID.checked=0;
    }
}
function checkedBox(){
    if(SE.checked == true | SD.checked == true | IE.checked == true | ID.checked == true){
        opt.checked = 0;
        
    }
}

function setRadius(){
    /* Variaveis locais */
    const valor = document.getElementById("text").value;
    
    if(opt.checked == true){
        tela.style.borderRadius = valor + "px";
    }if(SE.checked == true){
        tela.style.borderTopLeftRadius = valor + "px";        
    }if(SD.checked == true){
        tela.style.borderTopRightRadius = valor + "px";
    }if(IE.checked == true){
        tela.style.borderBottomLeftRadius = valor + "px";
    }if(ID.checked == true){
        tela.style.borderBottomRightRadius = valor + "px";
    }
}
function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("text");
  
    /* Seleciona o campo de texto */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copiando texto */
    document.execCommand("copy");
  
    /* colocando codigo na tela */
    tela.textContent = "border-radius: " + copyText.value+"px;";
  }