import { Component, OnInit } from '@angular/core';
import { Agent } from '../../state/agents/agent.model';
import { IAgentsState } from '../../state/agents/agent.reducer';
import { Store } from '@ngrx/store';
import { AddAgent } from '../../state/agents/agent.actions';

@Component({
  selector: 'app-new-agent',
  templateUrl: './new-agent.component.html',
  styleUrls: ['./new-agent.component.scss']
})
export class NewAgentComponent implements OnInit {
  agent = new Agent();

  constructor(private store: Store<IAgentsState>) {
  }

  ngOnInit() {
  }

  submitAgent() {
    this.store.dispatch(new AddAgent(this.agent));
  }
}
