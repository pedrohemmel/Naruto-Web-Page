let canvas = document.getElementById('canvasJogo');
let imagem1 = document.getElementById('imagem1');
let imagem2 = document.getElementById('imagem2');
let imagem3 = document.getElementById('imagem3');
let imagem4 = document.getElementById('imagem4');

let x = 300;
let y = 30;

let aparece = true;


function some() {
    console.log("oi");
}

function move(event){

    let k = event.keyCode;
    
    if(k==38) {
        imagem1.style.display = "block";
        imagem2.style.display = "none";
        imagem3.style.display = "none";
        imagem4.style.display = "none"; 
        
        y = y + 5;

        
    } else if(k==40) {
        imagem1.style.display = "none";
        imagem2.style.display = "block";
        imagem3.style.display = "none";
        imagem4.style.display = "none"; 

        y = y - 5;

        

    } else if(k==39) {
        imagem1.style.display = "none";
        imagem2.style.display = "none";
        imagem3.style.display = "block";
        imagem4.style.display = "none"; 

        x = x + 5;

        

    } else if(k==37) {
        imagem1.style.display = "none";
        imagem2.style.display = "none";
        imagem3.style.display = "none";
        imagem4.style.display = "block"; 

        x = x - 5;

        

    }
    imagem1.style.bottom = y + "px";
    imagem1.style.left = x + "px";
    imagem2.style.bottom = y + "px";
    imagem2.style.left = x + "px";
    imagem3.style.bottom = y + "px";
    imagem3.style.left = x + "px";
    imagem4.style.bottom = y + "px";
    imagem4.style.left = x + "px";
   
    
 }
