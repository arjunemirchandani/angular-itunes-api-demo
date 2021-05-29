import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./view/pages/home-page/home-page.component";
import {AboutPageComponent} from "./view/pages/about-page/about-page.component";
import {ContactPageComponent} from "./view/pages/contact-page/contact-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'about', component: AboutPageComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactPageComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
