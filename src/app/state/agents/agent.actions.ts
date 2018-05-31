import { Action } from '@ngrx/store';
import { Agent } from './agent.model';

export enum AgentActionTypes {
  ADD_AGENT = '[Agent] Add Agent',
  REMOVE_AGENT = '[Agent] remove Agent',
}

class AddAgent implements Action {
  readonly type = AgentActionTypes.ADD_AGENT;

  constructor(public payload: Agent) {
  }
}

class RemoveAgent implements Action {
  readonly type = AgentActionTypes.REMOVE_AGENT;

  constructor(public payload: Agent) {
  }
}

export type AgentAction =
  AddAgent |
  RemoveAgent;

export const AgentAction = {
  AddAgent,
  RemoveAgent
};
