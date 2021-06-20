import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeventComponent } from './addevent/addevent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewEventComponent } from './view-event/view-event.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"addevent", component:AddeventComponent},
  {path:"viewevent",component:ViewEventComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
