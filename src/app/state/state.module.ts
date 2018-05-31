import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { agentReducer } from './agents/agent.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({
      agents: agentReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  declarations: []
})
export class StateModule {
}
