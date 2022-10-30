bttn = document.querySelector('.bttn');
container = document.querySelector('.container');

function bttn_on(){
    if(container.style.display != 'none'){
        container.style.display = 'none';
    }
    else{
        container.style.display = 'initial';
    };
};