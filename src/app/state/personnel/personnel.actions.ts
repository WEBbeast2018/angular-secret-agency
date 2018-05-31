import { Action } from '@ngrx/store';

export enum PersonnelActionTypes {
  SET_FILTER = '[Personnel] Set Filter',
}

export class SetFilter implements Action {
  readonly type = PersonnelActionTypes.SET_FILTER;

  constructor(public payload: string) {
  }
}


export type PersonnelAction =
  SetFilter;


export const PersonnelAction = {
  SetFilter
};
