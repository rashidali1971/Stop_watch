
var min = 0; var sec = 0; var msec = 0; 
var hmin = document.getElementById("min"); 
var hsec = document.getElementById("sec"); 
var hmsec = document.getElementById("msec"); 
var interval; 
document.getElementById("stop_btn").disabled = true;
function timer(){
 msec++;
 hmsec.innerHTML = msec; 
if(msec >= 100) { sec++; hsec.innerHTML = sec; msec = 0; } 
else if(sec >= 60){ min++; hmin.innerHTML = min; sec = 0; } }
 function start(){
    
    document.getElementById("start_btn").disabled = true;
    document.getElementById("stop_btn").disabled = false;
  
  
 interval = setInterval(timer,10); 
 } 
function stop(){   
    document.getElementById("stop_btn").disabled = true;
    document.getElementById("start_btn").disabled = false;
   
    clearInterval(interval);  } 
function reset(){ 
    min = 0; 
    sec = 0; 
    msec = 0; 
    hmin.innerHTML = min; 
    hsec.innerHTML = sec; 
    hmsec.innerHTML = msec; 
    clearInterval(interval); } 

