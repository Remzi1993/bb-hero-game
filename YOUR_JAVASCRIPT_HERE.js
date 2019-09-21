// Write your JS here

let hero = {
    name: 'Pikachu',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'Sword',
        damage: 2
    },
};

// rest function can be called with object as an argument
function rest(hero) {
    
    // And (re)assigns the health property of that object the value 10
    hero.health = 10;

    // Creates an alert popup with a message, If the health property of that object already has the value 10
    if (hero.health === 10) {
        alert("Your health is already level 10");
    }

    return hero;
}



// pickUpItem function can be called with a hero-like object as the first argument and a weapon-like object as the second argument
let weapon = {
    type: 'dagger',
    damage: 2
}

function pickUpItem(hero, weapon) {
    
    // Adds the weapon-like object as the last element of the inventory array of the hero-like object
    
    // When the dagger is clicked it will add a weapon-like object to the inventory array with `type`: `dagger` and `damage`: 2
    hero.inventory = [weapon];

    console.log(hero);
    
}

function equipWeapon(params) {

}