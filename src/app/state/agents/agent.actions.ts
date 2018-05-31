import { Action } from '@ngrx/store';
import { Agent } from './agent.model';

export enum AgentActionTypes {
  ADD_AGENT = '[Agent] Add Agent',
  REMOVE_AGENT = '[Agent] remove Agent',
}

export class AddAgent implements Action {
  readonly type = AgentActionTypes.ADD_AGENT;

  constructor(public payload: Agent) {
  }
}

export class RemoveAgent implements Action {
  readonly type = AgentActionTypes.REMOVE_AGENT;

  constructor(public payload: Agent) {
  }
}

export type AgentAction =
  AddAgent |
  RemoveAgent;
