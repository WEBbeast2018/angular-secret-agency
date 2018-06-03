import { AppAction, AppActionTypes } from './app.actions';

export interface IAppState {
  loaderOn: boolean;
}

const initAppState: IAppState = {
  loaderOn: false,
};

export function appReducer(state: IAppState = initAppState, action: AppAction) {
  switch (action.type) {
    case AppActionTypes.TOGGLE_LOADER:
      return Object.assign({}, state, {
        loaderOn: action.payload
    });

    default:
      return state;
  }
}
