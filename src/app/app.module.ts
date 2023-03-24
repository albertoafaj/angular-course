import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { TwoWayDataBindinigComponent } from './two-way-data-bindinig/two-way-data-bindinig.component';
import { FormsModule } from '@angular/forms';
import { RenderListComponent } from './render-list/render-list.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildrenComponentComponent } from './children-component/children-component.component';
import { ExampleServices01Component } from './example-services01/example-services01.component';
import { ExampleServices02Component } from './example-services02/example-services02.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    MultiplicaPorPipe,
    CustomPipeComponent,
    TwoWayDataBindinigComponent,
    RenderListComponent,
    CustomComponentComponent,
    ParentComponentComponent,
    ChildrenComponentComponent,
    ExampleServices01Component,
    ExampleServices02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
