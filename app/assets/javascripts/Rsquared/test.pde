/ Tracks the brightest pixel in a live video signal
import processing.video.* ;

    Capture video;
    
    void setup(){ 
      
      size(720, 480); // Change size to 320 x 240 if too slow at 640 x 480 
      video = new Capture(this, width, height, 30); 
      noStroke(); 
      smooth();
      
     
    }

    ArrayList<String> queue = new ArrayList();
    String[] direction = {"UL", "UR", "DL", "DR"};
    String directionFound;
    
    ArrayList<Integer[]> demarcation1 = new ArrayList();
    ArrayList<Integer[]> demarcation2 = new ArrayList();
     
    int prev_brightestX = 0; // prev X-coordinate of the brightest video pixel 
    int prev_brightestY = 0; // prev Y-coordinate of the brightest video pixel 
    
    String movement = ""; //DL= 1, DR= 1, UL= 0, UR= 0 possible values
    String continuingDirection = "UR"; //Set early- requires 10 frames to clear 
    
    int diffDirUL = 0;    int diffDirUR = 0;    int diffDirDL = 0;    int diffDirDR = 0;
    
    Boolean compareDemarcations = false;
    Boolean span1 = true;
    Boolean start = true;
    Boolean ret = false;
    String currDir;
    int qCount = 0;
    int count = 0;
    
    void draw() { 
      if (video.available()) {
      video.read(); 
      image(video, 0, 0, width, height); // Draw the webcam video onto the screen
      if (count%30 == 0){
        //println(" " );
        println("count ============================================== " );
      }
      
      //print(count);

      count += 1;
      
      int brightestX = 0;	// X-coordinate of the brightest video pixel 
      int brightestY = 0;	// Y-coordinate of the brightest video pixel 
      float brightestValue = 0; // Brightness of the brightest video pixel
      
     // Search for the brightest pixel: For each row of pixels in the video image 
     //and for each pixel in the yth row, compute each pixel's index in the video 
     int d = 40;
      int p1 = d;
      int p2 = p1+d;
      int p3 = p2+d;
      int p4 = p3+d;
      
     // Draw gray box
      stroke(200);
      line(p3, p3, p2, p3);
      line(p2, p3, p2, p2);
     
      video.loadPixels();
      
      int index = 0;
      for (int y = 0; y < video.height; y++) {
        for (int x = 0; x < video.width; x++) {
           // Get the color stored in the pixel
           int pixelValue = video.pixels[index];
           // Determine the brightness of the pixel
           float pixelBrightness = brightness(pixelValue);
           // If that value is brighter than any previous, then store the 
           // brightness of that pixel, as well as its (x,y) location 
           if (pixelBrightness > brightestValue){
              brightestValue = pixelBrightness; 
              brightestY = y; 
              brightestX = x;
           }
           index++;
        }
      }
      
      // Draw a large, yellow circle at the brightest pixel
      fill(255, 204, 0, 128); ellipse(brightestX, brightestY, 50, 50);
      //print("[" + brightestX); print(", " + brightestY + "]; ");
      //print("BP@: " + brightestX); print(" " + brightestY); //println(" ");
      Integer[] coords = {brightestX, brightestY};
      
      
      if (span1){
        if (ret == true){
          ////println("DEMARCATION #1 " + demarcation1); 
          ////println("DEMARCATION #2 " + demarcation2);
        }
        demarcation1.add(coords); 
      }else{
        demarcation2.add(coords);
        ret = true;
      }
      
      // Determine the direction of the flashlight movement
      if (prev_brightestX - brightestX > 0){
        if (prev_brightestY - brightestY > 0){
          movement = "DL";
          queue.add(movement);
          println("       " +movement);
          ////println("PREV X "+ (prev_brightestX - brightestX) + " & PREV Y " + (prev_brightestY - brightestY) +"   " + movement);
        }else{
          movement= "UL";
          queue.add(movement);
          println("       " +movement);
          ////println("PREV X "+ (prev_brightestX - brightestX) + " & PREV Y " + (prev_brightestY - brightestY) +"   " + movement);
        }
      } else{
         if (prev_brightestY - brightestY > 0){
           movement = "DR";
           queue.add(movement);
           println("       " +movement);
           ////println("PREV X "+ (prev_brightestX - brightestX) + " & PREV Y " + (prev_brightestY - brightestY) +"   " + movement);
         }else{
           movement = "UR";
           queue.add(movement);
           ////println("PREV X "+ (prev_brightestX - brightestX) + " & PREV Y " + (prev_brightestY - brightestY) +"   " + movement);
           println("       " +movement);
         }
       }
      
      
      prev_brightestX = brightestX; prev_brightestY = brightestY;
      
      
     if (queue.size() == 5){ 
       int ul_count = 0; int ur_count = 0; 
       int dr_count = 0; int dl_count = 0;
       
       for (int dir= 0; dir< 5; dir++){
         
         if (queue.get(dir) == "UL"){
             ul_count += 1;
           }
          if (queue.get(dir) == "UR"){
             ur_count += 1;
           }
          if (queue.get(dir) == "DL"){
             dl_count += 1;
           }
          if (queue.get(dir) == "DR"){
             dr_count += 1;
           }
         }
   
       queue = new ArrayList(); //RESET
       int[] countList = {ul_count, ur_count, dl_count, dr_count}; //PARAMETER|| FOR SOME Reason this is all really UR heavy try this
       int maxCount = max(countList);
       
           
      for (int i=0; i<4; i++){
             if (countList[i] == maxCount){
                String directionFound = direction[i]; 
                //print( "----------- AVERAGE    " + directionFound);
             }
           }
           
      if (directionFound != continuingDirection){
        
        if (directionFound == "UL"){
          diffDirUL += 1;
        }else if (directionFound == "UR"){
          diffDirUR += 1;
        }else if (directionFound == "DL"){
          diffDirDL += 1;
        }else if (directionFound == "DR"){
          diffDirDR += 1;
        }
        
        int[] diffDirMsr = {diffDirUL, diffDirUR, diffDirDL, diffDirDR};
        
        if (max(diffDirMsr) == 2){ 
          //This might need to be modified so that, instead of waiting for 5 
          diffDirUL = 0;    diffDirUR = 0;    diffDirDL = 0;    diffDirDR = 0;
          
          span1 = !span1;
          continuingDirection = directionFound;    
          } 
      } 
      
    }
      
      
      
      
    }
    
    
    
    
  }