

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
    console.log(valorDasCotas)
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

const telefone = document.getElementById('telefone').value;


function controleDeContato () { 
    
    if (telefone.length === 11) {
        alert(telefone);
    }
}