var i = 2;
let clicked= 0;
var cards = document.getElementsByClassName("card");
let secondElementName ="";
let firstElementName ="";
let previousTarget = null;
var userclicks = 0;
var btn = document.getElementById("btn");
var startAgain = document.getElementById("gameover");



$(btn).click(function(){
  $("#btn").remove();
  startAgain.style.display ="block";
  startGame();




});


const cardsArray = [{
    'name': 'first',
    'img': 'cards/0C.png',
  },
  {
    'name': 'second',
    'img': 'cards/0S.png',
  },
  {
    'name': 'third',
    'img': 'cards/0H.png',
  },
  {
    'name': 'fourth',
    'img': 'cards/0D.png',
  },
  {
    'name': 'fifth',
    'img': 'cards/2C.png',
  },
  {
    'name': 'six',
    'img': 'cards/5S.png',
  },
];
const CLICKS = document.getElementById("clicks");
const GAME = document.getElementById("game");
const OVER = document.getElementById("again");


var GRID = document.createElement("section");
GRID.setAttribute("class", "grid");

GAME.appendChild(GRID);

function againGame(){
window.location.reload();
}

function startGame(){
//
// startAgain.addEventListener("click", againGame());

  // var button = document.createElement("button");
  // button.setAttribute("id", "gameover");
  // OVER.appendChild(button);
  // button.innerHTML = "Start again";

while(i > 0){

  i--;
cardsArray.forEach(item =>{

  var card = document.createElement("div");

    card.classList.add('card');

    card.dataset.name = item.name;

    var img = document.createElement('img');
    card.appendChild(img);
    img.setAttribute("src", item.img)
    img.setAttribute("class", "pic")

    const FRONT = document.createElement('div');
    FRONT.classList.add('front');


    const BACK = document.createElement('div');
    BACK.classList.add("back");

    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  GRID.appendChild(card);
  card.appendChild(FRONT);
  card.appendChild(BACK);



  card.addEventListener("click", function(event){
let click = this;
let target = event.target;
          clicked++;


      if(clicked == 1){
        previousTarget = click;
        console.log(previousTarget)
        firstElementName = target.parentNode.dataset.name;
        console.log(firstElementName);
        card.classList.add("active");


      }
      if(clicked ==2){

          secondElementName = target.parentNode.dataset.name;
          console.log("second" + secondElementName);
            card.classList.add("active");

              check();



      }

      function check(){
        userclicks++;
        CLICKS.innerHTML = "Clicks: " + userclicks;


        if( click.nodeName === "SECTION" || click === previousTarget){
            setTimeout(clearAll, 1200);
        }
            if(firstElementName !=="" && secondElementName!==""){
            if(firstElementName === secondElementName){
              setTimeout(match, 1200);
           }
        }
          setTimeout(clearAll, 1200);

      }
});
});
}
}
function match(){
var selected = document.querySelectorAll(".active");
selected.forEach(card =>{
  card.classList.add("match");
  card.childNodes[1].classList.add("match");


});
}


function clearAll(){

  clicked = 0;
  console.log("clear");
  var card = document.getElementsByClassName('card');
  var cards =[...card]
  cards.forEach(item =>{
    item.classList.remove('active');
  }
);




}
