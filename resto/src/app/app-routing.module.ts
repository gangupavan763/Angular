import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{AddRestoComponent} from './add-resto/add-resto.component'
import{ListRestoComponent} from './list-resto/list-resto.component'
import{LoginComponent} from './login/login.component'
import{RegisterComponent} from './register/register.component'
import{UpdateRestoComponent} from './/update-resto/update-resto.component'

const routes: Routes = [
  {
    component:AddRestoComponent,
    path:'add'
  },
  {
    component:ListRestoComponent,
    path:'list'
  },
  {
    component:UpdateRestoComponent,
    path:'update'
  },
  {
    component:RegisterComponent,
    path:'register'
  },
  {
    component:LoginComponent,
    path:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
