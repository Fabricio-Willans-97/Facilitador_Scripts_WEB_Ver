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


/******************** | Script para copiar conteuo | ********************/
function CopyToClipboard(containerid) {
	var copyDiv = document.getElementById(containerid);
	copyDiv.style.display = 'block';
	copyDiv.focus();
	document.execCommand('SelectAll');
	document.execCommand("Copy", false, null);
	var alertarTexto = document.getElementById('alert-texto')
	alertarTexto.innerHTML = ('Script copiado para área de transferência');
	alertarTexto.className = "show";
  	setTimeout(function(){ alertarTexto.className = alertarTexto.className.replace("show", ""); }, 3000);
 }

 /******************** | Script para copiar conteuo referente a checklist | ********************/
 function copyToClipboard() {
    var copyText = document.getElementById("content").value;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place. XD
        // Nobody likes hidden stuff being done under the hood! :D
        alert("Script copiado para área de transferência");
    });
  }
