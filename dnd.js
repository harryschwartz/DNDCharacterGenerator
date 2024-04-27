// Custom Inputs: Feel free to manipulate these as you wish...
const firstName = '';
const middleName = '';
const lastName = '';
const nickname = '';
const pronouns = '';
const employmentStatus = '';
const jobTitle = '';
const dreamProfession = ''
const favAnimal = '';
const favGame = ''; // i.e. monopoly, uno, tag, etc.
const favColor = '';
const favMusicGenre = '';
const favAthlete = '';
const favCeleb = '';
const favHobby = '';
const favWeapon = '';
const anotherWeapon = '';
const streetName = '';
const mood = ''; // i.e. angry, happy, sad, etc.
const ethnicity = '';
const modeOfTransportation = '';
const zodiacSign = '';
const personalityTrait = ''; // i.e. bold, quiet, energetic, etc.
const drinkOfChoice = '';
const bestFeature = ''; // i.e. tall, dark, handsome, etc.

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
]; // 25 total

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
]; // 12 total

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
]; // 9 total

// gets random item from the arrays above
function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// generateCharacter() function
// output type A: __firstName__ __lastName___, a __race__ __class___
// output type B: __name__ the __adj___, a __race___ __class___
function generateCharacter() {
let name = getRandomItem(inputs) + ' ' + getRandomItem(inputs);
let race = getRandomItem(dndRaces);
let class = getRandomItem(dndClasses);
console.log(`${name}, a ${race} ${class}`);
};