import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../services/agent.service';
import { Agent } from '../../models/Agent';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  agents: Agent[];

  constructor(private agentService: AgentService) { }

  ngOnInit() {
    this.agents = this.agentService.getAgents();
  }

}
