export class Agent {
  code: string;
  name: string;
  age: number;
  skills: Skills;
}

interface Skills {
  martialArt: number;
  marksmanship: number;
  explosives: number;
  medical: number;
  strength: number;
  stealth: number;
}
