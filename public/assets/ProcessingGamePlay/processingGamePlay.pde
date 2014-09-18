///////////////////////////LEVEL DEFINITION/////////////////////////////////////////
ArrayList<Integer[]> LevelTuples = new ArrayList<Integer[]>(Arrays.asList(new Integer[] {2, 2, 200, 30}, 
        new Integer[] {1, 2, 500, 60}, new Integer[] {2, 2, 100, 90}, new Integer[] {1, 2, 400, 120}, 
        new Integer[] {2, 2, 200, 150}, new Integer[] {1, 1, 50, 165},new Integer[] {2, 2, 200, 30}, 
        new Integer[] {1, 2, 500, 60}, new Integer[] {2, 2, 100, 90}, new Integer[] {1, 2, 400, 120}, 
        new Integer[] {2, 2, 200, 150}, new Integer[] {1, 1, 50, 165},new Integer[] {2, 2, 200, 30}, 
        new Integer[] {1, 2, 500, 60}, new Integer[] {2, 2, 100, 90}, new Integer[] {1, 2, 400, 120}, 
        new Integer[] {2, 2, 200, 150}, new Integer[] {1, 1, 50, 165},new Integer[] {2, 2, 200, 30}, 
        new Integer[] {1, 2, 500, 60}, new Integer[] {2, 2, 100, 90}, new Integer[] {1, 2, 400, 120}, 
        new Integer[] {2, 2, 200, 150}, new Integer[] {1, 1, 50, 165},new Integer[] {2, 2, 200, 30}, 
        new Integer[] {1, 2, 500, 60}, new Integer[] {2, 2, 100, 90}, new Integer[] {1, 2, 400, 120}, 
        new Integer[] {2, 2, 200, 150}, new Integer[] {1, 1, 50, 165},new Integer[] {2, 2, 200, 30}, 
        new Integer[] {1, 2, 500, 60}, new Integer[] {2, 2, 100, 90}, new Integer[] {1, 2, 400, 120}, 
        new Integer[] {2, 2, 200, 150}, new Integer[] {1, 1, 50, 165},new Integer[] {2, 2, 200, 30}, 
        new Integer[] {1, 2, 500, 60}, new Integer[] {2, 2, 100, 90}, new Integer[] {1, 2, 400, 120}, 
        new Integer[] {2, 2, 200, 150}, new Integer[] {1, 1, 50, 165},new Integer[] {2, 2, 200, 30}, 
        new Integer[] {1, 2, 500, 60}, new Integer[] {2, 2, 100, 90}, new Integer[] {1, 2, 400, 120}, 
        new Integer[] {2, 2, 200, 150}, new Integer[] {1, 1, 50, 165}));
        
Iterator iterLT = LevelTuples.iterator();
Integer[] dir;
////////////////////////////////////


///////////////////////////KMDJCode ///////////////////////////
///------ KMDJ Global Initializations ----------/////
var ctx;
PImage img;
int i,j;
int nb=20;
int currframe = -1;
ArrayList<Integer> queueX = new ArrayList(); 
ArrayList<Integer> queueY = new ArrayList();
Integer[] directions; 
int LorR; int linetype; int windowSpan; int duration;
	
///------ KMDJ Setup Local Initializations ------/////
void setup(){
	size(500,660);
	ctx = externals.context;
	ellipseMode(CORNER);
	smooth();
	background(0);
}
        
        
///------- KMDJ Execute Game Play ------/////
void draw(){
	//<!-- BrightestPixs Init -->
	float brightestValue = 0;
	int brightestY = 0; 
    int brightestX = 0;

	//<!-- Ellipse Img Init -->
	pushMatrix();
	translate(width,0);
	scale(-1,1);//mirror the video
	ctx.drawImage(video, 0, 0, width, height); //video is defined inside getUserMedia.js
	popMatrix();
	
	
	
	//MUTATE THE VIDEO STARTING HERE
	
	img = get();
	img.resize(nb,nb);
	background(255);
	noStroke();
	
  	currframe += 1;
  	//println("Current Frame: "+ currframe);
  	directions = cfCurrPlay(currframe);
	
	for(j=0; j<nb; j++){
		for(i=0;i<nb; i++){
			
			int clr = img.get(i, j);
			fill(clr);
			float vb = brightness(clr);
			//println("iterating through video");
			if (vb > brightestValue){
                brightestValue = vb; 
                brightestY = j*height/nb; 
                brightestX = i*width/nb;
             }
             
			ellipse(i*width/nb, j*height/nb, width/nb, height/nb);
		}
	}
	//println("Entered For Loop, calculating pixel placement...");
	fill(255, 204, 0, 128); ellipse(brightestX, brightestY, 50, 50);
	QueueAdd(brightestX, brightestY);
}


Integer[] cfCurrPlay(int framenum){ 
	boolean checking = true;
	
	if (framenum == 0){
	println("Frame is: "+framenum);
      stepPlay();
    }
        
        strokeWeight(100);  // Beastly
        //line(abs(360-int(windowSpan/2)), 480, abs(360-int(windowSpan/2)), 20);  
        //line(abs(360+int(windowSpan/2)), 480, abs(360+int(windowSpan/2)), 20);
        line(abs(360+int(90/2)), 480, abs(360+int(90/2)), 20);
        checking = true;

          while (checking){ 

            if (framenum-100 < duration){
              checking = false;

            }else if (duration == framenum-100){
              stepPlay();
              println("Called StepPlay from currPlay");
              startFrame = framenum;
              checkQueue(queueX, queueY);
              checking = false;
            }else{
            checking = false;    
          }
        }

     return dir;
        
	}
	
