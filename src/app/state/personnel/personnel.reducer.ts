import { PersonnelAction, PersonnelActionTypes } from './personnel.actions';

export interface IPersonnelState {
  filter: string;
}

const initPersonnelState: IPersonnelState = {
  filter: 'none'
};

export function personnelReducer(state: IPersonnelState = initPersonnelState, action: PersonnelAction) {
  switch (action.type) {
    case PersonnelActionTypes.SET_FILTER:
      return Object.assign({}, state, {
        filter: action.payload
    });

    default:
      return state;
  }
}
