// Write your JavaScript code here.
// Remember to pay attention to page loading!
// 
let liftOff = null;
let land = null;
let missionAborted = null;
let flightStatus= null;
let shuttleBackground=null;
let spaceShuttleHeight= null;
let rocketMove= null;
let leftClicker= null;
let rightClicker= null;
let upClicker= null;
let downClicker=null;



function init () {
    liftoff = document.getElementById("takeoff");
    land = document.getElementById("landing");
    missionAborted = document.getElementById("missionAbort");
    flightStatus= document.getElementById("flightStatus");
    shuttleBackground= document.getElementById("shuttleBackground");
    spaceShuttleHeight= document.getElementById("spaceShuttleHeight")
    rocketMove= document.getElementById("rocket");
    leftClicker= document.getElementById("left");
    rightClicker= document.getElementById("right");
    upClicker= document.getElementById("up");
    downClicker= document.getElementById("down");
    // Put your code for the exercises here.
    liftoff.addEventListener("click", liftingOff);
    land.addEventListener("click", landShuttle);
    missionAborted.addEventListener("click", abortShuttle);
    leftClicker.addEventListener("click",leftClick);
    rightClicker.addEventListener("click",rightClick);
    upClicker.addEventListener("click", upClick);
    downClicker.addEventListener("click", downCLick);
    
    
}


    function liftingOff() {
    let result= window.confirm("Confirm that the shuttle is ready for takeoff.");
    if(result===true) {
        flightStatus.innerHTML= "Shuttle is in flight!"
        shuttleBackground.style.backgroundColor= '#0000FF';
        spaceShuttleHeight.innerHTML= +10000;

  
}
    }

function landShuttle() {
     window.alert("The shuttle is landing. Landing gear engaged.");
     flightStatus.innerHTML= "The shuttle has landed."
     shuttleBackground.style.backgroundColor= 'green';
     spaceShuttleHeight.innerHTML= 0;
}
function abortShuttle() {
    let result= window.confirm("Confirm that you want to abort the mission.")
    if(result===true) {
        flightStatus.innerHTML= "Mission aborted.";
        shuttleBackground.style.backgroundColor= 'green';
        spaceShuttleHeight.innerHTML= 0;
    }
}

function leftClick() {
    rocketMove.style.position= 'relative';
    rocketMove.style.left+='-10px';
}

function rightClick() {
    rocketMove.style.position= 'relative';
    rocketMove.style.left+='10px';
}

function upClick() {
    rocketMove.style.position= 'relative';
    rocketMove.style.top += '-10px';
    spaceShuttleHeight.innerHTML= +10000;
}

function downCLick() {
    rocketMove.style.position= 'relative';
    rocketMove.style.top += '10px';
    spaceShuttleHeight.innerHTML= -10000;
}
    


window.onload=init;