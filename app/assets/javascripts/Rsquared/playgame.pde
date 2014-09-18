import processing.video.* ;
import java.util.Arrays;
import java.util.Iterator;

//import DurationManager;
    Capture video;
    PFont fontA;
    int currframe = -1;
    
    //Initialize Game
    PlayGame game = new PlayGame();
    
//    ArrayList<Integer> queueX = new ArrayList(); ArrayList<Integer> queueY = new ArrayList();
      
    void setup(){          
      size(720, 480); // Change size to 320 x 240 if too slow at 640 x 480 
      video = new Capture(this, width, height, 30);
      //game.stepPlay();
      
      noStroke(); 
      smooth();
      
      fontA = loadFont("HemiHeadRg-BoldItalic-40.vlw");
      // Set the font and its size (in units of pixels)
      textFont(fontA, 40);
      
//      while(true){
//    System.out.println("PRINTING OUT - - -- - - - ");
//    }

    }
    
    void draw() { 

      //Initialize Variables
      int atindex = 0;
      Integer[] directions;
      int brightestX = 0;  // X-coordinate of the brightest video pixel 
      int brightestY = 0;  // Y-coordinate of the brightest video pixel 
      float brightestValue = 0; // Brightness of the brightest video pixel
       
      //Initialize Tuple Values
      int LorR; int linetype; int windowSpan;

      if (video.available()) {
        video.read(); 
        image(video, 0, 0, width, height); // Draw the webcam video onto the screen
        currframe += 1;
        //println("CURRENT FRAME IS: " + currframe);
        video.loadPixels(); // Load all pixels from this single frame
        
          //println("Current Frame Num: " +currframe);
          directions = game.cfCurrPlay(currframe); //Picks the Duration/span that should exist (INEFFICINENT)
                                               //direction, linetype, windowSpan, Duration
          LorR = directions[0]; linetype = directions[1]; windowSpan = directions[2];
          println("NEW DIRECTIONS: " + LorR + " " + linetype + " " + windowSpan);
          
        //println("Create Lines: " + LorR + " " + linetype + " " + windowSpan);
        strokeWeight(300);  // Beastly
        line(abs(360-int(windowSpan/2)), 480, abs(360-int(windowSpan/2)), 20);  
        line(abs(360+int(windowSpan/2)), 480, abs(360+int(windowSpan/2)), 20);

              
        int index = 0;
        for (int y = 0; y < video.height; y++) {
          for (int x = 0; x < video.width; x++) {           
             int pixelValue = video.pixels[index];
             float pixelBrightness = brightness(pixelValue);
             if (pixelBrightness > brightestValue){
                brightestValue = pixelBrightness; 
                brightestY = y; 
                brightestX = x;
             }
             index++;
          }
        }
        
        game.QueueAdd(brightestX, brightestY);

        // Draw a large, yellow circle at the brightest pixel
        fill(255, 204, 0, 128); ellipse(brightestX, brightestY, 100, 100);
      






      }
    }
      
   
   
   
   ////////////////////////////////
   
   
   
   
   
   class PlayGame{
     //GLOBAL VARIABLES 
      boolean checking = true;      //Arrays.asList
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
        new Integer[] {2, 2, 200, 150}, new Integer[] {1, 1, 50, 165})); //direction, linetype, windowSpan, Duration
        ArrayList<Integer> queueX = new ArrayList(); ArrayList<Integer> queueY = new ArrayList();
      
      Integer[] dir;
      Integer direction; Integer linetype; 
      Integer wspan; Integer duration;  

      Iterator iterLT = LevelTuples.iterator(); int startFrame = 0;
//      Integer[] queueX = {}; Integer[] queueY = {}; 
        
      void stepPlay(){
        println(" ");
        println("Game Play Stepped Internal");
        println("Game Play Stepped Internal");
        println("Game Play Stepped Internal");
        println("Game Play Stepped Internal");
        println(" ");
        
        if (iterLT.hasNext()) { 
           dir =  (Integer[])iterLT.next();
          direction = dir[0]; 
          linetype = dir[1]; 
          wspan = dir[2]; 
          duration = dir[3];   
         
//          Integer[] queueX = {}; Integer[] queueY = {}; 
          ArrayList<Integer> queueX = new ArrayList(); ArrayList<Integer> queueY = new ArrayList(); 
        }
      }
        
      
     Integer[] cfCurrPlay(int framenum){ 
       //Current Frame Current Play-
       //CHECKS for Current Duration, RETURNS the current game play tuple,
       //CHECKS the play of the player by calling checkQueue
       //Integer[] tup = LevelTuples.iterator().next(); //This can be made more efficient
        if (framenum == 0){
          game.stepPlay();
        }
        
        checking = true;
        print("FN: " + framenum + "  ");
        
//        if (framenum != 131){
          while (checking){ 
            //int cd = duration;
            //println("IN WHILE LOOP " + framenum + " " + cd); 
            println("DURATION: "+ duration);
            if (framenum-100 < duration){
              checking = false;
              println("FN< Duration, next frame: " + framenum + " " + duration);
  //          }else if (duration < framenum-100){
  //            println("FN LESS THAN duration: " + framenum + " " + duration);
  //            continue;
            }else if (duration == framenum-100){
              //tup = LevelTuples.iterator().next();
              println(" ");
              println("Game Play Stepped! Checking QUEUE... ");
              
              this.stepPlay();
              startFrame = framenum;
              this.checkQueue(queueX, queueY);
              checking = false;
            }else{
            checking = false;    
          }
        }
//      }
     
     println("DIRECTIONS RETURNED: "+  dir[0] + " " + dir[1] + " " + dir[2]);
     println(" ");
     return dir;
     
     }
     
     void QueueAdd(int x, int y){
       //println("Finding Brightest Pixel: " + x + " " + y);
        queueX.add(x); 
        queueY.add(y);
     }
          
      void checkQueue(ArrayList<Integer> qx, ArrayList<Integer> qy){
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
          
          //each sum returned is a float. This enables the correct division
          sumX = sumAL(qx, n); sumY = sumAL(qy, n); sumXY = sumIL(xy, n); sumX2 = sumIL(x2, n);
          
          numerator = n*sumXY - sumX*sumY; 
          denominator = n*sumX2 - sumX*sumX;
          
          slope = numerator/denominator; 
          println("SLOPE: "+ slope);
          
          //findIntercept| b  = Mean(y) - m Mean(x)
          if (!Float.isNaN(slope)){
            intercept = sumY/n - slope*sumX/n;
          }
  
          
          //Compute R2 
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
      
          if (!Float.isNaN(r2)){
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
   }

