import { Component, OnInit } from '@angular/core';
import { maxBy } from 'lodash';
import { Store } from '@ngrx/store';
import { IAgentsState } from '../../state/agents/agent.reducer';
import { Agent } from '../../state/agents/agent.model';
import { IPersonnelState } from '../../state/personnel/personnel.reducer';
import { PersonnelAction } from '../../state/personnel/personnel.actions';
import { AppAction } from '../../state/app/app.actions';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  allAgents: Agent[];
  agents: Agent[];
  filter: string;

  constructor(private store: Store<IAgentsState>) {
  }

  ngOnInit() {
    this.store.select<IAgentsState>('agents').subscribe( (agentsCollection: IAgentsState) => {
        this.agents = agentsCollection;
        this.allAgents = agentsCollection;
    });
    this.store.select<IPersonnelState>('personnel').subscribe( (personnelState: IPersonnelState) => {
      this.filter = personnelState.filter;
      if (this.filter === 'none') {
        this.agents = this.allAgents;
      } else {
        const topAgent = maxBy(this.allAgents, agent => agent.skills[this.filter]);
        this.agents = [topAgent];
      }
    });
  }

  filterBySkill(event) {
    this.store.dispatch(new AppAction.ToggleLoader(true));
    // simulate work
    setTimeout(() => {
      this.store.dispatch(new PersonnelAction.SetFilter(event.value));
    }, 1000);
  }
}
