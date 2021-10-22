
//variaveis
let jogoNaruto = document.getElementById('jogoNaruto');
let canvas = document.getElementById('canvasJogo');
let imagem1 = document.getElementById('imagem1');
let imagem2 = document.getElementById('imagem2');
let imagem3 = document.getElementById('imagem3');
let imagem4 = document.getElementById('imagem4');

let cabecalho = document.getElementById('cabecalho');
let sobreNaruto = document.getElementById('sobreNaruto');
let footerPag = document.getElementById('footerPag');

let permitir = true;
let x = 300;
let y = 30;



let aparece = true;


//pre definicoes



function some() {
    console.log("oi");
}

function move(event){

    sobreNaruto.style.display = "none";
    footerPag.style.display = "none";
    cabecalho.style.display = "none";


    
    let k = event.keyCode;
    
    if(k==38 && permitir == true) {
        imagem1.style.display = "block";
        imagem2.style.display = "none";
        imagem3.style.display = "none";
        imagem4.style.display = "none"; 
        
        y = y + 5;

        
    } else if(k==40 && permitir == true) {
        imagem1.style.display = "none";
        imagem2.style.display = "block";
        imagem3.style.display = "none";
        imagem4.style.display = "none"; 

        y = y - 5;

        

    } else if(k==39 && permitir == true) {
        imagem1.style.display = "none";
        imagem2.style.display = "none";
        imagem3.style.display = "block";
        imagem4.style.display = "none"; 

        x = x + 5;

        

    } else if(k==37 && permitir == true) {
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


    for(let i = 255; i > 234; i--) {
        if(y >= 315 && x == i) {

            if(k==37) {
                permitir = false;
            } else {
                permitir = true;
            }

            imagem1.style.left = 225 + "px";
            imagem2.style.left = 225 + "px";
            imagem3.style.left = 225 + "px";
            imagem4.style.left = 225 + "px";

        } 
    }
    for(let i = 340; i < 361; i++) {
        if(y >= 315 && x == i) {

            if(k==39) {
                permitir = false;
            } else {
                permitir = true;
            }

            imagem1.style.left = 340 + "px";
            imagem2.style.left = 340 + "px";
            imagem3.style.left = 340 + "px";
            imagem4.style.left = 340 + "px";
        }
    }
        

    

    for(let i = 315; i < 331; i++) {
        if((y == i && x <= 225) || (y == i && x >= 350)) {

            if(k==38) {
                permitir = false;
            } else {
                permitir = true;
            }
    
            imagem1.style.bottom = 315 + "px";
            imagem2.style.bottom = 315 + "px";
            imagem3.style.bottom = 315 + "px";
            imagem4.style.bottom = 315 + "px";
        }
    }

    
        if(y <= 0) {

            if(k==40) {
                permitir = false;
            } else {
                permitir = true;
            }
    
            imagem1.style.bottom = 0 + "px";
            imagem2.style.bottom = 0 + "px";
            imagem3.style.bottom = 0 + "px";
            imagem4.style.bottom = 0 + "px";

        } else if(x <= 0) {

            if(k==37) {
                permitir = false;
            } else {
                permitir = true;
            }
    
            imagem1.style.left = 0 + "px";
            imagem2.style.left = 0 + "px";
            imagem3.style.left = 0 + "px";
            imagem4.style.left = 0 + "px";

        } else if(x >= 560) {

            if(k==39) {
                permitir = false;
            } else {
                permitir = true;
            }
    
            imagem1.style.left = 560 + "px";
            imagem2.style.left = 560 + "px";
            imagem3.style.left = 560 + "px";
            imagem4.style.left = 560 + "px";

        }

    if(y >= 600) {
        alert("Eu to vendo o que você está fazendo em... vá para casa dos hokages ou se verá com o jutsu de mil anos de maldição!");
    }

    

    if((y >= 450 && x >= 220) && (y >= 450 && x <= 355)) {
        
        sobreNaruto.style.display = "block";
        footerPag.style.display = "block";
        cabecalho.style.display = "block";
        jogoNaruto.style.display = "none";

        permitir = false;
    } 

   
    console.log(y + " " + x);
 }

