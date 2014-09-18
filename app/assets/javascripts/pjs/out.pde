var ctx;
var cnvs;

void setup(){
	size(window.innerWidth/2, window.innerHeight/2);
	background(0);
	ctx = externals.context;
	cnvs = externals.canvas;
}

void draw(){
	ctx.drawImage(bg, 0, 0, width, height);
}