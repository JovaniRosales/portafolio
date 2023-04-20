function encriptar(){
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    //afecte a mayusculas y minusculas{

    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");
    
    document.getElementById("imgder").style.display="none";
    document.getElementById("text1").style.display="none";
    document.getElementById("text2").style.display="none";
    document.getElementById("text3").value= txtCifrado;
    document.getElementById("inputtexto").value= "";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("text3").style.display= "inherit";
}
function desencriptar(){
    var texto = document.getElementById("inputtexto").value.toLowerCase();

    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
    
    document.getElementById("imgder").style.display="none";
    document.getElementById("text1").style.display="none";
    document.getElementById("text2").style.display="none";
    document.getElementById("text3").value= txtCifrado;
    document.getElementById("inputtexto").value= "";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("text3").style.display= "inherit";
}

    document.getElementById("copiar").addEventListener("click", function() {
    var textarea = document.getElementById("text3");
    textarea.select();
    document.execCommand("copy");
  });