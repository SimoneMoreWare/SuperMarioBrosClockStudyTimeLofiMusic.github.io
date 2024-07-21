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
let blockQm;
let dimXBlockQm = 120;
let dimYBlockQm = 120;
let posXBlockQm = 930;
let posYBlockQm = 175;
let block;
let dimXBlock = 120;
let dimYBlock = 120;
let posXBlock1 = 1050;
let posYBlock1 = 175;
let posXBlock2 = 1170;
let posYBlock2 = 175;
let posXBlock3 = 1290;
let posYBlock3 = 175;


function preload(){

    background = loadImage('background.png');
	cloud = loadImage('cloud.png');
	panel = loadImage('panel.png');
	blockQm = loadImage('block_qm.png');
	block = loadImage('block.png');
}

function setup(){

	// Calculate scale factor to adapt image of display dimensions
	factorScale = min(windowWidth / dimXBackground, windowHeight / dimYBackground)*1;

    createCanvas(dimXBackground * factorScale, dimYBackground * factorScale);

    // resize images to keep same proportions
    background.resize(dimXBackground * factorScale, dimYBackground * factorScale);
	cloud.resize(dimXCloud * factorScale, dimYCloud * factorScale);
	panel.resize(dimXPanel * factorScale, dimYPanel * factorScale);
	blockQm.resize(dimXBlockQm * factorScale, dimYBlockQm * factorScale);
	block.resize(dimXBlock * factorScale, dimYBlock * factorScale);
}

function draw(){

    // Draw background on canvas
	image(background, 0, 0);

	//Draw clouds
	image(cloud, posXCloud1 * factorScale, posYCloud1 * factorScale);
	image(cloud, posXCloud2 * factorScale, posYCloud2 * factorScale);

	//Draw panel
	image(panel, posXPanel * factorScale, posYPanel * factorScale);

	//Draw blockQm
	image(blockQm, posXBlockQm * factorScale, posYBlockQm * factorScale);

	//Draw blocks
	image(block,posXBlock1 * factorScale ,posYBlock1 * factorScale);
	image(block,posXBlock2 * factorScale ,posYBlock2 * factorScale);
	image(block,posXBlock3 * factorScale ,posYBlock3 * factorScale);
}
