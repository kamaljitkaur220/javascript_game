//team shot 1
let teamonebutton1 = document.querySelector("#teamone-shoot-button"); 
let team1shots = document.querySelector("#teamone-numshots"); 
let team1goals = document.querySelector("#teamone-numgoals"); 
let resetbutton=document.querySelector("#reset-button");
let colorBox = document.querySelector("#color-box");




teamonebutton1.addEventListener("click", function() {
    console.log("+ button clicked");
    let newCounterValue = Number(team1shots.innerHTML) + 2;
    
    team1shots.innerHTML = newCounterValue;
    
});

teamonebutton1.addEventListener("click", function() {
    console.log("+ button clicked");
    let newCounterValue2 = Number(team1goals.innerHTML)+1;

    
    team1goals.innerHTML = newCounterValue2;

}) 







//team shot 2



let teamtwobutton2 = document.querySelector("#teamtwo-shoot-button"); 
let team2shots = document.querySelector("#teamtwo-numshots"); 
let team2goals = document.querySelector("#teamtwo-numgoals"); 
let numresets =document.querySelector("#num-resets")
teamtwobutton2.addEventListener("click", function() {
    console.log("+ button clicked");
    let newCounterValue3 = Number(team2shots.innerHTML) + 3;
    
    
    team2shots.innerHTML = newCounterValue3;
})

teamtwobutton2.addEventListener("click", function() {
    console.log("+ button clicked");
    let newCounterValue4 = Number(team2goals.innerHTML)+1;
    team2goals.innerHTML = newCounterValue4;
})

//reset button

    resetbutton.addEventListener("click",function(){

        console.log("+ button clicked");
    
    let newresetshot1 =Number(team1shots.innerHTML)*0;
    

    team1shots.innerHTML = newresetshot1;
    
    })

    resetbutton.addEventListener("click",function(){

        console.log("+ button clicked");
    
    let newresetgoal1 =Number(team1goals.innerHTML)*0;
    

    team1goals.innerHTML = newresetgoal1;
    
    })

    resetbutton.addEventListener("click",function(){

        console.log("+ button clicked");
    
    let newresetshot2 =Number(team2shots.innerHTML)*0;
    

    team2shots.innerHTML = newresetshot2;
    
    })

    resetbutton.addEventListener("click",function(){

        console.log("+ button clicked");
    
    let newresetgoal2 =Number(team2goals.innerHTML)*0;
    

    team2goals.innerHTML = newresetgoal2;
    
    })

//number of reset  


resetbutton.addEventListener("click",function(){
    
  

    console.log("+ button clicked");
    
    let  numrests1 =Number(numresets.innerhtml) ^1;
    numresets.innerHTML = numrests1;
})




///sound button 1





let playSound=function(){
    audio.play();
}
teamonebutton1.addEventListener('click',playSound, true);
    
    
   //sound button 2


   let playSound2=function(){
    audio.play();
}
teamtwobutton2.addEventListener('click',playSound2, true);
   //display win message
function showMessage(resetbutton){			
    if(resetbutton=="reset-button")
        alert("Winner Team is one");
}