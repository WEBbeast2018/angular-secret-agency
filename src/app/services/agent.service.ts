import { Injectable } from '@angular/core';
import { Agent } from '../models/Agent';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  agents: Agent[];

  constructor() {
    this.agents = [
      {
        code: '006',
        age: 30,
        name: 'Shmerling Archer',
        skills: { martialArt: 10, marksmanship: 9, explosives: 3, medical: 5, strength: 7, stealth: 2 },
        location: {lat: 40.741895, lon: -73.989308}
      },
      {
        code: '007',
        age: 35,
        name: 'James Bomb',
        skills: { martialArt: 10, marksmanship: 10, explosives: 8, medical: 3, strength: 8, stealth: 7 },
        location: {lat: 46.92107354423075, lon: -113.53239194680793}
      },
      {
        code: '009',
        age: 45,
        name: 'Agent K',
        skills: { martialArt: 6, marksmanship: 6, explosives: 10, medical: 5, strength: 5, stealth: 4 },
        location: {lat: 24.7092534494744, lon: 24.7092534494744}
      },
      {
        code: '005',
        age: 32,
        name: 'Agent J',
        skills: { martialArt: 8, marksmanship: 3, explosives: 5, medical: 3, strength: 8, stealth: 8 },
        location: {lat: 24.7092534494744, lon: 24.7092534494744}
      },
      {
        code: '004',
        age: 29,
        name: 'DR Q',
        skills: { martialArt: 7, marksmanship: 3, explosives: 3, medical: 10, strength: 8, stealth: 4 },
        location: {lat: 39.92856219208878, lon: -4.403369938616606}
      }
    ];
  }

  addAgent(agent: Agent) {
    this.agents.push(agent);
  }

  getAgents(): Agent[] {
    return this.agents;
  }
}

