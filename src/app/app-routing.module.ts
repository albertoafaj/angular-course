import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageParamsComponent } from './page-params/page-params.component';
import { ProtectPageComponent } from './protect-page/protect-page.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "page-one", component: FirstPageComponent },
  { path: "page-two", component: SecondPageComponent },
  { path: "", redirectTo: "page-one", pathMatch: "full" },
  { path: "page-params/:id", component: PageParamsComponent },
  { path: "login", component: LoginComponent },
  { path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  { path: "page-protect", component: ProtectPageComponent, canActivate: [AuthGuard] },
  { path: "**", component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
