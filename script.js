/* variaveis Globais */
const text = document.getElementById("text");
const button = document.getElementById("button");
const tela = document.getElementById("mid");
const opt = document.getElementById("test");
const SE = document.getElementById("SuperiorEsquerdo");
const SD = document.getElementById("SuperiorDireito");
const IE = document.getElementById("InferiorEsquerdo");
const ID = document.getElementById("InferiorDireito");
var num = new Array(
    '',
    '',
    '',
    '',
    ''
);

text.focus();

/* Eventos */
text.addEventListener('keyup',setRadius);
button.addEventListener("click", myButton);
SE.addEventListener("click",checkedBox);
SD.addEventListener("click",checkedBox);
IE.addEventListener("click",checkedBox);
ID.addEventListener("click",checkedBox);
opt.addEventListener("click",checkedBox1);



/* Funções */
function getValor(qnum){
    var qnum;
    return num[qnum]
}
function guardaValor(retorno){

    
    var retorno;
    if(opt.checked == true){
        num[0] = retorno;
    }if(SE.checked == true){
        num[1] = retorno;       
    }if(SD.checked == true){
        num[2] = retorno;
    }if(IE.checked == true){
        num[3] = retorno;
    }if(ID.checked == true){
        num[4] = retorno; 
    }
}
function checkedBox1(){
    if(opt.checked == true){
        SE.checked=0;
        SD.checked=0;
        IE.checked=0;
        ID.checked=0;
    }
} 
function checkedBox(){
    
    if(SE.checked == true | SD.checked == true | IE.checked == true | ID.checked == true){
        opt.checked = false;
    }
}

function setRadius(){
    

    /* Variaveis locais */
    const valor = document.getElementById("text").value;
    

    if(opt.checked == true){
        guardaValor(valor);
        tela.style.borderRadius = valor + "px";
    }if(SE.checked == true){
        guardaValor(valor);
        tela.style.borderTopLeftRadius = valor + "px";        
    }if(SD.checked == true){
        guardaValor(valor);
        tela.style.borderTopRightRadius = valor + "px";
    }if(IE.checked == true){
        guardaValor(valor);
        tela.style.borderBottomLeftRadius = valor + "px";
    }if(ID.checked == true){
        guardaValor(valor);
        tela.style.borderBottomRightRadius = valor + "px";
    }
}
function myButton() {
    /*
    // Get the text field 
    //var copyText = document.getElementById("text");
  
    // Seleciona o campo de texto 
    //copyText.select();
    //copyText.setSelectionRange(0, 99999); /* For mobile devices 
  
    // Copiando texto 
    //document.execCommand("copy");
  
    // colocando codigo na tela 
    //document.querySelector().innerHTML = "border-radius: " + copyText.value+"px;";*/
    if(opt.checked == true){
        var t = getValor(0);
        document.querySelector("#te").innerHTML = "border-radius: "+t+ ";";  
    }if(SE.checked == true){
        var se = getValor(1);
        document.querySelector('#se').innerHTML = "border-top-left-radius: " +se+ ";";            
    }if(SD.checked == true){
        var sd = getValor(2);
        document.querySelector("#sd").innerHTML = "border-top-right-radius: "+sd+ ";";
    }if(IE.checked == true){
        var ie = getValor(3);
        document.querySelector("#ie").innerHTML = "border-bottom-left-radius: ;"+ie+ ";";
    }if(ID.checked == true){
        var id = getValor(4);
        document.querySelector("#id").innerHTML = "border-bottom-right-radius: "+id+ ";";
    }

  }