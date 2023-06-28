import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from "src/app/user-list/user-list.component";
import { SearchComponent } from './search/search.component';
import { UserDetailComponent } from './user-list/user-detail/user-detail.component';
import { BodyComponent } from './body/body.component';
import { UserAddComponent } from './user-list/user-add/user-add.component';
import { UserUpdateComponent } from './user-list/user-update/user-update.component';

const routes: Routes = [
  {path:'user-list', component:UserListComponent},
  {path:'search', component: SearchComponent},
  {path:'addUser', component: UserAddComponent},
  {path:'user-detail/:id', component: UserDetailComponent},
  {path:'user-update/:id', component: UserUpdateComponent},
  {path:'home', component: BodyComponent},
  {path:'',redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
