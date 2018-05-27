import { Component, OnInit } from '@angular/core';
import { Agent } from '../../models/Agent';
import { AgentService } from '../../services/agent.service';

@Component({
  selector: 'app-new-agent',
  templateUrl: './new-agent.component.html',
  styleUrls: ['./new-agent.component.scss']
})
export class NewAgentComponent implements OnInit {
  agent = new Agent();

  constructor(private agentService: AgentService) {
  }

  ngOnInit() {
  }

  submitAgent() {
    this.agentService.addAgent(this.agent);
  }
}
