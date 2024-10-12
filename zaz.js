// Get DOM elements
const dogAge = document.getElementById('dog-age');
const dogHappiness = document.getElementById('dog-happiness');
const dogHunger = document.getElementById('dog-hunger');

const dogAging = document.getElementById('dog-aging');
const dogFeed = document.getElementById('dog-feed');
const dogPlay = document.getElementById('dog-play');
const dogGetInfo = document.getElementById('dog-get-info');

// Create pet object
const myPet = {
    name: 'Jrlandoo',
    type: 'dog',
    age: 2,
    happiness: 20,
    hunger: 70,
    feed: function() {
        this.hunger = Math.max(0, this.hunger - 20);
        updateDisplay();
    },
    play: function() {
        this.happiness = Math.min(100, this.happiness + 20);
        updateDisplay();
    },
    agePet: function() {
        this.age += 1;
        this.happiness = Math.max(0, this.happiness - 5);
        this.hunger = Math.min(100, this.hunger + 10);
        updateDisplay();
    },
    getInfo: function() {
        return `I am a ${this.type} named ${this.name} and I am ${this.age} years old. I am ${this.happiness}% happy and ${this.hunger}% hungry.`;
    }
};

// Function to update display
function updateDisplay() {
    dogAge.textContent = `Age: ${myPet.age}`;
    dogHappiness.textContent = `Happiness: ${myPet.happiness}%`;
    dogHunger.textContent = `Hunger: ${myPet.hunger}%`;
}

// Event listeners
dogAging.addEventListener('click', function() {
    myPet.agePet();
});

dogFeed.addEventListener('click', function() {
    myPet.feed();
});

dogPlay.addEventListener('click', function() {
    myPet.play();
});

dogGetInfo.addEventListener('click', function() {
    alert(myPet.getInfo());
});

// Initial display update
updateDisplay();