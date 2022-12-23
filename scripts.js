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
	if (document.selection) {
		var range = document.body.createTextRange();
		range.moveToElementText(document.getElementById(containerid));
		range.select().createTextRange();
		document.execCommand("copy");
  	} 
  	else if (window.getSelection) {
		var range = document.createRange();
		range.selectNode(document.getElementById(containerid));
		window.getSelection().addRange(range);
		document.execCommand("copy");
		alert("Script copiado para área de transferência.")
  	}
}