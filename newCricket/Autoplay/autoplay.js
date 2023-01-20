// var hit = document.getElementById('hit');
// const myInterval = setInterval(hit,1000);
// const name="Shashank";
// function autoplay(){
//     myInterval();
// }
// function stopAutoplay(){
//     clearInterval(myInterval);
// }
var play;
function mainAutoplay(){
    play=setInterval(function() {document.getElementById("hit").click();}, 2000);
}
function autoplayfun() { 
    mainAutoplay();
  } 
  
  function stopAutoplay() { 
    // setInterval(function() {document.getElementById("hit").click();}, 2000); 
    clearInterval(play);
  }