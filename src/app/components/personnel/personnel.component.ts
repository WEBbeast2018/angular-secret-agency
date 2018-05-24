import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../services/agent.service';
import { Agent } from '../../models/Agent';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  allAgents: Agent[];
  agents: Agent[];

  constructor(private agentService: AgentService) { }

  ngOnInit() {
    this.allAgents = this.agentService.getAgents();
    this.agents = this.allAgents;
  }

  filterBySkill(event) {
    const value = event.target.value;
    if (value === 'null') {
      this.agents = this.allAgents;
    } else {
      // this.agents = ???
    }
  }

}
