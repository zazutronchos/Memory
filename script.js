const IMG_INITIAL = "./Public/";
const CARDS=["1.jpg","1.jpg","2.jpg","2.jpg","3.jpg","3.jpg","4.jpg","4.jpg","5.jpg","5.jpg","6.jpg","6.jpg"];
let anyFlipped=false;
let flippedCard;
let rightGuess=0;
let turns=0;
let showTurns = document.getElementById('turnos');
let showRightGuess = document.getElementById('aciertos');

function flipCard(position){
   let currentPosition = "pos" + position;
   let imgCard = document.getElementById(currentPosition).getAttribute("src");
  
   if (imgCard === './Public/Reves.jpg') {
      turns++;
      showTurns.innerHTML = `Turno:${turns}`;
      let imgPath = IMG_INITIAL + CARDS[position];
      document.getElementById(currentPosition).setAttribute("src",imgPath);
      if (!anyFlipped) {
         anyFlipped = true;
         flippedCard = position;
      }
      else {
         if (CARDS[flippedCard]===CARDS[position]) {
            rightGuess++;
            showRightGuess.innerHTML = `Aciertos:${rightGuess}`;
            setTimeout(() =>{
            if(rightGuess==6){
               window.alert("Has Ganado");
               document.location.reload(true);
            }
            },500);
         }
         else {
            setTimeout(() =>{
               document.getElementById(currentPosition).setAttribute("src",'./Public/Reves.jpg');
               let oldPosition = "pos" + flippedCard;
               document.getElementById(oldPosition).setAttribute("src",'./Public/Reves.jpg');
            },1000);
         }
         anyFlipped = false;
      }
   }
}
  
function shuffleCards() {
   for (let i=CARDS.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = CARDS[i];
      CARDS[i] = CARDS[randomIndex];
      CARDS[randomIndex] = temp;
   }
}

shuffleCards();
//console.log(CARDS);
document.getElementById("buttonStart").addEventListener("click", () => document.location.reload(true));

for (let i=0; i<12; i++){
   let currentPosition = "pos" + i;
   document.getElementById(currentPosition).addEventListener("click", () => flipCard(i));
}





