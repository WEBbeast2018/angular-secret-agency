import { Action } from '@ngrx/store';

export enum AppActionTypes {
  TOGGLE_LOADER = '[App] Toggle Loader',
}

class ToggleLoader implements Action {
  readonly type = AppActionTypes.TOGGLE_LOADER;

  constructor(public payload: boolean) {
  }
}

export type AppAction =
  ToggleLoader;


export const AppAction = {
  ToggleLoader
};
