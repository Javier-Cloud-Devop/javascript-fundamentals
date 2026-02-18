const spaceship = {
  name: 'Millennium Falcon',
  homePlanet: 'Naboo',
  color: 'white',
  'Fuel Type': 'Turbo Fuel',
  crew: {},
  _missionCount: 0,

  launch() {
    console.log(`${this.name} is launching from ${this.homePlanet}!`);
  },

  addCrewMember(role, memberObj) {
    this.crew[role] = memberObj;
  },

  get missionCount() {
    return this._missionCount;
  },

  set missionCount(value) {
    if (typeof value === 'number' && value >= 0) {
      this._missionCount = value;
    } else {
      console.log('Invalid mission count');
    }
  }
};

// Factory function (property value shorthand + method with `this`)
const createCrewMember = (name, degree) => {
  return {
    name,
    degree,
    introduce() {
      console.log(`Hi, I'm ${this.name} (${this.degree}).`);
    }
  };
};

// Create crew members
const jose = createCrewMember('Jose', 'Captain');
const maria = createCrewMember('Maria', 'Chief Officer');
const juan = createCrewMember('Juan', 'Medic');

// Add them to the spaceship (note role with space)
spaceship.addCrewMember('captain', jose);
spaceship.addCrewMember('chief officer', maria);
spaceship.addCrewMember('medic', juan);

// --- Access properties: dot, bracket, dynamic ---
console.log('--- Property access ---');
console.log('Name (dot):', spaceship.name);
console.log('Fuel Type (bracket):', spaceship['Fuel Type']);

const propName = 'homePlanet';
console.log('Home planet (dynamic):', spaceship[propName]);

// --- Update / add / delete properties ---
console.log('\n--- Update / add / delete ---');
spaceship.color = 'glorious gold';
spaceship.speed = 'Mach 5';
console.log('Color updated:', spaceship.color);
console.log('Speed added:', spaceship.speed);

delete spaceship.speed;
console.log('Speed after delete:', spaceship.speed); // undefined

// --- Methods + this ---
console.log('\n--- Methods ---');
spaceship.launch();
spaceship.crew.captain.introduce();

// --- Getter / Setter ---
console.log('\n--- Getter / Setter ---');
console.log('Mission count (getter):', spaceship.missionCount);

spaceship.missionCount = 3;
console.log('Mission count after set:', spaceship.missionCount);

spaceship.missionCount = -1;   // invalid
spaceship.missionCount = '3';  // invalid

// --- Looping through object: for...in ---
console.log('\n--- Crew list (for...in) ---');
for (let role in spaceship.crew) {
  console.log(`${role}: ${spaceship.crew[role].name} (${spaceship.crew[role].degree})`);
}

// --- Destructuring ---
console.log('\n--- Destructuring ---');
const { name, homePlanet } = spaceship;
console.log('Destructured:', name, homePlanet);

const { degree } = spaceship.crew.captain;
console.log('Captain degree:', degree);

// --- Object.keys / Object.entries ---
console.log('\n--- Object.keys / Object.entries ---');
const roles = Object.keys(spaceship.crew);
console.log('Number of roles:', roles.length);

for (const [role, member] of Object.entries(spaceship.crew)) {
  console.log([role, member.name]);
}

// --- Pass-by-reference mutation ---
console.log('\n--- Pass-by-reference ---');
const paintIt = obj => {
  obj.color = 'neon pink';
};

paintIt(spaceship);
console.log('Color after paintIt():', spaceship.color);
