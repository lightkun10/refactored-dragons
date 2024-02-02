# Refactored Dragons

This project is part of my learning journey at App Academy Open, where I delve into the
exciting world of object-oriented programming, classes, and CommonJS module importing/exporting. 🚀

## Phase 1: Create a Dragon

Let's begin by crafting a majestic Dragon class! 🐉

### Dragon Class Features:
- Initialize dragons with names and colors.
- Witness the mighty dragons breathe fire with the `breathesFire` method.
- Use the `getDragons` static method to gather an array of dragon names.

Check out the Mocha test specs in `test/dragon-spec.js` and run them with `npm test test/dragon-spec.js`.

Example usage:
```javascript
const puff = new Dragon("Puff", "green");
console.log(puff);
console.log(puff.breathesFire());
console.log(Dragon.getDragons(puff));
```

## Phase 2: Create a Friendly Dragon

Now, let's introduce the FriendlyDragon class, a delightful kin to the Dragon family! 🐲

### FriendlyDragon Class Features:
- Inherits from the Dragon class.
- Additional properties for life goals, friends, and
  methods to showcase goals and helpfulness.

Explore the Mocha test specs in `test/friendly-dragon-spec.js`
and run them with `npm test test/friendly-dragon-spec.js`.

Example usage:

```javascript
  const puff = new FriendlyDragon("Puff", "green", ["save the day"], "Jackie Paper");
  console.log(puff);
  console.log(puff.breathesFire());
  puff.hasLifeGoals();
  console.log(puff.helpsPeople());
```

## Phase 3: Create an Evil Dragon
Unleash the EvilDragon class, a formidable adversary in the dragon realm! 🔥

### EvilDragon Class Features:
- Inherits from the Dragon class.
- Introduces evil deeds and nemeses, with methods to showcase
wickedness and destruction.

Dive into the Mocha test specs in `test/evil-dragon-spec.js`
and run them with `npm test test/evil-dragon-spec.js`.

Example usage:
```javascript
  const drogon = new EvilDragon("Drogon", "black-red", ["burn everything"], "Night King");
  console.log(drogon);
  drogon.dontInviteThemOverForDinner();
  console.log(drogon.breathesFire());
  console.log(drogon.burnsNemesis());
```

## Phase 4: Make All Dragons
Let the friendly and evil dragons coexist! 🌟

### All-Dragons Class Features:
- Requires the FriendlyDragon and EvilDragon classes.
- Creates instances of both classes and calls static methods.

Experience the Mocha test specs in `test/all-dragons-spec.js` and run them with `npm test test/all-dragons-spec.js`.

Example usage:
```javascript
const falkor = new FriendlyDragon("Falkor", "white", ["save Atreyu"], "Bastian");
const smaug = new EvilDragon("Smaug", "black", ["conquer kingdoms"], "Dwarf King");

console.log(Dragon.getDragons(falkor, smaug));
```
