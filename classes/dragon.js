class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragonArgs) {
    let dragonArr = [];

    for (let dragon of dragonArgs) {
      if (dragon instanceof Dragon) {
        dragonArr.push(dragon.name);
      }
    }

    return dragonArr;
  }

}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
