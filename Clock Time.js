let factorScale = 1;
let background;
let dimXBackground = 1600;
let dimYBackground = 800;
let cloud;
let dimXCloud = 140;
let dimYCloud = 100;
let posXCloud1 = 1200;
let posYCloud1 = 100;
let posXCloud2 = 760;
let posYCloud2 = 150;
let panel;
let dimXPanel = 690;
let dimYPanel = 270;
let posXPanel = 55;
let posYPanel = 90;

function preload(){

    background = loadImage('background.png');
	cloud = loadImage('cloud.png');
	panel = loadImage('panel.png');
}

function setup(){

	// Calculate scale factor to adapt image of display dimensions
	factorScale = min(displayWidth / dimXBackground, displayHeight / dimYBackground)*1;

    createCanvas(dimXBackground * factorScale, dimYBackground * factorScale);

    // resize images to keep same proportions
    background.resize(dimXBackground * factorScale, dimYBackground * factorScale);
	cloud.resize(dimXCloud * factorScale, dimYCloud * factorScale);
	panel.resize(dimXPanel * factorScale, dimYPanel * factorScale);
}

function draw(){

    // Draw background on canvas
	image(background, 0, 0);

	//Draw clouds
	image(cloud, posXCloud1 * factorScale, posYCloud1 * factorScale);
	image(cloud, posXCloud2 * factorScale, posYCloud2 * factorScale);

	//Draw panel
	image(panel, posXPanel * factorScale, posYPanel * factorScale);
}
