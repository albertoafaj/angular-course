import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageParamsComponent } from './page-params/page-params.component';

const routes: Routes = [
  { path: "page-one", component: FirstPageComponent },
  { path: "page-two", component: SecondPageComponent },
  { path: "", redirectTo: "page-one", pathMatch: "full" },
  { path: "page-params/:id", component: PageParamsComponent },
  { path: "**", component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
