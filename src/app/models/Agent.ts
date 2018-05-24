export class Agent {
  code: string;
  name: string;
  age: number;
  skills: Skills;
  location: {lat: number, lon: number};
}

interface Skills {
  martialArt: number;
  marksmanship: number;
  explosives: number;
  medical: number;
  strength: number;
  stealth: number;
}
