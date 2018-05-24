import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../services/agent.service';
import { Agent } from '../../models/Agent';
import { maxBy } from 'lodash';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  allAgents: Agent[];
  agents: Agent[];

  constructor(private agentService: AgentService) {
  }

  ngOnInit() {
    this.allAgents = this.agentService.getAgents();
    this.agents = this.allAgents;
  }

  filterBySkill(event) {
    const skill = event.target.value;
    if (skill === 'none') {
      this.agents = this.allAgents;
    } else {
      const topAgent = maxBy(this.allAgents, agent => agent.skills[skill]);
      this.agents = [topAgent];
    }
  }

}
