let factorScale = 1;
let canvas;
let background;
let dimXBackground = 1600;
let dimYBackground = 800;
let cloud;
let dimXCloud = 140;
let dimYCloud = 100;
let posXCloud1 = 1350;
let posYCloud1 = 150;
let posXCloud2 = 820;
let posYCloud2 = 200;
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
let lenJumpBlock3 = 15;
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
let coin;
let dimXCoin = 120;
let dimYCoin = 120;
let posXCoin = posXBlockQm;
let posYCoin = 175;
let coinSound;
let lastMinute = -1;
let coinBounceScale = 1000;
let blockY = 175;
let goomba;
let dimXGoomba = 140;
let dimYGoomba = 140;
let posXGoombaStart = 400;
let posXGoombaCurrent = 400;
let posYGoombaStart = 449;
let flagDx = 1;
let flagSx = 0;
let speed = 1;
let thesholdDx = 160;
let thesholdSx = 160;
let iframe;
let container;
let valueHIframe = (0.6*dimYPanel);
let valueXIframe = (dimXPanel*0.9);
let posXIframe = (posXPanel*1.6);
let posYIframe = (posYPanel*2);
let textSizeScores = 60;
let totalScore = 0;
let posXTotalScoreText = 850;
let posYTotalScoreText = 70;
let totalCoins = 0;
let posXTotalCoinsText = 1020;
let posYTotalCoinsText = 70;
let posXTotalWorldText = 1180;
let posYTotalWorldText = 70;
let totalTime = 0;
let posXTotalTimeText = 1330;
let posYTotalTimeText = 70;
let posXTotalLivesText = 1480;
let posYTotalLivesText = 70;

function preload(){

    background = loadImage('background.png');
	cloud = loadImage('cloud.png');
	panel = loadImage('panel.png');
	blockQm = loadImage('block_qm.png');
	block = loadImage('block.png');
	marioStand = loadImage('mario_stand1.png');
	marioJump = loadImage('mario_jump1.png');
	coin = loadImage('coin.png');
	goomba = loadImage('goomba.png');

	marioFont = loadFont('Super Plumber Brothers.ttf');

	marioJumpSound = loadSound('mario_jump_sound.mp3');
	coinSound = loadSound('coin_sound.mp3');

}

function mousePressed() {
	userStartAudio();
}

function touchMoved() {
	userStartAudio();
}

function setup(){

	
	// Calculate scale factor to adapt image of display dimensions
	factorScale = min(windowWidth / dimXBackground, windowHeight / dimYBackground)*1;

    canvas = createCanvas(dimXBackground * factorScale, dimYBackground * factorScale);
	container = createDiv();
	container.style('position','relative');
	canvas.parent(container);
    // resize images to keep same proportions
    background.resize(dimXBackground * factorScale, dimYBackground * factorScale);
	cloud.resize(dimXCloud * factorScale, dimYCloud * factorScale);
	panel.resize(dimXPanel * factorScale, dimYPanel * factorScale);
	blockQm.resize(dimXBlockQm * factorScale, dimYBlockQm * factorScale);
	block.resize(dimXBlock * factorScale, dimYBlock * factorScale);
	marioStand.resize(dimXMarioStand * factorScale, dimYMarioStand * factorScale);
	marioJump.resize(dimXMarioJump * factorScale, dimYMarioJump * factorScale);
	coin.resize(dimXCoin * factorScale, dimYCoin * factorScale);
	goomba.resize(dimXGoomba * factorScale, dimYGoomba * factorScale);

	addIframe();

}

function draw(){

    // Draw background on canvas
	image(background, 0, 0);

	//Draw panel
	image(panel, posXPanel * factorScale, posYPanel * factorScale);
	
	//Draw clouds
	image(cloud, posXCloud1 * factorScale, posYCloud1 * factorScale);
	image(cloud, posXCloud2 * factorScale, posYCloud2 * factorScale);

	goombaAnimation();

	marioAnimation();

	coinAnimation();

	//Draw blockQm
	image(blockQm, posXBlockQm * factorScale, posYBlockQm * factorScale);

	//Draw blocks
	image(block,posXBlock1 * factorScale ,posYBlock1 * factorScale);
	image(block,posXBlock2 * factorScale ,posYBlock2 * factorScale);
	//image(block,posXBlock3 * factorScale ,posYBlock3 * factorScale);

	addHoursText();
	
	addScoreText(textSizeScores,factorScale,marioFont,"SCORE",totalTime*totalCoins,posXTotalScoreText,posYTotalScoreText);
	addScoreText(textSizeScores,factorScale,marioFont,"COINS",totalCoins,posXTotalCoinsText,posYTotalCoinsText);
	addScoreText(textSizeScores,factorScale,marioFont,"WORLD","UNI",posXTotalWorldText,posYTotalWorldText);
	addScoreText(textSizeScores,factorScale,marioFont,"TIME",totalTime,posXTotalTimeText,posYTotalTimeText);
	addScoreText(textSizeScores,factorScale,marioFont,"LIVES","7",posXTotalLivesText,posYTotalLivesText);

}

