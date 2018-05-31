import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { agentReducer } from './agents/agent.reducer';
import { personnelReducer } from './personnel/personnel.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({
      agents: agentReducer,
      personnel: personnelReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  declarations: []
})

export class StateModule {
}
