import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component'
import { HomeComponent } from './home/home.component'
import {ParentComponent} from './parent/parent.component'
import {ChildComponent} from './child/child.component'

import {FormsModule} from '@angular/forms'
import { StatementComponent } from './statement/statement.component';
import { StudentService } from './services/studentservice';
import { HttpClientModule } from '@angular/common/http';
import { ServiceExampleComponent } from './serviceexamplecomponent/serviceexamplecomponent.component';

const appRoute:Routes = [
  { path: "", component: HomeComponent },
  { path: "counter", component: CounterComponent },
  { path: "parent", component: ParentComponent },
  { path:"statement", component:StatementComponent},
  { path:"serviceexample", component:ServiceExampleComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    StatementComponent,
    ServiceExampleComponent 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
