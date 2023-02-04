/******************** | Script para ocultar e mostrar conteuo | ********************/
$(document).ready(function(){
	$("select").change(function(){
		$(this).find("option:selected").each(function(){
			var optionValue = $(this).attr("value");
			if(optionValue){
				$(".box").not("." + optionValue).hide();
				$("." + optionValue).show(); 
			}
			else{
				$(".box").hide();
			}
		});
	}).change();
});


/******************** | Script para copiar conteudo | ********************/
function CopyToClipboard(containerid) {
	var copyDiv = document.getElementById(containerid);
	copyDiv.style.display = 'block';
	copyDiv.focus();
	document.execCommand('SelectAll');
	document.execCommand("Copy", false, null);
	var alertarTexto = document.getElementById('alert-texto')
	alertarTexto.innerHTML = ('Script copiado para área de transferência');
	alertarTexto.className = "show";
  	setTimeout(function(){ alertarTexto.className = alertarTexto.className.replace("show", ""); }, 1000);
 }

 /******************** | Script para copiar conteudo referente a checklist | ********************/
 function copyToClipboard() {
    var copyText = document.getElementById("content").value;
    navigator.clipboard.writeText(copyText).then(() => {
	var alertarTexto = document.getElementById('alert-texto')
	alertarTexto.innerHTML = ('Script copiado para área de transferência');
	alertarTexto.className = "show";
	setTimeout(function(){ alertarTexto.className = alertarTexto.className.replace("show", ""); }, 1000);
    });
  }
