var myPet = {
  name: "Jrlandoo",
  type: "dog",
  age: 2,
  happiness: 20,
  hunger: 70,
  feed: function () {
    if (this.hunger > 0) {
      this.hunger -= 20;
      alert(`You fed ${this.name}! Hunger decreased by 20.`);
    }
  },
  play: function () {
    if (this.happiness < 100) {
      this.happiness += 20;
      alert(`You played with ${this.name}! Happiness increased by 20.`);
    }
  },
  agePet: function () {
    this.age += 1;
    dogAge.textContent = `Age: ${this.age}`;
    if (this.happiness < 100) {
      this.happiness += 5;
    }
    if (this.hunger > 0) {
        this.hunger -= 10;
      }
      alert(`${this.name} is now ${this.age} years old! and happiness increased by 5 and hunger decreased by 10.`);
  },
  getInfo: function () {
    return `I am a ${this.type} named ${this.name} and I am ${
      this.age
    } years old. I am ${this.happiness}% happy and ${this.hunger}% full (${
      100 - this.hunger
    }% Hungry)`;
  },
};

var takePrompt = prompt("What would you like to do with your pet? (name, type, feed, play, age, or get-info?)");

if (takePrompt === "name") {
  alert(`Pet name is ${myPet.name}`);
} else if (takePrompt === "type") {
  alert(myPet.type);
} else if (takePrompt === "feed") {
  myPet.feed();
} else if (takePrompt === "play") {
  myPet.play();
} else if (takePrompt === "age") {
  myPet.agePet();
} else if (takePrompt === "get-info") {
  alert(myPet.getInfo());
} else {
  alert("I don't recognize that command. Please try again.");
}