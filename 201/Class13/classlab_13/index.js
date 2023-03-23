function Cat (name,age){
    this.name = name
    this.age = age
}
//  let catsFromLocalStorage = localStorage.getItem("cats")
let person = {name: "Rays", age:20}
person = JSON.stringify(person)
localStorage.setItem("person", person)
console.log(localStorage.person)


// let personString = localStorage.person

// // converting back to object
// let personString = localStorage.person
// let personObject = JSON.parse(personString)