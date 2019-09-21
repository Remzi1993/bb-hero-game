// Write your JS here

let hero = {
    name: 'Pikachu',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'sword',
        damage: 2
    },
};

console.log(hero); // Just for debugging

// rest function can be called with object as an argument
function rest(hero) {

    // And (re)assigns the health property of that object the value 10
    hero.health = 10;

    // Creates an alert popup with a message, If the health property of that object already has the value 10
    if (hero.health === 10) {
        alert("Your health is already level 10");
    }

    // console.log(hero); // Just for debugging
    return hero;
}

let weapon = {
    type: 'dagger',
    damage: 2
}

// pickUpItem function can be called with a hero-like object as the first argument and a weapon-like object as the second argument
function pickUpItem(hero, weapon) {

    // Adds the weapon-like object as the last element of the inventory array of the hero-like object
    // let heroInventory = hero.inventory;
    hero.inventory.push(weapon);
    console.log(hero); // Just for debugging
}

// equipWeapon function can be called with a hero-like object as an argument
function equipWeapon(hero) {
    // And reassigns the `weapon` property to the first element of the inventory array

    // alert(JSON.stringify(hero.inventory[0], null, 4)); // debugging objects with alart
    let currentWeapon = hero.weapon; // Get current weapon
    hero.inventory.push(currentWeapon); // Put current weapon in the inventory as last item

    let getFirstItemOfinventory = hero.inventory[0]; // Get the first weapon out of the inventory
    hero.weapon = getFirstItemOfinventory // Assign the weapon as the current / active weapon

    hero.inventory.shift(weapon); // Removed the assigned weapon from the inventory

    console.log(hero);

}



// You play as a hero and you have some "stats" like health and inventory


// Stats of the hero
// Name
statName = document.createElement('h3')
statName.innerHTML = 'Name: ' + hero.name;
document.getElementById('displayStats').appendChild(statName);

// Inventory
statInventory = document.createElement('h3')
statInventory.innerHTML = 'Inventory: ' + hero.inventory;
document.getElementById('displayStats').appendChild(statInventory);

// Health
statHealth = document.createElement('h3')
statHealth.innerHTML = 'Health: ' + hero.health;
document.getElementById('displayStats').appendChild(statHealth);

// Current weapon
statWeapon = document.createElement('h3')

statWeapon.innerHTML = `
    Current weapon: ${hero.weapon.type}<br>
    Damage: ${hero.weapon.damage}
`;


// logString = `Description: ${ description }. Properties: ${ JSON.stringify( properties ) }.`

document.getElementById('displayStats').appendChild(statWeapon);
console.log(displayStats);