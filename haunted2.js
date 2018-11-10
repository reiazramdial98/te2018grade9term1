

const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "fists",
  item: "flashlight",
};

console.log();
console.log("*** WELCOME TO THE HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stand in front of a house.`);
console.log(`${player.name} hear sounds coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "yes" ) {
  player.courage++;
  console.log(`${player.name} prepares his ${player.weapon} and opens the door...`);
    // continue the story
    
  console.log("you walk in the house, and...it looks so nice inside!");

 console.log( "There is a chandelier, and a bear rug, and two sets of stairs...but, it feels weird. You walk further into the house and up the stairs.");
 console.log( "you see an illuminated room and a shadow, making groaning noises...any way, ");
  console.log("you go around the house to look for supplies, and you find an apple, a sword, and a poison gem stone. As you're ");
  console.log("walking through the house, the groaning noises become louder and you hear scattered footsteps. The zombies are near!");

  //console.log(will you fight or hide?)and th 
  let fightHide = READLINE.question("Will you fight or hide?");
  if( fightHide == "fight" ){
  player.strength++;
  console.log("you have chosen to fight! You grab your sword and start slicing at the zombies' heads. You then pick up your gem,");
  console.log("and place on the floor. Everything that touched the gem immediatelty rotted and died. You have beaten THE HOUSE, omedeto!");

  }

  else if ( fightHide == "hide" ){


    console.log("You run and hide in the nearest closest and dont come out")

  }
}
 else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However, your friend comes and makes you go into the house.
    You walk into the house and you're terrified, but the inside actually looks really nice. You then hear groaning and
    growling noises; the zombies are here! You run and hide in the nearest closest and dont come out.`);

}
console.log("Thanks for playing!");
