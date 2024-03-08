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
    roll (mod = 0) {
        const result = Math.floor(Math.random( )* 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}`)
    }
}
//  console.log(adventurer.inventory[0]);

function getInventory(adventurer) {
    return adventurer.inventory;
};
 adventurer.roll();

// console.log(getInventory(adventurer));


//could not figure out how to make the loop iterate through the inventory array

// for (let i = 0; i < adventurer.inventory.length; i++) {
//     console.log(" this is the array" + getInventory.length[i]);
// }
 
