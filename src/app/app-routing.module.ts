import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAgentComponent } from './components/new-agent/new-agent.component';
import { PersonnelComponent } from './components/personnel/personnel.component';
import { ThemeComponent } from './components/theme/theme.component';

const routes: Routes = [
  {path: '', redirectTo: '/personnel', pathMatch: 'full'},
  {path: 'personnel', component: PersonnelComponent},
  {path: 'theme', component: ThemeComponent},
  {path: 'new', component: NewAgentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
