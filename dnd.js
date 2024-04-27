// Custom Inputs: Feel free to manipulate these as you wish...
const firstName = 'Harry';
const middleName = 'Rufino';
const lastName = 'Schwartz';
const nickname = 'Wizard';
const pronouns = 'He/Himothee';
const employmentStatus = 'Student';
const jobTitle = 'Founder';
const dreamProfession = 'Astronaut'
const favAnimal = 'Gazelle';
const favGame = 'Catan'; // i.e. monopoly, uno, tag, etc.
const favColor = 'Green';
const favMusicGenre = 'Indie Pop';
const favAthlete = 'Justin Jefferson';
const favCeleb = 'Margot Robbie';
const favHobby = 'Tennis';
const favWeapon = 'Katana';
const anotherWeapon = 'Dagger';
const streetName = 'Prince';
const mood = 'Jubilant'; // i.e. angry, happy, sad, etc.
const ethnicity = 'Jewlapino';
const modeOfTransportation = 'F150';
const zodiacSign = 'Cancer';
const personalityTrait = 'Curious'; // i.e. bold, quiet, energetic, etc.
const drinkOfChoice = 'Spindrift';
const bestFeature = 'Driven'; // i.e. tall, dark, handsome, etc.

const inputs = [
    firstName, 
    middleName, 
    lastName, 
    nickname, 
    pronouns, 
    employmentStatus, 
    jobTitle, 
    dreamProfession,
    favAnimal, 
    favGame, 
    favColor, 
    favMusicGenre, 
    favAthlete, 
    favCeleb, 
    favHobby, 
    favWeapon, 
    anotherWeapon, 
    streetName, 
    mood, 
    ethnicity, 
    modeOfTransportation, 
    zodiacSign, 
    personalityTrait, 
    drinkOfChoice, 
    bestFeature
]; 

// Preset classes. Do not change.
const dndClasses = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard"
]; 

// Preset races. Do not change.
const dndRaces = [
    "Human",
    "Elf",
    "Dwarf",
    "Halfling",
    "Dragonborn",
    "Gnome",
    "Half-Elf",
    "Half-Orc",
    "Tiefling"
]; 

// gets random item from the arrays above
function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// generateCharacter() function
// output type A: __firstName__ __lastName___, a __race__ __class___ FINISHED
// output type B: __name__ the __adj___, a __race___ __class___ TO DO
function generateCharacter() {
    let name = getRandomItem(inputs) + ' ' + getRandomItem(inputs); // Type A
    let outputType = Math.random(); // Randomization
    if (outputType >= 0.5) {
        name = getRandomItem(inputs) + ' the ' + getRandomItem(inputs); // Tpe B
    };
let dndRace = getRandomItem(dndRaces);
let dndClass = getRandomItem(dndClasses);
console.log(`${name}, a ${dndRace} ${dndClass}`);
};

generateCharacter();