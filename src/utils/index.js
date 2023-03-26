import { randomNames, randomSurnames} from "../constants";

export function getRandomName() {
    const firstName = randomNames[Math.floor(Math.random() * randomNames.length)];
    const surname =
      randomSurnames[Math.floor(Math.random() * randomSurnames.length)];
    return firstName + surname;
  }
  
  export function getMemberColor() {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  }