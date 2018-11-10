const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "frying pan",
  item: "flashlight",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  console.log(`${player.name} is entering the house and is faced with 3 doors  `);
let enterDoor =READLINE.question("choose a door 1,2,3 ?");
if(enterDoor == "1" ){
console.log(`you will now have infinite life`);
}
if(enterDoor == "2"){
console.log(`You will now be tortured for the rest of your life`);
}
if(enterDoor == "3"){
console.log(`You will now be to go home SPEAK NOTHING OF THIS`);
}
  
} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
  console.log(`${player.name} is confronted with another door... Will you open the door`);
  let door =READLINE.question("Do you want to open the door? yes or no");
  if(door == "yes"){

    console.log("You found a frying pan... Good luck you'll need it");
  console.







console.log("Thanks for playing!");
}

