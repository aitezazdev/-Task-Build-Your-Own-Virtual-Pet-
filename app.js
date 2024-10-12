var dogAge = document.getElementById("dog-age");
var dogHappiness = document.getElementById("dog-happiness");
var dogHunger = document.getElementById("dog-hunger");

var dogAging = document.getElementById("dog-aging");
var dogFeed = document.getElementById("dog-feed");
var dogPlay = document.getElementById("dog-play");
var dogGetInfo = document.getElementById("dog-get-info");

var myPet = {
  name: "Jrlandoo",
  type: "dog",
  age: 2,
  happiness: 20,
  hunger: 70,
  feed: function () {
    if (this.hunger > 0) {
      this.hunger -= 20;
      dogHunger.textContent = `Hunger: ${this.hunger}%`;
    }
  },
  play: function () {
    if (this.happiness < 100) {
      this.happiness += 20;
      dogHappiness.textContent = `Happiness: ${this.happiness}%`;
    }
  },
  agePet: function () {
    this.age += 1;
    dogAge.textContent = `Age: ${this.age}`;
    if (this.happiness < 100) {
      this.happiness += 5;
      dogHappiness.textContent = `Happiness: ${this.happiness}%`;
    }
    if (this.hunger > 0) {
        this.hunger -= 10;
        dogHunger.textContent = `Hunger: ${this.hunger}%`;
      }
  },
  getInfo: function () {
    return `I am a ${this.type} named ${this.name} and I am ${
      this.age
    } years old. I am ${this.happiness}% happy and ${this.hunger}% full (${
      100 - this.hunger
    }% Hungry)`;
  },
};

dogAging.addEventListener("click", function () {
  myPet.agePet();
});

dogFeed.addEventListener("click", function () {
  myPet.feed();
});

dogPlay.addEventListener("click", function () {
  myPet.play();
});

dogGetInfo.addEventListener("click", function () {
  alert(myPet.getInfo());
});
