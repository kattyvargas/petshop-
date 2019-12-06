function validate() {
	console.log("validando")
	var txtName = document.getElementById("txtName")
	var nameValidator = document.getElementById("nameValidator")
	console.log(txtName.value.split(' ').length)
	if(txtName.value.split(' ').length < 2){
		nameValidator.innerHTML = "Este campo debiese tener dos palabras al menos"
	} else {
		nameValidator.innerHTML = ""
	}
}
function validate() {
	console.log("validando")
	var txtApe = document.getElementById("txtApe")
	var apeValidator = document.getElementById("apeValidator")
	console.log(txtApe.value.split(' ').length)
	if(txtApe.value.split(' ').length < 2){
		apeValidator.innerHTML = "Este campo debiese tener dos palabras al menos"
	} else {
		apeValidator.innerHTML = ""
	}
}


function sololetras(e){
    key=e.keyCode || e.which;
    teclado=String.fromCharCode(key).toLocaleLowerCase();
    letras=" abcdefghijklmnñopqrstuvwxyz";
    
    especiales="8-37-38-46-164";
    teclado_especial=false;
    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;break;
        }
    }
    if(letras.indexOf(teclado)==-1 && !teclado_especial){
        return false;
    }

}

