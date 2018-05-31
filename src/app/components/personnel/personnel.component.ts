import { Component, OnInit } from '@angular/core';
import { maxBy } from 'lodash';
import { Store } from '@ngrx/store';
import { IAgentsState } from '../../state/agents/agent.reducer';
import { Agent } from '../../state/agents/agent.model';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  allAgents: Agent[] = [];
  agents: Agent[] = [];

  constructor(private store: Store<IAgentsState>) {
  }

  ngOnInit() {
    this.store.select<IAgentsState>('agents').subscribe( (agentsCollection: IAgentsState) => {
        this.agents = agentsCollection;
        this.allAgents = agentsCollection;
    });
  }

  filterBySkill(event) {
    const skill = event.value;
    if (skill === 'none') {
      this.agents = this.allAgents;
    } else {
      const topAgent = maxBy(this.allAgents, agent => agent.skills[skill]);
      this.agents = [topAgent];
    }
  }

}
