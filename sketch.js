/*var font;
function preload() {
        font = loadFont('assets/MerryChristmasFlake.ttf');
}*/

function setup() {

        createCanvas(800, 800);
}

function draw() {

        randomSeed(99);   

/*Style-Snowflakes*/
        background(0,0,0,10);
        fill(255,255,255)
        noStroke();   

/*Laufvariable*/  
        var x = random(800);
         x=0;

/*Loop*/
    while (x < width) {

        var abst=random (-5,5);

/*Variables-Snowflakes*/    
        var sec = second ();
        var sec = map (sec, 0, 60, 0, 360);

/*Snowflakes*/   
        ellipse (x+abst, sec+abst*150, 10, 10);

/*Wert*/
        x=x+10;
}



/*--------------------------------------------*/

/*Style-Snowbackground-min*/
        fill(255,255,255,100);
        noStroke();

/*Variables-Backgropund-min*/
        var min = minute ();
        var min = map (min, 0, 60, 0, 400);

        rect(0,800,400,-min);


/*Style-Snowbackground-h*/
        fill(255,255,255,100);
        noStroke();

/*Variables-Backgropund-hours*/
        var h = hour ();
        var h = map (h, 0, 24, 0, 400);

        rect(400,800,400,-h);

 /*Font*/
        /*fill(255);*/
  	/*textFont(font);*/
	/*textSize(72);*/
        /*textAlign(CENTER);*/
        
        /*text("Christmas Time");*/


//noLoop();//

}

