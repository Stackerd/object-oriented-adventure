// please comment out each section to see that it runs
// part three I could not get to work, but wanted to turn this in

//Part 1: Humble Beginnings
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"]
        }
    },
    // this is the method for the dice roll
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}`)
    }
}
console.log(adventurer.inventory[0]);

function getInventory(adventurer) {
    return adventurer.inventory;
};
adventurer.roll();

console.log(getInventory(adventurer));



// Part 2 Class Fantasy

// class Character {
//     constructor(name) {
//         this.name = name;
//         this.health = 100;
//         this.inventory = [];

//     }

//     roll(mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}`)
//     }

// }


// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank")
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// robin.roll();
// robin.companion.roll();
// robin.companion.companion.roll();

// Part 3: Class Features

// class Adventurer {
//     constructor(name, inventory = []) {
//         this.name = name;
//         this.inventory = inventory;

//     }
//     roll(mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}`)
//     }
// }

// class Character extends Adventurer {
//     static Max_Health = 100;
//     constructor(name) {
//         this.name = name;
//         this.inventory = [];
//         this.health = Character.Max_Health;


//     }

//     roll(mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}`)
//     }

// }

// class Character {
//     static MAX_HEALTH = 100;

//     constructor(name) {
//         this.health = Character.MAX_HEALTH
//         this.name = name;
//     }
// }
// class Adventurer extends Character {
//     constructor(name, role) {
//         super(name);
//         //Adventurers have specialized roles.
//         this.role = role;
//         // Every adventurer starts with a bed and 50 gold coins.
//         this.inventory.push("bedroll", "50 gold coins");
        
//     }
//     // Adventurers have the ability to scout ahead of them.
//     scout() {
//         console.log(` ${this.name} is scouting ahead ...`);
//         super.roll();
//         }
//         roll(mod = 0) {
//             const result = Math.floor(Math.random() * 20) + 1 + mod;
//             console.log(`${this.name} rolled a ${result}`)
//         }
// }

// class Companion {
//     constructor(name, role, inventory = []) {
//         this.name = name;
//         this.role = role;
//         this.inventory = inventory;

//     }
//     roll(mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}`)
//     }
// }
// const robin = new Adventurer("Robin", ["sword", "potion", "artifact"]);
// const leo = new Companion("Leo", "cat");
// const frank = new Companion("Frank", "flea", ["small hat", "sunglasses"]);

// robin.roll();
// leo.roll();
// frank.roll();

// console.log(robin);
// console.log(leo);
// console.log(frank);




// // Part 4

// class Character {
//     static MAX_HEALTH = 100;

//     constructor(name) {
//         this.health = Character.MAX_HEALTH
//         this.name = name;
//     }
// }

// class Adventurer extends Character {
//     static ROLES = ["Fighter", "Healer", "Wizard"];

//     constructor(name, role) {
//         super(name);
//         this.name = name;
//         this.role = role;
        

//         if (!Adventurer.ROLES.includes(role)){
//             throw new Error("Invalid role.");
//         }
//         this.role = role;
//     }
// }

// const robin = new Adventurer("Robin", "Wizard")
// const leo = new Adventurer("Leo", "Healer")
// const frank = new Adventurer("Frank", "Fighter")

// console.log(robin);
// console.log(leo);
// console.log(frank);

// try {
//     const adventurer = new Adventurer("Robin", "Thief");
//     console.log(adventurer);
// } catch (error) {
//     console.error(error.message);
// }
