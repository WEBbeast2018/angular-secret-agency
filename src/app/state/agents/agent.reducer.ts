import { AgentAction, AgentActionTypes } from './agent.actions';
import { Agent } from './agent.model';
import { agents as mockAgents } from '../../mock/agents.mock-data';

export type IAgentsState = Agent[];
const initUserState: IAgentsState = mockAgents;

export function agentReducer(state: IAgentsState = initUserState, action: AgentAction) {
  switch (action.type) {
    case AgentActionTypes.ADD_AGENT:
      return state.concat(action.payload);

    case AgentActionTypes.REMOVE_AGENT:
      return state.filter(agent => agent.code !== action.payload.code);

    default:
      return state;
  }
}
