let bttn = document.querySelector('.bttn');
let valor_bruto = document.querySelector('.valor_bruto');

function esconder_dados(){
    if(valor_bruto.style.backgroundColor != 'black'){
        valor_bruto.style.backgroundColor = 'black';
        valor_bruto.style.height = '.9rem';
    }
    else{
        valor_bruto.style.backgroundColor = 'white';
        valor_bruto.style.height = 'initial';
    };
};