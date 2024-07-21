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
let marioFont;
let textFontSize = 85;
let posXHour = 1114;
let posYHour = 285;
let posXHourShadow = 1110;
let posYHourShadow = 275;
let posXMinute = 1234;
let posYMinute = 285;
let posXMinuteShadow = 1230;
let posYMinuteShadow = 275;
let posXSecond = 1354;
let posYSecond = 285;
let posXSecondShadow = 1350;
let posYSecondShadow = 275;
let marioStand;
let dimXMarioStand = 200;
let dimYMarioStand = 200;
let posXMarioStand = posXBlock3-20;
let posYMarioStand = 389;
let marioJump;
let dimXMarioJump = 200;
let dimYMarioJump = 200;
let posXMarioJump = posXBlock3-20;
let posYMarioJump = posYMarioStand;
let milliseconds;
let jumpScale = 600;
let groundY = 389;
let lastSecond = -1;
let marioJumpSound;

function preload(){

    background = loadImage('background.png');
	cloud = loadImage('cloud.png');
	panel = loadImage('panel.png');
	blockQm = loadImage('block_qm.png');
	block = loadImage('block.png');
	marioStand = loadImage('mario_stand1.png');
	marioJump = loadImage('mario_jump1.png');

	marioFont = loadFont('Super Plumber Brothers.ttf');

	marioJumpSound = loadSound('mario_jump_sound.mp3');

}

function mousePressed() {
	userStartAudio();
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
	marioStand.resize(dimXMarioStand * factorScale, dimYMarioStand * factorScale);
	marioJump.resize(dimXMarioJump * factorScale, dimYMarioJump * factorScale);

}

function draw(){

    // Draw background on canvas
	image(background, 0, 0);

	//Draw panel
	image(panel, posXPanel * factorScale, posYPanel * factorScale);

	//Draw clouds
	image(cloud, posXCloud1 * factorScale, posYCloud1 * factorScale);
	image(cloud, posXCloud2 * factorScale, posYCloud2 * factorScale);

	marioAnimation();

	//Draw blockQm
	image(blockQm, posXBlockQm * factorScale, posYBlockQm * factorScale);

	//Draw blocks
	image(block,posXBlock1 * factorScale ,posYBlock1 * factorScale);
	image(block,posXBlock2 * factorScale ,posYBlock2 * factorScale);
	image(block,posXBlock3 * factorScale ,posYBlock3 * factorScale);

	addHoursText();


}

function marioAnimation(){

	const milliseconds = (new Date().getMilliseconds()) / 1000;
	posYMarioStand = groundY + min(0, milliseconds*(milliseconds - 0.8))*jumpScale;

	if (milliseconds > 0.05 && milliseconds < 0.75){
		image(marioJump,posXMarioJump*factorScale,posYMarioStand*factorScale);
	}else{
		image(marioStand,posXMarioStand*factorScale,posYMarioStand*factorScale);
	}

	if (lastSecond !== second() ) {
		if (lastSecond !== -1){
			marioJumpSound.play();
		}
		lastSecond = second();
	}

}

function addHoursText(){

	let h = hour() < 10 ? '0'+hour() : hour();
	let m =  minute() < 10 ? '0'+minute() : minute();
	let s =  second() < 10 ? '0'+second() : second();

	addTimeIntoTheBlock(posXHour,posYHour,posXHourShadow,posYHourShadow,textFontSize,marioFont,h,factorScale);
	addTimeIntoTheBlock(posXMinute,posYMinute,posXMinuteShadow,posYMinuteShadow,textFontSize,marioFont,m,factorScale);
	addTimeIntoTheBlock(posXSecond,posYSecond,posXSecondShadow,posYSecondShadow,textFontSize,marioFont,s,factorScale);

}

function addTimeIntoTheBlock(posX,posY,posXShadow,posYShadow,textFontSize,font,value,factorScale){
	//main text hour
	fill(0);
	noStroke();
	textAlign(CENTER);
	textSize(textFontSize * factorScale);
	textFont(font);
	text(value, posX * factorScale , posY * factorScale);
	//text shadow hour
	fill(255,221,201);
	noStroke();
	textAlign(CENTER);
	textSize(textFontSize * factorScale);
	textFont(font);
	text(value, posXShadow * factorScale, posYShadow * factorScale);
}