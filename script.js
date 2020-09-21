let counter = 0;
function rps(yourChoice) {
  if (counter < 3) {
    let uchoice, bchoice, result;
    uchoice = yourChoice.id;
    console.log(`uchoice is :${uchoice}`);
    bchoice = randInt();
    console.log(`bchoice is :${bchoice}`);
    result = chooseWinner(uchoice, bchoice);
    console.log(`${result}`);
    counter++;
    messageSet(result);
  } else {
    resetAll();
  }
}
function randInt() {
  return ["rock", "paper", "scissor"][Math.floor(Math.random() * 3)];
}

function chooseWinner(userChoice, bchoice) {
  var rpsdatabase = {
    rock: { scissor: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissor: 0 },
    scissor: { rock: 0, paper: 1, scissor: 0.5 },
  };

  var yourScore = rpsdatabase[userChoice][bchoice];
  var bscore = rpsdatabase[bchoice][userChoice];
  //console.log(yourScore);
  return [yourScore, bscore];
}

function messageSet(result) {
    let prow = "prow"+counter;
    let crow =  "crow"+counter;
    //console.log(`prow is this ${prow}`);
    let pres,cres;
    if(result[0]===0){
        pres="L";
    }
    else if(result[0]===0.5){
        pres="T";
    }
    else{
        pres="W";
    }

    if(result[1]===0){
        cres="L";
    }
    else if(result[1]===0.5){
        cres="T";
    }
    else{
        cres="W";
    }




    document.getElementById(prow).innerHTML=pres;
    document.getElementById(crow).innerHTML=cres;
}

function resetAll() {
  counter = 0;
  console.clear();
  document.getElementById("prow1").innerHTML="";
  document.getElementById("crow1").innerHTML="";
  document.getElementById("prow2").innerHTML="";
  document.getElementById("crow2").innerHTML="";
  document.getElementById("prow3").innerHTML="";
  document.getElementById("crow3").innerHTML="";
}
