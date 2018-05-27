export class Agent {
  code: string;
  name: string;
  age: number;
  skills: Skills;
  location: { lat: number, lon: number };

  constructor() {
    this.skills = {
      martialArt: 0,
      marksmanship: 0,
      explosives: 0,
      medical: 0,
      strength: 0,
      stealth: 0
    };
  }
}

interface Skills {
  martialArt: number;
  marksmanship: number;
  explosives: number;
  medical: number;
  strength: number;
  stealth: number;
}
