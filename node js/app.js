const person = {
  fname: "ahmed",
  lname: "hossam" , 
  age: "20",
  city:"alex"
}
/////////////////////
const personJson = JSON.stringify(person)
 console.log(personJson)
/////////////////
 const fs = require("fs")
fs.writeFileSync("data.json" , personJson)
//////////////////////////
console.log(fs.readFileSync("data.json").toString())
/////////////////////////////////////
const personObj = JSON.parse(personJson)
console.log(personObj)
////////////
personObj.fname = "adel"
personObj.lname = "ahmed"
personObj.age = "40"
personObj.city = "cairo"
console.log(personObj)
//////////////////////
const personJson1 = JSON.stringify(personObj)
 console.log(personJson1)
 /////////////////////
 const updatedPersonJson = JSON.stringify(personObj)
fs.writeFileSync("data.json", updatedPersonJson)