 const choices = document.querySelectorAll('.choice');
 const score = document.getElementById('score');
 const result = document.getElementById('result');
 const restart = document.getElementById('restart');
 const scoreboard = {
     player: 0,
     computer: 0

 };

 // Event listeners
 choices.forEach(choice => choice.addEventListener('click', play));
 restart.addEventListener('click', restartGame);




 //Play Game

 function play(e) {

     const playerChoice = e.target.id;
     const computerChoice = getComputerChoice();
     const winner = getWinner(playerChoice, computerChoice);
     showWinner(winner, computerChoice);




 }


 //Get computer choice

 function getComputerChoice() {
     let moves = ['rock', 'paper', 'scissor'];
     return moves[Math.floor(Math.random() * 3)]
 }


 //Get game Winner 

 function getWinner(playerChoice, computerChoice) {

     if (playerChoice === 'rock') {
         if (computerChoice === 'rock') {
             return 'tie';
         } else if (computerChoice === 'scissor') {
             return 'player';
         } else if (computerChoice === 'paper') {
             return 'computer';

         }

     } else if (playerChoice === 'paper') {
         if (computerChoice === 'rock') {
             return 'player';
         } else if (computerChoice === 'scissor') {
             return 'computer';
         } else if (computerChoice === 'paper') {
             return 'tie';
         }

     } else if (playerChoice === 'scissor') {
         if (computerChoice === 'rock') {
             return 'computer';
         } else if (computerChoice === 'scissor') {
             return 'tie';
         } else if (computerChoice === 'paper') {
             return 'player';

         }
     }
 }

 function showWinner(winner, computerChoice) {

     if (winner === 'player') {
         //Increment score player
         scoreboard.player++;
         result.innerHTML = `
         <h1> You win </h1>
         <p> Computer choose ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)} </p>
         `;

     } else if (winner === 'computer') {
         //Increment computer score
         scoreboard.computer++;
         result.innerHTML = `
         <h1> You loose </h1>
         <p> Computer choose ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)} </p>`;

     } else {
         result.innerHTML = `
         <h1> Its a draw </h1>
         <p> Computer choose ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)} </p>`;
     }

     score.innerHTML = `
     <p>Player Score:${scoreboard.player}</p>
     <p>Computer Score:${scoreboard.computer}</p>`
 }

 function restartGame() {
     scoreboard.player = 0;
     scoreboard.computer = 0;
     score.innerHTML = `
     <p>Player Score:0</p>
     <p>Computer Score:0</p>`;
 }