import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {LandingComponent} from './landing/landing.component';
import {NavigationComponent} from './navigation/navigation.component';
import {LoginComponent} from './login/login.component';
import {GhFooterComponent} from './gh-footer/gh-footer.component';
import {ChatRoomComponent} from './chat-room/chat-room.component';
import {HeaderComponent} from './header/header.component';
import {ContactsComponent} from './contacts/contacts.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path:'home',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'chatroom',component:ChatRoomComponent},
  {path:'contacts',component:ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
