function questionSeason() {
let questionOne = prompt("What's your favorite season?")
    if (questionOne != null) {
        document.getElementById("demo").innerHTML = "I really like " + questionOne + " too!";
    }
}
function questionFlower() {
    let favFlower = prompt("What's your favorite tree?");
    if (favFlower != null) {
      document.getElementById("demo").innerHTML =
      favFlower + ", looks so pretty when they bloom!";
  }
}
  function questionTree() {
    let favFruit = prompt("What's your favorite tree?");
    if (favFruit != null) {
      document.getElementById("demo").innerHTML =
      favFruit + ", look so lovely!";
    }
  }

  function questionFruit() {
    let favFruit = prompt("What's your favorite fruit?");
    if (favFruit != null) {
      document.getElementById("demo").innerHTML =
      favFruit + ", are delicious! They're my favorite too!";
    }
  }

  function questionVeggie() {
    let favVeggie = prompt("What's your favorite veggie?");
    if (favVeggie != null) {
      document.getElementById("demo").innerHTML =
      favVeggie + ", sounds yummy!";
    }
  }