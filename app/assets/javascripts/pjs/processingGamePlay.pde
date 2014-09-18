//////// TO GET Array Iteration to RUN ///////////////
boolean gamehasNext = true;
int curr = 0; Integer[] dir;

/////////////////////////// LEVEL DEFINITION ///////////
//Not sustainable kind of dumb but maybe works
Integer[] nextInGame(){
    if (curr == 0){
      curr++;
      return new Integer[] {2, 1, 500, 40}; 
    }else if (curr == 1){
      curr++;
      //println("finish counting");
      return new Integer[] {2, 1, 500, 180}; 
    } else if (curr == 2){
      curr++;
      return new Integer[] {1, 2, 300, 300};  
    } else if (curr == 3){
      curr++;
      return new Integer[] {1, 1, 500, 420};
    } else if (curr == 4){
      curr++;
      return  new Integer[] {2, 2, 710, 540};
    } else if (curr == 5){
      curr++;
      return  new Integer[] {1, 1, 800, 720};
    } else if (curr == 6){
      curr++;
      return new Integer[] {2, 2, 320, 840};
    } else if (curr == 7){
      curr++;
      return new Integer[] {1, 1, 100, 1080};
    } else if (curr == 8){
      curr++;
      return new Integer[] {2, 1, 294, 1200}; 
    } else if (curr == 9){
      curr++;
      return new Integer[] {1, 2, 500, 1320};
    } else if (curr == 10){
      curr++;
      return  new Integer[] {2, 1, 600, 1500};
    } else if (curr == 11){
      curr++;
      return new Integer[] {1, 1, 700, 1680};
    } else if (curr == 12){
      curr++;
      return new Integer[] {2, 2, 150, 1860};
    } else if (curr == 13){
      curr++;
      return new Integer[] {2, 1, 200, 1980};
    } else if (curr == 14){
      curr++;
      return new Integer[] {1, 2, 100, 2100};
    } else if (curr == 15){
      curr++;
      return  new Integer[] {2, 1, 400, 2220};
    } else if (curr == 16){
      curr++;
      return new Integer[] {1, 2, 700, 2400};
    } else if (curr == 17){
      curr++;
      return new Integer[] {2, 1, 800, 2520};
    } else if (curr == 18){
      curr++;
      gamehasNext = false;
      return new Integer[] {1, 2, 200, 2700};
    } 
 }
    
//////// TO GET Text to Display and Fade ///////////////
String tvar = " ";
PFont fontA;
final int DISPLAY_TIME = 2000;
float alphaVal = 255;
int rate = 30;
float decrement = 2*255.0*rate/DISPLAY_TIME;

/////////////////////////// KMDJavaCode ///////////////////
/////------ KMDJ Global Initializations ----------/////
var ctx;
PImage img;
int i,j;
int nb=20;
int currframe = -1;
ArrayList<Integer> queueX = new ArrayList(); 
ArrayList<Integer> queueY = new ArrayList();
Integer[] directions; 
int LorR; int linetype; int windowSpan; int duration;
  
/////------ KMDJ Setup Local Initializations ------/////
void setup(){
  size(1400,600);
  ctx = externals.context;
  //ellipseMode(CORNER);
  smooth();
  background(0);
  frameRate(rate);
  fontA = loadFont("Silom-30.vlw");
  textFont(fontA, 40);
}
               
/////------- KMDJ Execute Game Play ------/////
void draw(){
  //fill(video);
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
  background(255, 0); //BACK HERE
  noStroke();
  
  currframe += 1;
  ////println("Current Frame: "+ currframe);
  directions = cfCurrPlay(currframe);
  

        

  for(j=0; j<nb; j++){
    for(i=0;i<nb; i++){
      
      int color = img.get(i, j);
      fill(color);
      float vb = brightness(color);
      ////println("iterating through video");
      if (vb > brightestValue){
                brightestValue = vb; 
                brightestY = j*height/nb; 
                brightestX = i*width/nb;
             }
             
      //ellipse(i*width/nb, j*height/nb, width/nb, height/nb);
    }
  }
  ////println("Entered For Loop, calculating pixel placement...");


  stroke(200);
  strokeWeight(20);  // Beastly
        line(abs(700-int(windowSpan/2)), 580, abs(700-int(windowSpan/2)), 20);  
        line(abs(700+int(windowSpan/2)), 580, abs(700+int(windowSpan/2)), 20);
        

  

  noStroke();
  fill(255, 204, 0, 128); 
  ellipse(brightestX, brightestY, 50, 50);

  fill(255, 204, 0, alphaVal);
  if (curr==1){
      tvar = "Start!";
  }
  //println(curr+", "+tvar);
  text(tvar, 100.0, 100.0);
  alphaVal -= decrement;

  QueueAdd(brightestX, brightestY);
}


Integer[] cfCurrPlay(int framenum){ 
  boolean checking = true;
  
  if (framenum == 0){
  //println("Frame is: "+framenum);
      stepPlay();
    }
        
        

          while (checking){ 

            if (framenum < duration){
              ////println(framenum);
              checking = false;

            }else if (duration == framenum){
              stepPlay();
              //println("Called StepPlay from currPlay with framenum: " + framenum);
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
  //println("EnteredStepPlay");
        if (gamehasNext) { 
           dir =  (Integer[]) nextInGame();
            LorR = dir[0]; 
            linetype = dir[1]; 
            windowSpan = dir[2]; 
            duration = dir[3];   
          
            ArrayList<Integer> queueX = new ArrayList(); ArrayList<Integer> queueY = new ArrayList(); 
        }else{
         tvar = (String) score; 
        }
        //println("Game Play: { " +LorR + " "+ linetype + " "+ windowSpan + " " + duration + "}" );
        
      }
      
void QueueAdd(int x, int y){
        queueX.add(x); 
        queueY.add(y);
        
     }
  
  
////////////////
void checkQueue(ArrayList<Integer> qx, ArrayList<Integer> qy){
  //println("checking Queue ...");
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
          ////println("SLOPE: "+ slope);
          
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
          //println("R2: " + r2 + " " + sse + " " +  sst);
          
          //DISPLAY MESSAGE FOR LONG ENOUGH   
          boolean bDisplayMessage;
          int currentTime; int passed;
          //final int DISPLAY_DURATION = 3000; // 1s
          
          
          if (!isNaN(r2)){
            //R2 characterization
            bDisplayMessage = true;
            ////println(bDisplayMessage);
            
            if (r2>0.75){  
              ////println("LINE R2");
              if (linetype == 1){
                score += 200;
                  //println("LM +++++++++++++++");
                  tvar = "Line Matched! \n +200";
                  alphaVal = 255; 
                }else{
                  //println("LNQ +++++++++++++++");
                  tvar = "Not Quite";
                  alphaVal = 255;
                }
            }else{
              if (linetype == 2){
                  score += 100;
                  //println("CM +++++++++++++++");
                  tvar = "Curve Matched! \n +100";
                  alphaVal = 255;
              }else{
                //println("CNM +++++++++++++++");
                tvar = "Not Quite";
                alphaVal = 255;
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
