import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';

const router :Routes=[
  {path:"as",component:ServerComponent},
]

@NgModule({
  declarations: [
    AppComponent,ServerComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
