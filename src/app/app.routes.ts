import { Routes } from '@angular/router';
import { ServerComponent } from './server/server.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes =[
  {
        path:'',
        component:HomeComponent,
        pathMatch:'full'        
 },{
  path:'server',
  component:ServerComponent
 }

];
