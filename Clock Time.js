let background;
let factorScale = 1;
let dimXBackground = 1600;
let dimYBackground = 800;

function preload(){
    background = loadImage('background.png');
}

function setup(){

	factorScale = min(displayWidth / dimXBackground, displayHeight / dimYBackground)*1;

    createCanvas(dimXBackground * factorScale, dimYBackground * factorScale);

    // Calcola il fattore di scala per adattare l'immagine alle dimensioni dello schermo

    console.log(factorScale);

    // Ridimensiona l'immagine mantenendo le proporzioni
    background.resize(dimXBackground * factorScale, dimYBackground * factorScale);

}

function draw(){
    // Disegna l'immagine sul canvas
	image(background, 0, 0);
}
