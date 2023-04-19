// buttons
let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorBtn = document.querySelector("#scissorBtn");
let resetBtn = document.querySelector("#resetBtn");

// events
rockBtn.addEventListener("click", rockFunction);
paperBtn.addEventListener("click", paperFunction);
scissorBtn.addEventListener("click", scissorFunction);
resetBtn.addEventListener("click", resetFunction);

// elements
let userChoice = document.querySelector("#userChoice");
let botChoice = document.querySelector("#botChoice");
let resultChoice = document.querySelector("#result");
let playerScore = document.querySelector("#playerScore");
let botScore = document.querySelector("#botScore");
let Rock = document.querySelector("#Rock");
let Paper = document.querySelector("#Paper");
let Scissor = document.querySelector("#Scissor");
let botRock = document.querySelector("#botRock");
let botPaper = document.querySelector("#botPaper");
let botScissor = document.querySelector("#botScissor");

let resultDisplay = document.querySelector("#resultDisplay");
let result = document.querySelector("#result");
let diplayHistory = document.querySelector("#diplayHistory")


var playerPoint = 0;
var botPoint = 0;

// diplay emojis
// Rock.classList.add('hide');
// Paper.classList.add('hide');
// Scissor.classList.add('hide');
// botRock.classList.add('hide');
// botPaper.classList.add('hide');
// botScissor.classList.add('hide');

function botSelect () {
    i = Math.floor(Math.random()*3);
    return i;
}

function rockFunction () {
    botSelect ();

    Rock.classList.add('hide');
    Paper.classList.add('hide');
    Scissor.classList.add('hide');
    botRock.classList.add('hide');
    botPaper.classList.add('hide');
    botScissor.classList.add('hide');

    let rockvsrock = document.createElement('div');
    let rockvspaper = document.createElement('div');
    let rockvsscissor = document.createElement('div');

    // history display
    rockvsrock.innerHTML = `<img src="assets/images/rock.gif"  width="25" height="25">`+ " Vs " + `<img class="botHis" src="assets/images/rock.gif"  width="25" height="25">`;
    rockvspaper.innerHTML = `<img src="assets/images/rock.gif"  width="25" height="25">`+ " Vs " + `<img src="assets/images/paper.gif"  width="25" height="25">`;
    rockvsscissor.innerHTML = `<img src="assets/images/rock.gif"  width="25" height="25">`+ " Vs "+ `<img src="assets/images/scissor.gif"  width="25" height="25">`;

    if (i == 0) {

        console.log("rock computer " + i);
        Rock.classList.remove('hide');
        result.innerHTML = "Tie";
        botRock.classList.remove('hide');
        diplayHistory.appendChild(rockvsrock);
    } else if (i == 1) {
        console.log("rock computer " + i);
        Rock.classList.remove('hide');
        result.innerHTML = "You Lose";
        botPaper.classList.remove('hide');
        botPoint = botPoint + 1;
        diplayHistory.appendChild(rockvspaper);
    } else if (i == 2) {
        console.log("rock computer " + i);
        Rock.classList.remove('hide');
        result.innerHTML = "You Win";
        botScissor.classList.remove('hide');
        playerPoint = playerPoint + 1;
        diplayHistory.appendChild(rockvsscissor);
    }  else {
    console.log("rock error");
    }
    playerScore.innerHTML = playerPoint;
    botScore.innerHTML = botPoint;
}

