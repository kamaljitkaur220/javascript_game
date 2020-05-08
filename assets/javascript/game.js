//team shot 1
let teamonebutton1 = document.querySelector("#teamone-shoot-button"); 
let team1shots = document.querySelector("#teamone-numshots"); 
let team1goals = document.querySelector("#teamone-numgoals"); 

//team shot 2
let teamtwobutton2 = document.querySelector("#teamtwo-shoot-button"); 
let team2shots = document.querySelector("#teamtwo-numshots"); 
let team2goals = document.querySelector("#teamtwo-numgoals"); 


//reset button
let resetbutton=document.querySelector("#reset-button");
let numresets =document.querySelector("#num-resets");


//sound
let playSound=function(){
    audio.play();
}


//teambutton 1

teamonebutton1.addEventListener("click", function() {
    let newCounterValue1 = Number(team1shots.innerHTML) + 1;
    team1shots.innerHTML = newCounterValue1;
    let team1 =math.floor(math.random() *100)+1;
    console.log("Team one Shots");
    if (team1 >= 50)
    {
      let newCounterValue2 =Number(team1goals.innerHTML) + 1;
      team1goals.innerHTML = newCounterValue2;
      console.log("Team one Score")
    }
});


//team button 2

teamtwobutton2.addEventListener("click", function() {
    let newCounterValue3 = Number(team2shots.innerHTML) + 1;
    team2shots.innerHTML = newCounterValue3;
    let team2 = Math.floor(Math.random() *100) +1;
    console.log("team 2 shots");
    if (team2  >= 40){
        let newCounterValue4 = Number(team2goals.innerHTML)+1;
    team2goals.innerHTML = newCounterValue4;

    }
})

//reset button
    resetbutton.addEventListener("click",function(){
        let resetcount =Number(numresets.innerHTML)+1;
        numresets.innerHTML =resetcount;
        team1goals.innerHTML ="0";
        team1shots.innerHTML ="0";
        team2goals.innerHTML ="0";
        team2shots.innerHTML ="0";
    })

///sound button 1
teamonebutton1.addEventListener('click',playSound, true);
teamtwobutton2.addEventListener('click',playSound, true);
    

   //display win message
function showMessage(resetbutton){			
    if(resetbutton=="reset-button")
        alert("Winner Team is one");
}