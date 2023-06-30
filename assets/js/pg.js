

//funçãos das cotas


const valorDaQtd = 0.39;

function addCotas(valor) {

    
    let valorDoCampo = document.getElementById('campo-cotas').value;
    

    if(valor === '-' && valorDoCampo > 1) {
        document.getElementById('campo-cotas').value = valorDoCampo - 1;

    } else if (valor > 0) {
        let a = parseInt(valor);
        let b = parseInt(valorDoCampo);

        document.getElementById('campo-cotas').value = a + b;
    }   /*else if (valor < 0 ) {
        document.querySelector('#campo-cotas').value = 1;
    }*/

//multiplicador das cotas pelo valor

    const cotaQtd = document.querySelector('#campo-cotas');

    const value = cotaQtd.value;

    let valorT = value * valorDaQtd;

    //console.log(valorT);

    let cotasTotal = document.querySelector('#qtdDasCotas');
    cotasTotal.innerHTML = value;

    let multiplicarValor = document.querySelector('#valorDasCotas');
    multiplicarValor.innerHTML = valorT.toFixed(2);

}

//recuperar quantidade das cotas e valor para o envio

const btnCotas = document.getElementById('btnPopup');

function recuperarCotas () {
    const qtdCotasEnvio = document.getElementById('campo-cotas').value;
    const valorDasCotas = 0.39 * parseInt(qtdCotasEnvio);
    console.log(qtdCotasEnvio);
    console.log(valorDasCotas);
}

//fechar e abrir popup de compra

const buttonOpen = document.getElementById('btnPopup');

const modal = document.querySelector("dialog");

const buttonClose = document.getElementById('btnClose');

buttonOpen.onclick = function () {
    modal.showModal();
}

buttonClose.onclick = function () {
    modal.close();
}  


//controle de telefone e cpf

function ValidaCPF(){	
    let cpfCampo = document.getElementById("cpfCampo").value; 
    let cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;	 
    if (cpfValido.test(cpfCampo) == true)	{ 
       document.querySelector('#cpfCampo').style.background = corDeFundo;
       corDeFundo = '#00FF00';
    } else	{	 
    	
    }
}
function fMasc(objeto,mascara) {
    obj = objeto
    mask = mascara
    setTimeout("fMascEx()",1)
}

function fMascEx() {
    obj.value = mask(obj.value)
}

function mCPF(cpf){
    cpf = cpf.replace(/\D/g,"")
    cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
}