void stepPlay(){
	println("EnteredStepPlay");
        if (iterLT.hasNext()) { 
           dir =  (Integer[])iterLT.next();
          	LorR = dir[0]; 
          	linetype = dir[1]; 
          	windowSpan = dir[2]; 
          	duration = dir[3];   
          
          	ArrayList<Integer> queueX = new ArrayList(); ArrayList<Integer> queueY = new ArrayList(); 
        }
        println("Game Play: { " +LorR + " "+ linetype + " "+ windowSpan + " " + duration + "}" );
      	
      }
      
void QueueAdd(int x, int y){
        queueX.add(x); 
        queueY.add(y);
        
     }
	
	
	
////////////////
void checkQueue(ArrayList<Integer> qx, ArrayList<Integer> qy){
	println("checking Queue");
        if (qx.size() > 0){
          // Time's Up? Compute score and set new goal, reset vals for new task
          float sumX = 0; float sumY = 0; float intercept = 0; float r2= 0;
          float numerator = 0; float denominator = 1; int n = qx.size();
          float sumXY = 0; float sumX2 = 0; float slope = 1; int score = 0;
          
          //findSlope  
          Integer[] xy = new Integer[n];
          
          for(int i=0 ; i< n ; i++) {
            xy[i] = qx.get(i)*qy.get(i);
          }
          
          Integer[] x2 = new Integer[n]; int val= 0;
          for(int i=0 ; i< n ; i++) {
            val = qx.get(i);
            x2[i] = val*val;
          }
          
          sumX = sumAL(qx, n); sumY = sumAL(qy, n); sumXY = sumIL(xy, n); sumX2 = sumIL(x2, n);
          
          numerator = n*sumXY - sumX*sumY; 
          denominator = n*sumX2 - sumX*sumX;
          
          slope = numerator/denominator; 
          //println("SLOPE: "+ slope);
          
          //findIntercept| b  = Mean(y) - m Mean(x)
  
   	    if (!isNaN(slope)){
            intercept = sumY/n - slope*sumX/n;
          }
  
          ///Compute R2 
          float sse = 0; float sst = 0; float e = 0; 
          Float[] error2 = new Float[n]; float meanY = 0; Float[] dev2 = new Float[n];
          
          //sse- Sum of Squared Error
          for (int ind = 0; ind< n; ind++){
            e = qy.get(ind) - intercept - slope* qx.get(ind);
            error2[ind] = e*e;
          }
          
          sse = sumFL(error2, n);
          
          //sst- Sum of Squared Total 
          meanY = sumY/ n;
          for (int indx = 0; indx < n; indx++){
            e = qy.get(indx) - meanY;
            dev2[indx] = e*e;
          }
          
          sst = sumFL(dev2, n);
          
          //R2
          r2 = 1 - sse/sst;
          println("R2: " + r2 + " " + sse +" " +  sst);
          
          //DISPLAY MESSAGE FOR LONG ENOUGH   
          boolean bDisplayMessage;
          int currentTime; int passed;
          final int DISPLAY_DURATION = 3000; // 1s
          
          
          if (!isNaN(r2)){
            //R2 characterization
            bDisplayMessage = true;
            println(bDisplayMessage);
            
            if (r2>0.75){  
              println("LINE R2");
              if (linetype == 1){
                score += 200;
                if (bDisplayMessage){
                  if (bDisplayMessage){
                  
                  println("init LM +++++++++++++++");
                      println("init +++++++++++++++");
                      println("init +++++++++++++++");
                  
                  for (int i =0; i<3000; i++){
                    text("+200", 100.0, 200.0);
                    text("Line Matched!", 100.0, 100.0);
                  }
                  
                  bDisplayMessage = false;
                  
                }   
              }else{
                if (bDisplayMessage){
                  
                  println("init LNQ +++++++++++++++");
                      println("init +++++++++++++++");
                      println("init +++++++++++++++");
                  
                  for (int i =0; i<3000; i++){
                    text("Not Quite", 100.0, 100.0);
                  }
                    
                  bDisplayMessage = false;
                }
              }
            }
            }else{
             println("CURVE R2");
              if (linetype == 2){
                if (bDisplayMessage){
                  score += 100;
                  
                  for (int i =0; i<3000; i++){
                    text("+100", 100.0, 200.0);
                    text("Curve Matched!", 100.0, 100.0);
                  }
                  bDisplayMessage = false;
                    
                  println("init CM +++++++++++++++");
                  println("init +++++++++++++++");
                  println("init +++++++++++++++");
                   
                }
              }else{
                  
                
                println("init CNM +++++++++++++++");
                      println("init +++++++++++++++");
                      println("init +++++++++++++++");
                  
                if (bDisplayMessage){
                  for (int i =0; i<3000; i++){
                    text("Not Quite", 100.0, 100.0);
                  }
                      bDisplayMessage = false;
                      
                }
               }    
              }
             }

   
          
     }
   }
        
        
        
float sumAL(ArrayList<Integer> inp, int len){
        float s = 0;
        for (int c = 0; c < len; c++){
          s += inp.get(c);
        }
        return s;
      }
      
      float sumFAL(ArrayList<Float> inp, int len){
        float s = 0;
        for (int c=0; c< len; c++){
          s += inp.get(c);
        }
        return s;
      }
      
      float sumIL(Integer[] inp, int len){
        float si = 0;
        for (int c=0; c< len; c++){
          si += inp[c];
        }
        return si;
      }
      
      float sumFL(Float[] inp, int len){
        float si = 0;
        for (int c=0; c< len; c++){
          si += inp[c];
        }
        return si;
      }
