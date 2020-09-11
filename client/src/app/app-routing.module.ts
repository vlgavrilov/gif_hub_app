import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreateComponent } from './create/create.component';
const routes: Routes = [
  {path: 'reg', component: RegistrationComponent},
  {path: 'create', component: CreateComponent},
  {path: 'auth', component: AuthorizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
