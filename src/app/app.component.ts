import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './state/app/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = false;

  constructor(private store: Store<IAppState>) {
    this.store.select<IAppState>('app').subscribe( (appState: IAppState) => {
      this.loading = appState.loaderOn;
    });
  }
}
