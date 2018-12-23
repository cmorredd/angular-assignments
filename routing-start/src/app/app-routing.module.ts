import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';
import {CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  {path:'users', component:UsersComponent,children:[{path:':id/:name', component:UserComponent}]},
  {path:'servers'
  //,canActivate: [AuthGuard]
  ,canActivateChild: [AuthGuardService]
  , component:ServersComponent,children:[
  {path:':id', component:ServerComponent, resolve: {server: ServerResolver}},
  {path:':id/edit', component: EditServerComponent,canDeactivate:[CanDeactivateGuard]}]},    
  {path:'', component:HomeComponent},
  //{path:'not-found',component:PageNotFoundComponent},
  {path:'not-found',component:ErrorPageComponent,data: {message: 'Page Not found!'}},
  {path:'**',redirectTo:'not-found'}
];

@NgModule({
	imports: [
		//RouterModule.forRoot(appRoutes,{useHash: true})
     RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule{

}