function addScoreText(fontSize,factorScale,font,title,value,posX,posY){
	fill(255,223,201);
	noStroke();
	textAlign(CENTER);
	textSize(fontSize * factorScale);
	textFont(font);
	text(title+"\n"+value, posX * factorScale, posY * factorScale);
}

function goombaAnimation(){
	image(goomba,posXGoombaCurrent*factorScale,posYGoombaStart*factorScale);
	
	if(flagDx===1){
		posXGoombaCurrent += 1;
		flagSx = 0;
	}else if(flagSx===1){
		posXGoombaCurrent = posXGoombaCurrent - speed;
		flagDx = 0;
	}	

	if(posXGoombaCurrent>=((thesholdDx*factorScale)+posXGoombaStart)){
		flagDx = 0;
		flagSx = 1;
	}else if(posXGoombaCurrent<=(-(thesholdSx*factorScale)+posXGoombaStart)){
		flagDx = 1;
		flagSx = 0;
	}
}

function marioAnimation(){

	const milliseconds = (new Date().getMilliseconds()) / 1000;
	posYMarioStand = groundY + min(0, milliseconds*(milliseconds - 0.8))*jumpScale;
	let s =  second() < 10 ? '0'+second() : second();

	if (milliseconds > 0.05 && milliseconds < 0.75){
		image(marioJump,posXMarioJump*factorScale,posYMarioStand*factorScale);
		image(block,posXBlock3 * factorScale ,(posYBlock3-lenJumpBlock3) * factorScale);
		addTimeIntoTheBlock(posXSecond,posYSecond-lenJumpBlock3,posXSecondShadow,posYSecondShadow-lenJumpBlock3,textFontSize,marioFont,s,factorScale);
	}else{
		image(marioStand,posXMarioStand*factorScale,(posYMarioStand-2)*factorScale);
		image(block,posXBlock3 * factorScale ,(posYBlock3) * factorScale);
		addTimeIntoTheBlock(posXSecond,posYSecond,posXSecondShadow,posYSecondShadow,textFontSize,marioFont,s,factorScale);


	}

	if (lastSecond !== second() ) {
		if (lastSecond !== -1){
			marioJumpSound.play();
			totalTime = totalTime + 1;
		}
		lastSecond = second();
	}

}

function coinAnimation(){
	image(coin,posXCoin*factorScale,posYCoin*factorScale);
	const milliseconds = (new Date().getMilliseconds()) / 1000;
	const seconds = second() + milliseconds;
	posYCoin = blockY + min(0, (seconds - 0.35) * (seconds - 1.1))*coinBounceScale;

	if (lastMinute !== minute()) {

		if (lastMinute !== -1){
			coinSound.play();
			totalCoins = totalCoins + 1;
		}

		lastMinute = minute();

	}
}

function addHoursText(){

	let h = hour() < 10 ? '0'+hour() : hour();
	let m =  minute() < 10 ? '0'+minute() : minute();
	//let s =  second() < 10 ? '0'+second() : second();

	addTimeIntoTheBlock(posXHour,posYHour,posXHourShadow,posYHourShadow,textFontSize,marioFont,h,factorScale);
	addTimeIntoTheBlock(posXMinute,posYMinute,posXMinuteShadow,posYMinuteShadow,textFontSize,marioFont,m,factorScale);
	//addTimeIntoTheBlock(posXSecond,posYSecond,posXSecondShadow,posYSecondShadow,textFontSize,marioFont,s,factorScale);

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

function addIframe() {
	// Crea l'iframe
	iframe = createElement('iframe');
	
	iframe.attribute('style', 'border-radius:12px');
	iframe.attribute('src', 'https://open.spotify.com/embed/playlist/2etD8gdCMHdaCVlfWmdZAS?utm_source=generator&theme=0');
	iframe.attribute('width', valueXIframe* factorScale);
	iframe.attribute('height', valueHIframe* factorScale);
	iframe.attribute('frameBorder', '0');
	iframe.attribute('allowfullscreen', '');
	iframe.attribute('allow', 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture');
	iframe.attribute('loading', 'lazy');
	iframe.style('position','absolute');

	iframe.parent(container);
	iframe.position(posXIframe* factorScale,posYIframe* factorScale);
}