function paperFunction () {
    botSelect ();

    Rock.classList.add('hide');
    Paper.classList.add('hide');
    Scissor.classList.add('hide');
    botRock.classList.add('hide');
    botPaper.classList.add('hide');
    botScissor.classList.add('hide');

    let papervsrock = document.createElement('div');
    let papervspaper = document.createElement('div');
    let papervsscissor = document.createElement('div');

    // history display
    papervsrock.innerHTML = `<img class="userHis" src="assets/images/paper.gif"  width="25" height="25">`+ " Vs " + `<img class="botHis" src="assets/images/rock.gif"  width="25" height="25">`;
    papervspaper.innerHTML = `<img class="userHis" src="assets/images/paper.gif"  width="25" height="25">`+ " Vs " + `<img src="assets/images/paper.gif"  width="25" height="25">`;
    papervsscissor.innerHTML = `<img class="userHis" src="assets/images/paper.gif"  width="25" height="25">`+ " Vs " + `<img src="assets/images/scissor.gif"  width="25" height="25">`;
    
    if (i == 0) {
        console.log("paper computer " + i);
        Paper.classList.remove('hide');
        result.innerHTML = "You Win";
        botRock.classList.remove('hide');
        playerPoint = playerPoint + 1;
        diplayHistory.appendChild(papervsrock);
    } else if (i == 1) {
        console.log("paper computer " + i);
        Paper.classList.remove('hide');
        result.innerHTML = "Tie";
        botPaper.classList.remove('hide');
        diplayHistory.appendChild(papervspaper);
    } else if (i == 2) {
        console.log("paper computer " + i);
        Paper.classList.remove('hide');
        result.innerHTML = "You Lose";
        botScissor.classList.remove('hide');
        botPoint = botPoint + 1;
        diplayHistory.appendChild(papervsscissor);
    } else {
        console.log("error paper");
    }
    playerScore.innerHTML = playerPoint;
    botScore.innerHTML = botPoint;
}

function scissorFunction () {
    botSelect ();

    Rock.classList.add('hide');
    Paper.classList.add('hide');
    Scissor.classList.add('hide');
    botRock.classList.add('hide');
    botPaper.classList.add('hide');
    botScissor.classList.add('hide');

    let scissorvsrock = document.createElement('div');
    let scissorvspaper = document.createElement('div');
    let scissorvsscissor = document.createElement('div');

    // history display
    scissorvsrock.innerHTML = `<img class="userHis" src="assets/images/scissor.gif"  width="25" height="25">`+ " Vs " + `<img class="botHis" src="assets/images/rock.gif"  width="25" height="25">`;
    scissorvspaper.innerHTML = `<img class="userHis" src="assets/images/scissor.gif"  width="25" height="25">`+ " Vs " + `<img src="assets/images/paper.gif"  width="25" height="25">`;
    scissorvsscissor.innerHTML = `<img class="userHis" class="userHis" src="assets/images/scissor.gif"  width="25" height="25">`+ " Vs " + `<img src="assets/images/scissor.gif"  width="25" height="25">`;
    
    if (i == 0) {
        console.log("scissor computer " + i);
        Scissor.classList.remove('hide');
        result.innerHTML = "You Lose";
        botRock.classList.remove('hide');
        botPoint = botPoint + 1;
        diplayHistory.appendChild(scissorvsrock);
    } else if (i == 1) {
        console.log("scissor computer " + i);
        Scissor.classList.remove('hide');
        result.innerHTML = "You Win";
        botPaper.classList.remove('hide');
        playerPoint = playerPoint + 1;
        diplayHistory.appendChild(scissorvspaper);
    } else if (i == 2) {
        console.log("scissor computer " + i);
        Scissor.classList.remove('hide');
        result.innerHTML = "Tie";
        botScissor.classList.remove('hide');
        diplayHistory.appendChild(scissorvsscissor);

    } else {
        console.log("error paper");
    }
    playerScore.innerHTML = playerPoint;
    botScore.innerHTML = botPoint;
}

function resetFunction () {
    playerScore.innerHTML = 0;
    botScore.innerHTML = 0;

    // let scissorvsrock = document.createElement('div');
    // let scissorvspaper = document.createElement('div');
    // let scissorvsscissor = document.createElement('div');

    // scissorvsrock.reset();
    // scissorvspaper.reset();
    // scissorvsscissor.reset();

    // diplayHistory.removeChild(scissorvsrock);
    // diplayHistory.removeChild(scissorvspaper);
    // diplayHistory.removeChild(scissorvsscissor);

    document.querySelector("#resetField").reset();
}
