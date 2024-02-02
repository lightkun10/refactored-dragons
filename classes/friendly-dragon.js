const Dragon = require("./dragon");

class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals=[], friend) {
        super(name, color);

        // an array of skills the Friendly Dragon is good at
        this.lifeGoals = lifeGoals;

        this.friend = friend;   // the Friendly Dragon's best buddy
    }

    hasLifeGoals() {
        this.lifeGoals.forEach((lifeGoal) => console.log(`${this.name} likes to ${lifeGoal}`));
    }

    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`;
    }
}


try {
    module.exports = FriendlyDragon;
  } catch {
    module.exports = null;
}
