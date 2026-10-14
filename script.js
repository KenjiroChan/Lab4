const message = document.getElementById("message");
const clickCount = document.getElementByID("clickCount);
let count = 0

function pickOpinion(text, color){
  count++;
  message.textContent = text;
  document.body.style.backgroundColor = color;
  clickCount.textContent = "Choices made: " +count;
}

document.getElementById("option1").addEventListener("click", function(){
  pickOpinion("You think durian is nasty.", "#f8d7da");
});

document.getElementById("option2").addEventListener("click", function(){
  pickOpinion("You think durian is ok.", "#fff3cd");
});

document.getElementById("option3").addEventListener("click", function(){
  pickOpinion("You think durian is great.", "#d4edda");
});
