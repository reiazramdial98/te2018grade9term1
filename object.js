function character(name){

this.name = name;
this.weapon;
this.skills;
this.job = true;
this.getInfo = getCharacter;
}

function getCharacter(){

return this.name + " " + this. weapon + " " + this.skills + " " + this.job;

}

let leo = new character("Leo Smith");
leo.weapon = "shotgun"
leo.job = true;
leo.skills = "leader";

console.log(leo.getInfo());
 
let animal = {isPredator: true, firstName: "theo", gender: "male", age: 3, eyeColor: 'hazel'
}
 console.log(animal.firstName + animal.eyeColor)
