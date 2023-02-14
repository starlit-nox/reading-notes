function userName (){
    let thisName = prompt("What is your name?");

    let secondName = "";

    if(thisName != secondName){
        prompt("Please re-enter name!");
        secondName = prompt("Please re-enter name!");
    }
    else{
        alert('Hello ${thisName}!');
    }
}


function  TryAgain(){
    let secondName = "";
    let myName = prompt("What is your name?");
    while(myName != secondName){
        secondName = prompt(`${myName} doesn't match our record, please try again ${5+5}`);
    }
    alert(`Hello there $[secondName]`)
    }
