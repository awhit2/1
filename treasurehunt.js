//Treasure Hunt Game JS
//make an alert so I know this page is connected
//alert("this page is connected")

//Randomizes the location of the rainbow and bomb
var rainbow = Math.floor(Math.random() * 8)
var bomb = Math.floor(Math.random() * 8)
//checks if the locations of the bomb and rainbow are the same, if they are, re-randomize bombs position
if(rainbow === bomb){
  bomb = Math.floor(Math.random() * 8)
}
//creating a function that takes in a <td>
//and turns that <td>'s inner HTML into an emoji
const treasure = (id) => {

  if(id === rainbow){
    alert("You found the rainbow treasure! You win!! Press the Restart button to play again.")
    return document.getElementById(id).innerHTML = "&#x1f308"
  }
  else if (id === bomb){
    alert("You found a bomb, you lose! Play again.")
    return document.getElementById(id).innerHTML = "&#x2620"
  }
  else{
    return document.getElementById(id).innerHTML = "&#x1f332"
    //return alert("Keep searching for treasure!")
  }
  //alert("Game is Over")
}
//console.log(rainbow)
//console.log(bomb)
